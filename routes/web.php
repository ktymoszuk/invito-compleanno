<?php

use App\Http\Controllers\InvitatiAuthController;
use App\Http\Controllers\InvitatiController;
use App\Http\Controllers\ProgrammaSerataController;
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
Route::get('/programma-serata', [ProgrammaSerataController::class, 'index']);
Route::get('/area-riservata/programma-serata', [ProgrammaSerataController::class, 'adminIndex']);
Route::post('/area-riservata/programma-serata', [ProgrammaSerataController::class, 'store']);
Route::patch('/area-riservata/programma-serata/visibilita', [ProgrammaSerataController::class, 'visibility']);
Route::patch('/area-riservata/programma-serata/ordine', [ProgrammaSerataController::class, 'reorder']);
Route::patch('/area-riservata/programma-serata/{voce}', [ProgrammaSerataController::class, 'update']);
Route::delete('/area-riservata/programma-serata/{voce}', [ProgrammaSerataController::class, 'destroy']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');   