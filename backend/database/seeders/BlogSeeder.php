<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            ['title' => 'The new rules of premium brand systems', 'slug' => 'premium-brand-systems', 'author' => 'Mara Voss',     'excerpt' => 'Why the next decade of branding is engineered, not designed.', 'image' => 'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?w=1600'],
            ['title' => 'Motion as a product surface',            'slug' => 'motion-product-surface','author' => 'Kenji Aoyama',  'excerpt' => 'Treating animation as core UX, not decoration.',              'image' => 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?w=1600'],
            ['title' => 'Engineering cinematic web at scale',     'slug' => 'cinematic-web-scale',   'author' => 'Lior Bennet',   'excerpt' => 'Performance, motion, and storytelling without compromise.',  'image' => 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600'],
        ];
        foreach ($rows as $r) {
            Blog::updateOrCreate(['slug' => $r['slug']], $r + [
                'status' => 'published',
                'content' => "## " . $r['title'] . "\n\n" . $r['excerpt'] . "\n\nThis is sample editorial content used by the TITAN seeder. Replace with real copy from the CMS.",
            ]);
        }
    }
}
