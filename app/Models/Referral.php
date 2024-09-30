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
    protected $appends = ['hospital'];
    protected $fillable = [
        'urgency',
        'hospital_from_id',
        'hospital_to_id',
        'name',
        'gender',
        'age',
        'blood_group',
        'lnmp',
        'gravida',
        'Para',
        'lcb',
        'reported_from',
        'reported_on',
        'complaints',
        'duration',
        'examination_findings',
        'working_diagnosis',
        'differential_diagnosis',
        'pre_referral_management',
        'procedure',
        'findings',
        'reasons',
        'department_referral_directed',
        'blood_units',
        'nurse_sending_id',
        'nurse_receiving_id',
        'receiving_officer_id',
        'referring_officer_id',
        'designation',
        'other-remarks',
        'DHO_name',
        'status',
    ];
    protected function casts(): array
    {
       return [
            'complaints' => 'array',
            'examination_findings' => 'array',
            'differential_diagnosis' => 'array',
            'pre_referral_management' => 'array',
            'reasons' => 'array',
        ];
    }

    public function getHospitalAttribute()
    {
        return $this->targetHospital ? $this->targetHospital->name : null;
    }

    public function targetHospital()
    {
        return $this->belongsTo(Hospital::class, 'hospital_to_id');
    }

    public function sourceHospitalRelation()
    {
        return $this->belongsTo(Hospital::class, 'hospital_from_id');
    }

    public function referringOfficer()
    {
        return $this->belongsTo(User::class, 'referring_officer_id');
    }

    public function receivingOfficer()
    {
        return $this->belongsTo(User::class, 'receiving_officer_id');
    }

}
