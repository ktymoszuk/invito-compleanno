<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class ProgrammaSerataVoce extends Model
{
    protected $table = 'programma_serata_voci';

    protected $fillable = ['orario', 'descrizione', 'posizione'];

    protected function orario(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $value ? substr($value, 0, 5) : null,
        );
    }
}
