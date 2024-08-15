<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hospital;

class HospitalSeeder extends Seeder
{
    public function run()
    {
        $hospitals = [
            ['name' => 'General Hospital', 'type' => 'Public'],
            ['name' => 'City Medical Center', 'type' => 'Private'],
            ['name' => 'Saint Mary’s Hospital', 'type' => 'Non-profit'],
            ['name' => 'Metro Health Clinic', 'type' => 'Public'],
            ['name' => 'County Hospital', 'type' => 'Government'],
            ['name' => 'Valley Health Services', 'type' => 'Private'],
            ['name' => 'Sunrise Children’s Hospital', 'type' => 'Clinic'],
        ];

        foreach ($hospitals as $hospital) {
            Hospital::create($hospital);
        }
    }
}

