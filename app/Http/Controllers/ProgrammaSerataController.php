<?php

namespace App\Http\Controllers;

use App\Models\ProgrammaSerataImpostazione;
use App\Models\ProgrammaSerataVoce;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProgrammaSerataController extends Controller
{
    public function index(): JsonResponse
    {
        $this->normalizzaOrdineCronologico();
        $visibile = ProgrammaSerataImpostazione::query()->value('visibile') ?? false;

        return response()->json([
            'visibile' => (bool) $visibile,
            'voci' => $visibile ? $this->vociOrdinate() : [],
        ]);
    }

    public function adminIndex(Request $request): JsonResponse
    {
        if ($response = $this->nonAutorizzato($request)) {
            return $response;
        }

        $this->normalizzaOrdineCronologico();

        return response()->json([
            'visibile' => (bool) (ProgrammaSerataImpostazione::query()->value('visibile') ?? false),
            'voci' => $this->vociOrdinate(),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        if ($response = $this->nonAutorizzato($request)) {
            return $response;
        }

        $validated = $request->validate([
            'orario' => ['nullable', 'date_format:H:i'],
            'descrizione' => ['required', 'string', 'max:255'],
        ]);

        $voce = ProgrammaSerataVoce::create([
            ...$validated,
            'orario' => $validated['orario'] ?? null,
            'posizione' => (ProgrammaSerataVoce::max('posizione') ?? -1) + 1,
        ]);

        $this->normalizzaOrdineCronologico();

        return response()->json($voce->fresh(), 201);
    }

    public function update(Request $request, ProgrammaSerataVoce $voce): JsonResponse
    {
        if ($response = $this->nonAutorizzato($request)) {
            return $response;
        }

        $validated = $request->validate([
            'orario' => ['nullable', 'date_format:H:i'],
            'descrizione' => ['required', 'string', 'max:255'],
        ]);

        $voce->update([
            ...$validated,
            'orario' => $validated['orario'] ?? null,
        ]);

        $this->normalizzaOrdineCronologico();

        return response()->json($voce->fresh());
    }

    public function destroy(Request $request, ProgrammaSerataVoce $voce): JsonResponse
    {
        if ($response = $this->nonAutorizzato($request)) {
            return $response;
        }

        $voce->delete();
        $this->normalizzaOrdineCronologico();

        return response()->json([], 204);
    }

    public function reorder(Request $request): JsonResponse
    {
        if ($response = $this->nonAutorizzato($request)) {
            return $response;
        }

        $validated = $request->validate([
            'voci' => ['required', 'array'],
            'voci.*' => ['integer', 'distinct', 'exists:programma_serata_voci,id'],
        ]);

        if (count($validated['voci']) !== ProgrammaSerataVoce::count()) {
            return response()->json(['message' => 'L’ordine deve includere tutte le voci.'], 422);
        }

        $voci = ProgrammaSerataVoce::query()->whereIn('id', $validated['voci'])->get()->keyBy('id');
        $orari = collect($validated['voci'])
            ->map(fn (int $id) => $voci[$id]->orario)
            ->filter()
            ->values();

        if ($orari->all() !== $orari->sort()->values()->all()) {
            return response()->json(['message' => 'Le voci con orario devono restare in ordine cronologico.'], 422);
        }

        DB::transaction(function () use ($validated) {
            foreach ($validated['voci'] as $posizione => $id) {
                ProgrammaSerataVoce::whereKey($id)->update(['posizione' => $posizione]);
            }
        });

        return response()->json(['voci' => $this->vociOrdinate()]);
    }

    public function visibility(Request $request): JsonResponse
    {
        if ($response = $this->nonAutorizzato($request)) {
            return $response;
        }

        $validated = $request->validate([
            'visibile' => ['required', 'boolean'],
        ]);

        $impostazione = ProgrammaSerataImpostazione::query()->firstOrCreate();
        $impostazione->update($validated);

        return response()->json(['visibile' => $impostazione->visibile]);
    }

    private function vociOrdinate()
    {
        return ProgrammaSerataVoce::query()
            ->orderBy('posizione')
            ->orderBy('id')
            ->get(['id', 'orario', 'descrizione', 'posizione']);
    }

    private function normalizzaOrdineCronologico(): void
    {
        $voci = ProgrammaSerataVoce::query()
            ->orderBy('posizione')
            ->orderBy('id')
            ->get();
        $vociConOrario = $voci->whereNotNull('orario')->sortBy('orario')->values();
        $indiceOrario = 0;

        DB::transaction(function () use ($voci, $vociConOrario, &$indiceOrario) {
            foreach ($voci as $posizione => $voce) {
                $voceOrdinata = $voce->orario ? $vociConOrario[$indiceOrario++] : $voce;
                if ($voceOrdinata->posizione !== $posizione) {
                    $voceOrdinata->update(['posizione' => $posizione]);
                }
            }
        });
    }

    private function nonAutorizzato(Request $request): ?JsonResponse
    {
        if (! $request->session()->get('inviti_admin_authenticated', false)) {
            return response()->json(['message' => 'Non autenticato.'], 401);
        }

        return null;
    }
}
