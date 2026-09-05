<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('programma_serata_impostazioni', function (Blueprint $table) {
            $table->id();
            $table->boolean('visibile')->default(false);
            $table->timestamps();
        });

        Schema::create('programma_serata_voci', function (Blueprint $table) {
            $table->id();
            $table->time('orario')->nullable();
            $table->string('descrizione', 255);
            $table->unsignedInteger('posizione')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('programma_serata_voci');
        Schema::dropIfExists('programma_serata_impostazioni');
    }
};
