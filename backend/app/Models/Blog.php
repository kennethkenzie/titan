<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = ['title','slug','excerpt','content','image','author','status'];

    public function scopePublished($q) { return $q->where('status', 'published'); }
}
