<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Feedback;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // getting some referrals and users from database
        $referralIds = DB::table('referrals')->pluck('id')->toArray();

        // Create 10 feedback records
        foreach (range(1, 10) as $index) {
            Feedback::create([
                'referral_id' => $referralIds[array_rand($referralIds)],
                'responding_department' => 'Department ' . $index,
                'date' => now()->subDays(rand(1, 100)),
                'final_diagnosis' => 'Diagnosis ' . Str::random(5),
                'other_diagnoses' => rand(0, 1) ? 'Other Diagnosis ' . Str::random(10) : null,
                'management_1' => rand(0, 1) ? 'Management Step 1' : null,
                'management_2' => rand(0, 1) ? 'Management Step 2' : null,
                'management_3' => rand(0, 1) ? 'Management Step 3' : null,
                'type_of_surgery' => rand(0, 1) ? 'Surgery Type ' . Str::random(5) : null,
                'findings' => rand(0, 1) ? 'Findings ' . Str::random(10) : null,
                'outcome' => rand(0, 1) ? 'Outcome ' . Str::random(10) : null,
                'post_discharge_instruction_1' => rand(0, 1) ? 'Instruction 1' : null,
                'post_discharge_instruction_2' => rand(0, 1) ? 'Instruction 2' : null,
                'post_discharge_instruction_3' => rand(0, 1) ? 'Instruction 3' : null,
            ]);
        }
    }
}

