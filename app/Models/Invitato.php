<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invitato extends Model
{
    protected $table = 'invitati';

    protected $fillable = [
        'nome',
        'cognome',
        'invitato_da',
        'approved',
    ];

    protected function casts(): array
    {
        return [
            'approved' => 'integer',
        ];
    }
}
