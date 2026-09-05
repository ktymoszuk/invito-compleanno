<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgrammaSerataImpostazione extends Model
{
    protected $table = 'programma_serata_impostazioni';

    protected $fillable = ['visibile'];

    protected function casts(): array
    {
        return ['visibile' => 'boolean'];
    }
}
