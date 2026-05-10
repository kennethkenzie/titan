<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('case_studies', function (Blueprint $t) {
            $t->id();
            $t->string('title');
            $t->string('slug')->unique();
            $t->text('summary');
            $t->string('image');
            $t->longText('challenge');
            $t->longText('solution');
            $t->longText('results');
            $t->string('status')->default('published');
            $t->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('case_studies'); }
};
