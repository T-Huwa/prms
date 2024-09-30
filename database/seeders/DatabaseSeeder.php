<?php

namespace Database\Seeders;

use App\Models\Hospital;
use App\Models\User;
use Database\Seeders\HospitalSeeder as SeedersHospitalSeeder;
use Database\Seeders\ReferralSeeder as SeedersReferralSeeder;
use Database\Seeders\UserSeeder as SeedersUserSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

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

        $admin = [                
            'name' => 'Test Admin 1',
            'email' => 'test1@admin.com',
            'profile_photo' => 'test.jpg',
            'role' => 'Admin',
            'email_verified_at' => now(),
            'password' => Hash::make('password'), // or bcrypt('password')
            'remember_token' => Str::random(10),
        ];
        $central = [
            'name' => 'Mzuzu Central Hospital',
            'type' => 'Central',
        ];

        // Hospital::create($central);
        // User::create($admin);
    }
}
