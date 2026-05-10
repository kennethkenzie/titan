<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('projects', function (Blueprint $t) {
            $t->id();
            $t->string('title');
            $t->string('slug')->unique();
            $t->string('category');
            $t->text('description');
            $t->string('image');
            $t->string('client');
            $t->unsignedSmallInteger('year');
            $t->string('status')->default('published');
            $t->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('projects'); }
};
