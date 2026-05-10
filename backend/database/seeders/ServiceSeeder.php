<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            ['title' => 'Brand Architecture',   'slug' => 'brand-architecture',   'icon' => 'Hexagon',  'description' => 'Identity systems engineered for scale, longevity, and emotional resonance.'],
            ['title' => 'Digital Platforms',    'slug' => 'digital-platforms',    'icon' => 'Layers',   'description' => 'Cinematic web experiences and product surfaces built on bleeding-edge stacks.'],
            ['title' => 'Motion & Direction',   'slug' => 'motion-direction',     'icon' => 'Film',     'description' => 'Award-winning art direction and motion language for ambitious brands.'],
            ['title' => 'Product Engineering',  'slug' => 'product-engineering',  'icon' => 'Cpu',      'description' => 'Full-stack engineering teams shipping enterprise software at startup velocity.'],
            ['title' => 'Strategy & Vision',    'slug' => 'strategy-vision',      'icon' => 'Target',   'description' => 'Positioning, narrative, and roadmaps that move markets.'],
            ['title' => 'Immersive Experience', 'slug' => 'immersive-experience', 'icon' => 'Sparkles', 'description' => 'WebGL, 3D, and spatial design for unforgettable brand moments.'],
        ];
        foreach ($rows as $r) {
            Service::updateOrCreate(['slug' => $r['slug']], $r + ['status' => 'published']);
        }
    }
}
