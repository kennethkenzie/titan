<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CaseStudyResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'summary' => $this->summary,
            'image' => $this->image,
            'challenge' => $this->challenge,
            'solution' => $this->solution,
            'results' => $this->results,
            'status' => $this->status,
        ];
    }
}
