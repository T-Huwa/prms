<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $fillable = [
        'central_hospital',
        'responding_department',
        'reporting_officer',
        'date',
        'name_of_patient',
        'final_diagnosis',
        'other_diagnoses',
        'management_1',
        'management_2',
        'management_3',
        'type_of_surgery',
        'findings',
        'outcome',
        'post_discharge_instruction_1',
        'post_discharge_instruction_2',
        'post_discharge_instruction_3',
    ];
}
