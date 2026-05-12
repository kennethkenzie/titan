<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = ['name', 'slug', 'industry', 'description', 'website', 'logo', 'status'];

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }
}
