<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referral extends Model
{
    use HasFactory;
    /*
    * @var array<int, string>
    */
    protected $fillable = [
        'Urgency',
        'Hospital',
        'Name',
        'Sex',
        'Age',
        'BloodGroup',
        'LNMP',
        'Gravida',
        'Para',
        'LCB',
        'ReportedFrom',
        'ReportedOn',
        'PresentingComplaints',
        'Duration',
        'ExaminationFindings',
        'WorkingDiagnosis',
        'DifferentialDiagnosis',
        'PreReferralManagement',
        'Procedure',
        'Findings',
        'ReasonsForReferral',
        'DepartmentReferralDirected',
        'UnitsOfBlood',
        'ReferringOfficer',
        'Designation',
        'NameDHO',
        'Status',
    ];
    protected function casts(): array
    {
       return [
            'PresentingComplaints' => 'array',
            'ExaminationFindings' => 'array',
            'DifferentialDiagnosis' => 'array',
            'PreReferralManagement' => 'array',
            'ReasonsForReferral' => 'array',
        ];
    }
}
