<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = ['title','slug','description','icon','image','status'];

    public function scopePublished($q) { return $q->where('status', 'published'); }
}
