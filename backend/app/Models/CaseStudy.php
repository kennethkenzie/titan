<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CaseStudy extends Model
{
    protected $table = 'case_studies';
    protected $fillable = ['title','slug','summary','image','challenge','solution','results','status'];

    public function scopePublished($q) { return $q->where('status', 'published'); }
}
