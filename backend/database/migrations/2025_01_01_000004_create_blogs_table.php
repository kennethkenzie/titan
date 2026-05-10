<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('blogs', function (Blueprint $t) {
            $t->id();
            $t->string('title');
            $t->string('slug')->unique();
            $t->text('excerpt');
            $t->longText('content');
            $t->string('image');
            $t->string('author');
            $t->string('status')->default('published');
            $t->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('blogs'); }
};
