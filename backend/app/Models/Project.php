<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['title','slug','category','description','image','client','year','status'];
    protected $casts = ['year' => 'integer'];

    public function scopePublished($q) { return $q->where('status', 'published'); }
}
