<?php

use App\Http\Controllers\InvitatiAuthController;
use App\Http\Controllers\InvitatiController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/invitati', [InvitatiController::class, 'index']);
Route::post('/invitati', [InvitatiController::class, 'store']);
Route::get('/area-riservata/status', [InvitatiAuthController::class, 'status']);
Route::post('/area-riservata/login', [InvitatiAuthController::class, 'login']);
Route::post('/area-riservata/logout', [InvitatiAuthController::class, 'logout']);
Route::get('/area-riservata/invitati', [InvitatiController::class, 'adminIndex']);
Route::patch('/area-riservata/invitati/{invitato}', [InvitatiController::class, 'update']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');   