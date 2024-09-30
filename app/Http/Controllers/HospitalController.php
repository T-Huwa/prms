<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use App\Http\Requests\UpdateHospitalRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HospitalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hospitals = Hospital::with(['districtHospital', 'centralHospital'])->get()
            ->map(function ($hospital) {
                return [
                    'id' => $hospital->id,
                    'name' => $hospital->name,
                    'type' => $hospital->type,
                    'district_hospital_name' => $hospital->districtHospital ? $hospital->districtHospital->name : null,
                    'central_hospital_name' => $hospital->centralHospital ? $hospital->centralHospital->name : null,
                ];
        });

        return Inertia::render('Admin/Hospitals', ['hospitals' => $hospitals]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $central_hospitals = Hospital::where('type', 'Central')->get();
        $district_hospitals = Hospital::where('type', 'District')->get();

        return Inertia::render('Admin/NewHospital', [
            'central_hospitals' => $central_hospitals,
            'district_hospitals' => $district_hospitals,
        ]);
    }

    public function newHospital()
    {
        $central_hospitals = Hospital::where('type', 'Central')->get();
        $district_hospitals = Hospital::where('type', 'District')->get();

        return Inertia::render('Admin/NewHospital', [
            'central_hospitals' => $central_hospitals,
            'district_hospitals' => $district_hospitals,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'district_hospital_id' => 'nullable|exists:hospitals,id',
            'central_hospital_id' => 'nullable|exists:hospitals,id',
        ]);

        // Create a new hospital record using the validated data
        Hospital::create([
            'name' => $validatedData['name'],
            'type' => $validatedData['type'],
            'district_hospital_id' => $validatedData['district_hospital_id'],
            'central_hospital_id' => $validatedData['central_hospital_id'],
        ]);

        // Redirect or return a response, e.g., redirecting to the hospital index page
        return redirect()->route('hospitals.register')->with('success', 'Hospital created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Hospital $hospital, $id)
    {
        $hospital = Hospital::with(['centralHospital', 'districtHospital'])->findOrFail($id);
        $hospitalData = [
            'id' => $hospital->id,
            'name' => $hospital->name,
            'type' => $hospital->type,
            'central_hospital_name' => $hospital->centralHospital ? $hospital->centralHospital->name : null,
            'district_hospital_name' => $hospital->districtHospital ? $hospital->districtHospital->name : null,
        ];

        return Inertia::render('Admin/Hospital', ['hospital' => $hospitalData]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Hospital $hospital)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHospitalRequest $request, Hospital $hospital)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Hospital $hospital)
    {
        //
    }

    public function getStaff($id)
    {
        // Find the hospital by its ID
        $hospital = Hospital::findOrFail($id);

        // Fetch the hospital's specialists, nurses, and doctors
        // Assuming relationships: specialists(), nurses(), and doctors() are defined in the Hospital model
        $specialists = $hospital->specialists()->with(['ward:id,name'])->get();
        $nurses = $hospital->nurses;
        $doctors = $hospital->doctors()->with(['ward:id,name'])->get();;

        // Return the data as a JSON response
        return response()->json([
            'specialists' => $specialists,
            'nurses' => $nurses,
            'doctors' => $doctors,
        ]);
    }
}
