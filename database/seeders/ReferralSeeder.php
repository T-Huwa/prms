<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Referral;
use Carbon\Carbon;

class ReferralSeeder extends Seeder
{
    public function run()
    {
        $referrals = [
            [
                'name' => 'Alice Johnson',
                'gender' => 'f',
                'age' => 30,
                'urgency' => 'High',
                'hospital_from_id' => 1,
                'hospital_to_id' => 2,
                'blood_group' => 'A+',
                'lnmp' => '2024-08-01',
                'gravida' => 2,
                'para' => 1,
                'lcb' => 1,
                'reported_from' => 'ER',
                'reported_on' => Carbon::now()->subDays(1),
                'complaints' => json_encode(['Abdominal pain', 'Headache']),
                'duration' => '2 days',
                'examination_findings' => json_encode(['BP: 120/80', 'Pulse: 78']),
                'working_diagnosis' => 'Appendicitis',
                'differential_diagnosis' => json_encode(['Gastroenteritis', 'Ovarian cyst']),
                'pre_referral_management' => json_encode(['IV fluids', 'Pain management']),
                'procedure' => 'Ultrasound',
                'findings' => 'Enlarged appendix',
                'reasons' => json_encode(['Surgical management required']),
                'department_referral_directed' => 'Surgery',
                'blood_units' => 2,
                'nurse_sending_id' => 1,
                'nurse_receiving_id' => 2,
                'receiving_officer_id' => 3,
                'referring_officer_id' => 4,
                'designation' => 'Doctor',
                'DHO_name' => 'Dr. Smith',
                'other-remarks' => 'Patient stable, surgery recommended.',
                'status' => 'Sent',
            ],
            [
                'name' => 'Bob Smith',
                'gender' => 'm',
                'age' => 45,
                'urgency' => 'Medium',
                'hospital_from_id' => 2,
                'hospital_to_id' => 3,
                'blood_group' => 'B+',
                'lnmp' => null,
                'gravida' => null,
                'para' => null,
                'lcb' => null,
                'reported_from' => 'Outpatient',
                'reported_on' => Carbon::now()->subDays(2),
                'complaints' => json_encode(['Chest pain', 'Shortness of breath']),
                'duration' => '1 day',
                'examination_findings' => json_encode(['BP: 140/90', 'Pulse: 88']),
                'working_diagnosis' => 'Angina',
                'differential_diagnosis' => json_encode(['Myocardial infarction', 'GERD']),
                'pre_referral_management' => json_encode(['Oxygen therapy', 'Aspirin']),
                'procedure' => 'ECG',
                'findings' => 'T-wave inversion',
                'reasons' => json_encode(['Cardiology consult needed']),
                'department_referral_directed' => 'Cardiology',
                'blood_units' => null,
                'nurse_sending_id' => 2,
                'nurse_receiving_id' => 3,
                'receiving_officer_id' => 4,
                'referring_officer_id' => 5,
                'designation' => 'Doctor',
                'DHO_name' => 'Dr. Adams',
                'other-remarks' => 'Monitor for progression.',
                'status' => 'Requested',
            ],
            // Add 8 more records here
        ];

        // Additional 8 records to complete the 10 records
        for ($i = 3; $i <= 10; $i++) {
            $referrals[] = [
                'name' => "Patient {$i}",
                'gender' => $i % 2 == 0 ? 'm' : 'f',
                'age' => rand(20, 60),
                'urgency' => ['Low', 'Medium', 'High'][array_rand(['Low', 'Medium', 'High'])],
                'hospital_from_id' => rand(1, 5),
                'hospital_to_id' => rand(1, 5),
                'blood_group' => ['A+', 'B+', 'O+', 'AB+'][array_rand(['A+', 'B+', 'O+', 'AB+'])],
                'lnmp' => $i % 2 == 0 ? null : Carbon::now()->subMonths(rand(1, 6))->format('Y-m-d'),
                'gravida' => $i % 2 == 0 ? null : rand(1, 4),
                'para' => $i % 2 == 0 ? null : rand(0, 3),
                'lcb' => $i % 2 == 0 ? null : rand(0, 3),
                'reported_from' => ['ER', 'Outpatient', 'Ward'][array_rand(['ER', 'Outpatient', 'Ward'])],
                'reported_on' => Carbon::now()->subDays(rand(1, 5)),
                'complaints' => json_encode(['Complaint 1', 'Complaint 2']),
                'duration' => rand(1, 10) . ' days',
                'examination_findings' => json_encode(['Finding 1', 'Finding 2']),
                'working_diagnosis' => 'Diagnosis ' . $i,
                'differential_diagnosis' => json_encode(['Differential 1', 'Differential 2']),
                'pre_referral_management' => json_encode(['Management 1', 'Management 2']),
                'procedure' => 'Procedure ' . $i,
                'findings' => 'Findings ' . $i,
                'reasons' => json_encode(['Reason 1', 'Reason 2']),
                'department_referral_directed' => 'Department ' . $i,
                'blood_units' => rand(0, 3),
                'nurse_sending_id' => rand(1, 5),
                'nurse_receiving_id' => rand(1, 5),
                'receiving_officer_id' => rand(1, 5),
                'referring_officer_id' => rand(1, 5),
                'designation' => 'Designation ' . $i,
                'DHO_name' => 'Dr. DHO ' . $i,
                'other-remarks' => 'Remarks ' . $i,
                'status' => ['Requested', 'Sent', 'Accepted', 'Under Treatment', 'Referred Back', 'Discharged', 'Pending'][array_rand(['Requested', 'Sent', 'Accepted', 'Under Treatment', 'Referred Back', 'Discharged', 'Pending'])],
            ];
        }

        Referral::insert($referrals);
    }
}

