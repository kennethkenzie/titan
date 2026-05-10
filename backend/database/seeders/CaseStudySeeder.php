<?php

namespace Database\Seeders;

use App\Models\CaseStudy;
use Illuminate\Database\Seeder;

class CaseStudySeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            [
                'title' => 'Scaling Helios from 0 to $1B AUM',
                'slug' => 'helios-capital',
                'summary' => 'How identity, platform, and narrative compounded into a market-defining fund.',
                'image' => 'https://images.unsplash.com/photo-1642784353782-b6e5c2d57e0a?w=1600',
                'challenge' => 'Differentiate in a crowded quant market.',
                'solution' => 'A monolithic visual system, motion-first marketing, and a custom investor portal.',
                'results' => '$1B AUM in 14 months, 4.8M site sessions, 9x lead conversion.',
            ],
            [
                'title' => 'Launching Northwind to the world',
                'slug' => 'northwind-aero',
                'summary' => 'A cinematic reveal that captured aerospace media and investors.',
                'image' => 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1600',
                'challenge' => 'Translate complex propulsion tech into emotional storytelling.',
                'solution' => 'Editorial site with WebGL, narrative motion, and live telemetry.',
                'results' => '12M impressions in 30 days, $80M Series B oversubscribed.',
            ],
            [
                'title' => 'Obsidian OS — building a category',
                'slug' => 'obsidian-os',
                'summary' => 'From stealth to category-defining product launch.',
                'image' => 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600',
                'challenge' => 'Define an emerging category for technical buyers.',
                'solution' => 'Brand system, docs platform, and developer-grade marketing surface.',
                'results' => '200k waitlist, top of HN for 7 days, 6x enterprise pipeline.',
            ],
        ];
        foreach ($rows as $r) {
            CaseStudy::updateOrCreate(['slug' => $r['slug']], $r + ['status' => 'published']);
        }
    }
}
