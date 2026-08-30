<?php

namespace App\Http\Controllers;

use App\Models\Invitato;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InvitatiController extends Controller
{
    public function index(): JsonResponse
    {
        $invitati = Invitato::query()
            ->where('approved', 1)
            ->orderBy('nome')
            ->orderBy('cognome')
            ->get(['id', 'nome', 'cognome', 'approved']);

        return response()->json($invitati);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nome' => ['required', 'string', 'max:50'],
            'cognome' => ['required', 'string', 'max:50'],
            'invitato_da' => ['required', 'string', 'max:100'],
        ]);

        $invitato = Invitato::create([
            ...$validated,
            'approved' => 0,
        ]);

        return response()->json([
            'message' => 'Registrazione ricevuta.',
            'invitato' => $invitato,
        ], 201);
    }

    public function adminIndex(Request $request): JsonResponse
    {
        if (! $request->session()->get('inviti_admin_authenticated', false)) {
            return response()->json(['message' => 'Non autenticato.'], 401);
        }

        return response()->json(
            Invitato::query()
                ->orderBy('approved')
                ->orderBy('nome')
                ->orderBy('cognome')
                ->get(['id', 'nome', 'cognome', 'invitato_da', 'approved', 'created_at'])
        );
    }

    public function update(Request $request, Invitato $invitato): JsonResponse
    {
        if (! $request->session()->get('inviti_admin_authenticated', false)) {
            return response()->json(['message' => 'Non autenticato.'], 401);
        }

        $validated = $request->validate([
            'approved' => ['required', 'integer', 'in:0,1,2'],
        ]);

        $invitato->update($validated);

        return response()->json($invitato->only([
            'id', 'nome', 'cognome', 'invitato_da', 'approved', 'created_at',
        ]));
    }
}
