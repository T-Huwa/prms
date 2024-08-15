<?php

namespace Database\Seeders;
 
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        $users = [
            [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'profile_photo' => 'test.jpg',
                'role' => 'Admin',
                'email_verified_at' => now(),
                'password' => Hash::make('password'), // or bcrypt('password')
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane.smith@example.com',
                'profile_photo' => 'jane.jpg',
                'hospital_id' => 2,
                'role' => 'Specialist',
                'specialty' => 'Neurology',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'Michael Johnson',
                'email' => 'michael.johnson@example.com',
                'profile_photo' => 'michael.jpg',
                'role' => 'Admin',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'Emily Davis',
                'email' => 'emily.davis@example.com',
                'profile_photo' => 'emily.jpg',
                'hospital_id' => 1,
                'role' => 'Specialist',
                'specialty' => 'Pediatrics',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'David Brown',
                'email' => 'david.brown@example.com',
                'profile_photo' => 'david.jpg',
                'role' => 'Admin',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'Olivia Wilson',
                'email' => 'olivia.wilson@example.com',
                'profile_photo' => 'olivia.jpg',
                'hospital_id' => 2,
                'role' => 'Specialist',
                'specialty' => 'Dermatology',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'James Taylor',
                'email' => 'james.taylor@example.com',
                'profile_photo' => 'olivia.jpg',
                'hospital_id' => 5,
                'role' => 'Nurse',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'Sophia Martinez',
                'email' => 'sophia.martinez@example.com',
                'profile_photo' => 'sophia.jpg',
                'hospital_id' => 3,
                'role' => 'Nurse',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'William Hernandez',
                'email' => 'william.hernandez@example.com',
                'profile_photo' => 'william.jpg',
                'hospital_id' => 4,
                'role' => 'Nurse',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'Ava Clark',
                'email' => 'ava.clark@example.com',
                'profile_photo' => 'ava',
                'hospital_id' => 1,
                'role' => 'Nurse',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ],
        ];


        foreach ($users as $user) {
            User::create($user);
        }
    }
}

