<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hospital extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'district_hospital_id',
        'central_hospital_id',
    ];

    // Relationships
    public function districtHospital()
    {
        return $this->belongsTo(Hospital::class, 'district_hospital_id');
    }

    public function centralHospital()
    {
        return $this->belongsTo(Hospital::class, 'central_hospital_id');
    }

        public function specialists()
    {
        return $this->hasMany(User::class)->where('role', 'Specialist');
    }

    public function nurses()
    {
        return $this->hasMany(User::class)->where('role', 'Nurse');
    }

    public function doctors()
    {
        return $this->hasMany(User::class)->where('role', 'Doctor');
    }
}
