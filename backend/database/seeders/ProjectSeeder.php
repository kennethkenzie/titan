<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            ['title' => 'Helios Capital',  'slug' => 'helios-capital',  'category' => 'Finance',    'client' => 'Helios',         'year' => 2025, 'description' => 'Identity + platform for a quantitative hedge fund.',          'image' => 'https://images.unsplash.com/photo-1620207418302-439b387441b0?w=1600'],
            ['title' => 'Northwind Aero', 'slug' => 'northwind-aero',  'category' => 'Aerospace',  'client' => 'Northwind',      'year' => 2024, 'description' => 'Cinematic launch site for next-gen propulsion systems.',     'image' => 'https://images.unsplash.com/photo-1518365050014-70fe7232897f?w=1600'],
            ['title' => 'Obsidian OS',    'slug' => 'obsidian-os',     'category' => 'SaaS',       'client' => 'Obsidian Labs',  'year' => 2025, 'description' => 'Operating system identity and product surface.',             'image' => 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600'],
            ['title' => 'Vantage Motors', 'slug' => 'vantage-motors',  'category' => 'Automotive', 'client' => 'Vantage',        'year' => 2024, 'description' => 'Luxury EV brand world and configurator.',                    'image' => 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600'],
            ['title' => 'Atlas Robotics', 'slug' => 'atlas-robotics',  'category' => 'Hardware',   'client' => 'Atlas',          'year' => 2025, 'description' => 'Industrial robotics brand with motion-led storytelling.',     'image' => 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=1600'],
            ['title' => 'Lumen Studio',   'slug' => 'lumen-studio',    'category' => 'Media',      'client' => 'Lumen',          'year' => 2024, 'description' => 'Editorial platform for a premium media network.',            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600'],
        ];
        foreach ($rows as $r) {
            Project::updateOrCreate(['slug' => $r['slug']], $r + ['status' => 'published']);
        }
    }
}
