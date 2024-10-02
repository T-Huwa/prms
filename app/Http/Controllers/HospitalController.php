<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use App\Http\Requests\UpdateHospitalRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
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

    public function getStaff(Request $request, $id)
    {
        $ward = $request->ward;
        // Find the hospital by its ID
        $hospital = Hospital::findOrFail($id);

        $doctors = null;
        // Assuming relationships: specialists(), nurses(), and doctors() are defined in the Hospital model
        $specialists = $hospital->specialists()->with(['ward:id,name'])->get();
        $nurses = $hospital->nurses;
        
        if($ward){
            $doctors = $hospital->doctors()->where('ward_id', Auth::user()->ward_id)->with(['ward:id,name'])->get();
            // Return the data as a JSON response
            return response()->json([
                'doctors' => $doctors,
            ]);
        }
            
        $doctors = $hospital->doctors()->with(['ward:id,name'])->get();

        // Return the data as a JSON response
        return response()->json([
            'specialists' => $specialists,
            'nurses' => $nurses,
            'doctors' => $doctors,
        ]);
    }

    public function getReferralHospitals(Request $request) {
        /* Get the type of hospital from the authenticated user's hospital_id
        Log::info('Hospital ID:', ['hospital_id' => Auth::user()->hospital_id]);

        $hospital = Hospital::findOrFail($request->user()->hospital_id);
        if (!$hospital) {
            return response()->json(['error' => 'Hospital not found'], 404);
        }
        $hospital_type = $hospital->type;

        // Initialize the variable to hold the query result
        $hospitals = null;

        // Check the hospital type and adjust the query accordingly
        if($hospital_type === 'Central') {
            $hospitals = Hospital::where('type', 'Central')
                                ->orWhere('type', 'Private')
                                ->get();
        } elseif($hospital_type === 'H-Center') {
            $hospitals = Hospital::where('type', 'District')
                                ->orWhere('type', 'Private')
                                ->get();
        } elseif($hospital_type === 'District') {
            $hospitals = Hospital::where('type', 'Central')
                                ->orWhere('type', 'Private')
                                ->get();
        }*/

        // Return the query result as a JSON response
        return response()->json([
            'hospitals' => Hospital::all(),
        ]);
    }

}
