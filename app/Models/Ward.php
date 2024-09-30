<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ward extends Model
{
    use HasFactory;

    // The fields that can be mass-assigned
    protected $fillable = ['name', 'hospital_id'];

    /**
     * Get the hospital the ward belongs to.
     */
    public function hospital()
    {
        return $this->belongsTo(Hospital::class);
    }

    /**
     * Get the doctors assigned to the ward.
     */
    public function doctors()
    {
        return $this->belongsToMany(User::class, 'ward_doctor', 'ward_id', 'doctor_id');
    }
}

