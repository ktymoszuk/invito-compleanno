<?php

namespace Tests\Feature;

use App\Models\Invitato;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InvitatiTest extends TestCase
{
    use RefreshDatabase;

    public function test_an_invitation_request_is_stored_as_pending(): void
    {
        $response = $this->postJson('/invitati', [
            'nome' => 'Mario',
            'cognome' => 'Rossi',
            'invitato_da' => 'Karolina',
        ]);

        $response->assertCreated();
        $this->assertDatabaseHas('invitati', [
            'nome' => 'Mario',
            'cognome' => 'Rossi',
            'invitato_da' => 'Karolina',
            'approved' => 0,
        ]);
    }

    public function test_the_public_list_only_contains_approved_guests(): void
    {
        Invitato::create([
            'nome' => 'Anna',
            'cognome' => 'Verdi',
            'invitato_da' => 'Karolina',
            'approved' => 1,
        ]);

        Invitato::create([
            'nome' => 'Luca',
            'cognome' => 'Bianchi',
            'invitato_da' => 'Karolina',
            'approved' => 0,
        ]);

        $this->getJson('/invitati')
            ->assertOk()
            ->assertJsonCount(1)
            ->assertJsonFragment(['nome' => 'Anna', 'cognome' => 'Verdi'])
            ->assertJsonMissing(['nome' => 'Luca']);
    }

    public function test_admin_routes_require_a_valid_login(): void
    {
        config()->set('services.inviti_admin.email', 'staff@example.com');
        config()->set('services.inviti_admin.password', 'secret');

        $this->getJson('/area-riservata/invitati')->assertUnauthorized();

        $this->postJson('/area-riservata/login', [
            'email' => 'staff@example.com',
            'password' => 'wrong',
        ])->assertUnprocessable();

        $this->postJson('/area-riservata/login', [
            'email' => 'staff@example.com',
            'password' => 'secret',
        ])->assertOk()->assertJson(['authenticated' => true]);

        $this->getJson('/area-riservata/invitati')->assertOk();
    }

    public function test_an_authenticated_admin_can_change_invitation_status(): void
    {
        $invitato = Invitato::create([
            'nome' => 'Luca',
            'cognome' => 'Bianchi',
            'invitato_da' => 'Karolina',
            'approved' => 0,
        ]);

        $this->withSession(['inviti_admin_authenticated' => true])
            ->patchJson("/area-riservata/invitati/{$invitato->id}", ['approved' => 2])
            ->assertOk()
            ->assertJson(['approved' => 2]);

        $this->assertDatabaseHas('invitati', [
            'id' => $invitato->id,
            'approved' => 2,
        ]);

        $this->withSession(['inviti_admin_authenticated' => true])
            ->patchJson("/area-riservata/invitati/{$invitato->id}", ['approved' => 3])
            ->assertUnprocessable();
    }

    public function test_admin_guests_are_sorted_by_status_then_name(): void
    {
        foreach ([
            ['nome' => 'Zeno', 'cognome' => 'Gialli', 'approved' => 0],
            ['nome' => 'Anna', 'cognome' => 'Verdi', 'approved' => 1],
            ['nome' => 'Luca', 'cognome' => 'Rossi', 'approved' => 2],
            ['nome' => 'Carla', 'cognome' => 'Blu', 'approved' => 0],
        ] as $guest) {
            Invitato::create([...$guest, 'invitato_da' => 'Staff']);
        }

        $this->withSession(['inviti_admin_authenticated' => true])
            ->getJson('/area-riservata/invitati')
            ->assertOk()
            ->assertJsonPath('0.nome', 'Carla')
            ->assertJsonPath('1.nome', 'Zeno')
            ->assertJsonPath('2.nome', 'Anna')
            ->assertJsonPath('3.nome', 'Luca');
    }
}