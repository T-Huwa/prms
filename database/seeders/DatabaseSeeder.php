<?php

namespace Database\Seeders;

use Database\Seeders\HospitalSeeder as SeedersHospitalSeeder;
use Database\Seeders\ReferralSeeder as SeedersReferralSeeder;
use Database\Seeders\UserSeeder as SeedersUserSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            SeedersHospitalSeeder::class,
            SeedersUserSeeder::class,
            SeedersReferralSeeder::class,
            FeedbackSeeder::class,
        ]);
    }
}
