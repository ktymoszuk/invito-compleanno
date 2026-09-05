<?php

namespace Tests\Feature;

use App\Models\ProgrammaSerataImpostazione;
use App\Models\ProgrammaSerataVoce;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProgrammaSerataTest extends TestCase
{
    use RefreshDatabase;

    private function csrfSession(bool $authenticated = false): array
    {
        return array_filter([
            '_token' => 'test-token',
            'inviti_admin_authenticated' => $authenticated ?: null,
        ]);
    }

    private function csrfHeaders(): array
    {
        return ['X-CSRF-TOKEN' => 'test-token'];
    }

    public function test_public_program_is_hidden_until_published(): void
    {
        ProgrammaSerataVoce::create(['orario' => '21:30', 'descrizione' => 'Apertura porte']);

        $this->getJson('/programma-serata')
            ->assertOk()
            ->assertJson(['visibile' => false, 'voci' => []]);

        ProgrammaSerataImpostazione::create(['visibile' => true]);

        $this->getJson('/programma-serata')
            ->assertOk()
            ->assertJsonPath('visibile', true)
            ->assertJsonPath('voci.0.descrizione', 'Apertura porte');
    }

    public function test_admin_program_routes_are_protected(): void
    {
        $this->getJson('/area-riservata/programma-serata')->assertUnauthorized();
        $this->withSession($this->csrfSession())
            ->postJson('/area-riservata/programma-serata', [
                'orario' => null,
                'descrizione' => 'Buffet',
            ], $this->csrfHeaders())
            ->assertUnauthorized();
    }

    public function test_admin_can_manage_visibility_and_items(): void
    {
        $response = $this->withSession($this->csrfSession(true))
            ->postJson('/area-riservata/programma-serata', [
                'orario' => '22:15',
                'descrizione' => 'Taglio della torta',
            ], $this->csrfHeaders())
            ->assertCreated();

        $id = $response->json('id');

        $this->withSession($this->csrfSession(true))
            ->patchJson("/area-riservata/programma-serata/{$id}", [
                'orario' => '22:30',
                'descrizione' => 'Torta e brindisi',
            ], $this->csrfHeaders())
            ->assertOk()
            ->assertJson(['orario' => '22:30', 'descrizione' => 'Torta e brindisi']);

        $this->withSession($this->csrfSession(true))
            ->patchJson('/area-riservata/programma-serata/visibilita', ['visibile' => true], $this->csrfHeaders())
            ->assertOk()
            ->assertJson(['visibile' => true]);

        $this->getJson('/programma-serata')
            ->assertJsonPath('voci.0.descrizione', 'Torta e brindisi');

        $this->withSession($this->csrfSession(true))
            ->deleteJson("/area-riservata/programma-serata/{$id}", [], $this->csrfHeaders())
            ->assertNoContent();
    }

    public function test_timed_items_are_sorted_and_untimed_items_can_be_reordered(): void
    {
        $earlyTimed = ProgrammaSerataVoce::create(['orario' => '21:00', 'descrizione' => 'Ingresso', 'posizione' => 0]);
        $firstUntimed = ProgrammaSerataVoce::create(['descrizione' => 'Foto di gruppo', 'posizione' => 1]);
        $lateTimed = ProgrammaSerataVoce::create(['orario' => '23:30', 'descrizione' => 'DJ set', 'posizione' => 2]);
        $secondUntimed = ProgrammaSerataVoce::create(['descrizione' => 'Saluti finali', 'posizione' => 3]);

        $this->withSession($this->csrfSession(true))
            ->patchJson('/area-riservata/programma-serata/ordine', [
                'voci' => [$earlyTimed->id, $secondUntimed->id, $lateTimed->id, $firstUntimed->id],
            ], $this->csrfHeaders())
            ->assertOk()
            ->assertJsonPath('voci.0.descrizione', 'Ingresso')
            ->assertJsonPath('voci.1.descrizione', 'Saluti finali')
            ->assertJsonPath('voci.2.descrizione', 'DJ set')
            ->assertJsonPath('voci.3.descrizione', 'Foto di gruppo');

        $this->withSession($this->csrfSession(true))
            ->patchJson('/area-riservata/programma-serata/ordine', [
                'voci' => [$lateTimed->id, $secondUntimed->id, $earlyTimed->id, $firstUntimed->id],
            ], $this->csrfHeaders())
            ->assertUnprocessable();
    }

    public function test_admin_index_repairs_duplicate_positions_before_reordering(): void
    {
        $lateTimed = ProgrammaSerataVoce::create(['orario' => '23:30', 'descrizione' => 'DJ set', 'posizione' => 0]);
        $earlyTimed = ProgrammaSerataVoce::create(['orario' => '21:00', 'descrizione' => 'Ingresso', 'posizione' => 0]);
        $untimed = ProgrammaSerataVoce::create(['descrizione' => 'Foto di gruppo', 'posizione' => 0]);

        $this->withSession($this->csrfSession(true))
            ->getJson('/area-riservata/programma-serata')
            ->assertOk()
            ->assertJsonPath('voci.0.id', $earlyTimed->id)
            ->assertJsonPath('voci.1.id', $lateTimed->id)
            ->assertJsonPath('voci.2.id', $untimed->id)
            ->assertJsonPath('voci.0.posizione', 0)
            ->assertJsonPath('voci.1.posizione', 1)
            ->assertJsonPath('voci.2.posizione', 2);

        $this->withSession($this->csrfSession(true))
            ->patchJson('/area-riservata/programma-serata/ordine', [
                'voci' => [$earlyTimed->id, $untimed->id, $lateTimed->id],
            ], $this->csrfHeaders())
            ->assertOk()
            ->assertJsonPath('voci.1.id', $untimed->id);

        $this->withSession($this->csrfSession(true))
            ->getJson('/area-riservata/programma-serata')
            ->assertOk()
            ->assertJsonPath('voci.0.id', $earlyTimed->id)
            ->assertJsonPath('voci.1.id', $untimed->id)
            ->assertJsonPath('voci.2.id', $lateTimed->id);
    }

    public function test_new_timed_item_is_inserted_in_chronological_order(): void
    {
        ProgrammaSerataVoce::create(['orario' => '21:00', 'descrizione' => 'Ingresso', 'posizione' => 0]);
        ProgrammaSerataVoce::create(['descrizione' => 'Foto di gruppo', 'posizione' => 1]);
        ProgrammaSerataVoce::create(['orario' => '23:30', 'descrizione' => 'DJ set', 'posizione' => 2]);

        $this->withSession($this->csrfSession(true))
            ->postJson('/area-riservata/programma-serata', [
                'orario' => '22:00',
                'descrizione' => 'Brindisi',
            ], $this->csrfHeaders())
            ->assertCreated();

        $this->withSession($this->csrfSession(true))
            ->getJson('/area-riservata/programma-serata')
            ->assertOk()
            ->assertJsonPath('voci.0.descrizione', 'Ingresso')
            ->assertJsonPath('voci.1.descrizione', 'Foto di gruppo')
            ->assertJsonPath('voci.2.descrizione', 'Brindisi')
            ->assertJsonPath('voci.3.descrizione', 'DJ set');
    }
}
