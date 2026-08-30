<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InvitatiAuthController extends Controller
{
    public function status(Request $request): JsonResponse
    {
        return response()->json([
            'authenticated' => $request->session()->get('inviti_admin_authenticated', false),
            'csrf_token' => csrf_token(),
        ]);
    }

    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $expectedEmail = (string) config('services.inviti_admin.email');
        $expectedPassword = (string) config('services.inviti_admin.password');

        if ($expectedEmail === '' || $expectedPassword === ''
            || ! hash_equals($expectedEmail, $credentials['email'])
            || ! hash_equals($expectedPassword, $credentials['password'])) {
            return response()->json(['message' => 'Credenziali non valide.'], 422);
        }

        $request->session()->regenerate();
        $request->session()->regenerateToken();
        $request->session()->put('inviti_admin_authenticated', true);

        return response()->json([
            'authenticated' => true,
            'csrf_token' => csrf_token(),
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->session()->forget('inviti_admin_authenticated');
        $request->session()->regenerateToken();

        return response()->json([
            'authenticated' => false,
            'csrf_token' => csrf_token(),
        ]);
    }
}