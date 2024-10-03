<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $table = 'feedback';

    protected $fillable = [
        'referral_id',
        'responding_ward_id',
        'date',
        'final_diagnosis',
        'other_diagnoses',
        'management',
        'type_of_surgery',
        'findings',
        'outcome',
        'post_discharge_instructions',
    ];

    protected $casts = [
        'management' => 'array',
        'post_discharge_instructions' => 'array',
    ];

    /**
     * Relationships
     */

    // A feedback belongs to a referral
    public function referral()
    {
        return $this->belongsTo(Referral::class);
    }

    // A feedback belongs to a ward
    public function ward()
    {
        return $this->belongsTo(Ward::class, 'responding_ward_id');
    }

    // A feedback retrieves the reporting officer from the referral
    public function referringOfficer()
    {
        // Assuming that the `Referral` model has a `reporting_officer_id` field
        return $this->referral->referringOfficer();
    }
}
