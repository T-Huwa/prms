<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use App\Models\Referral;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class ReferralController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Return an Inertia response with the referral data
        $referrals = Referral::all();

        // Return an Inertia response with the referrals data
        return Inertia::render('Incoming', [
            'referrals' => $referrals
        ]);
    }

    public function outgoingReferrals()
    {
        $userHospitalId = Auth::user()->hospital_id;
        // Return an Inertia response with the referral data
        $referrals = Referral::where('hospital_from_id', $userHospitalId)
                    ->where('status', 'Sent')
                    ->with('referringOfficer:id,name') // Eager load referring officer's name
                    ->get();

        // Return an Inertia response with the referrals data
        return Inertia::render('Outgoing', [
            'referrals' => $referrals,
        ]);
    }

    public function internalReferrals()
    {
        $userHospitalId = Auth::user()->hospital_id;
        // Return an Inertia response with the referral data
        $referrals = Referral::where('hospital_from_id', $userHospitalId)
                    ->where('status', 'Requested')
                    ->with('referringOfficer:id,name') // Eager load referring officer's name
                    ->get();

        // Return an Inertia response with the referrals data
        return Inertia::render('Internal', [
            'referrals' => $referrals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Specialist/NewReferral');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'urgency' => 'required|string',
            'hospital_to_id' => 'nullable|exists:hospitals,id',
            'name' => 'required|string|max:255',
            'gender' => 'required|string|max:10',
            'age' => 'required|integer|min:0',
            'blood_group' => 'required|string|max:3',
            'lnmp' => 'nullable|string|max:255',
            'gravida' => 'nullable|string|max:255',
            'para' => 'nullable|string|max:255',
            'lcb' => 'nullable|string|max:255',
            'reported_from' => 'required|string|max:255',
            'reported_on' => 'required|date',
            'complaints' => 'nullable|array',
            'duration' => 'nullable|string|max:255',
            'examination_findings' => 'nullable|array',
            'working_diagnosis' => 'nullable|string|max:255',
            'differential_diagnosis' => 'nullable|array',
            'pre_referral_management' => 'nullable|array',
            'procedure' => 'nullable|string|max:255',
            'findings' => 'nullable|string|max:255',
            'reasons' => 'nullable|array',
            'department_referral_directed' => 'nullable|string|max:255',
            'blood_units' => 'nullable|integer|min:0',
            'nurse_sending_id' => 'nullable|exists:users,id',
            'nurse_receiving_id' => 'nullable|exists:users,id',
            'receiving_officer_id' => 'nullable|exists:users,id',
            'designation' => 'nullable|string|max:255',
            'other_remarks' => 'nullable|string|max:255',
            'DHO_name' => 'nullable|string|max:255',
        ]);

        // Add the current user's ID as the referring officer ID and hospital ID
        $validatedData['status'] = 'Requested';
        $validatedData['referring_officer_id'] = Auth::id();
        $validatedData['hospital_from_id'] = Auth::user()->hospital_id;

        // Create the referral
        Referral::create($validatedData);

        // Redirect to a success page or back with a success message
        return Inertia::render('Specialist/NewReferral', [
            'success' => 'Referral created successfully'
        ]);
        //return redirect()->route('referrals.index')->with('success', 'Referral created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Find the referral by ID or return a 404 error if not found
        $referral = Referral::find($id);
        $hospital = Hospital::find($referral->hospital_from_id);

        // Return an Inertia response with the referral data
        return Inertia::render('Referral', [
            'referral' => $referral,
            'hospital' => $hospital->name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Referral $referral)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Referral $referral)
    {
        //
    }

    public function updateStatus(Request $request, $id)
    {
        // Validate the incoming request to ensure status is provided
        $validated = $request->validate([
            'status' => 'required|string',  // Adjust validation based on your needs (e.g., enum)
        ]);

        // Find the referral by ID
        $referral = Referral::findOrFail($id);

        // Update the referral's status
        $referral->status = $validated['status'];

        // Save the changes to the database
        $referral->save();

        // Return a response (can be JSON or redirect depending on your application)
        return response()->json([
            'message' => 'Referral status updated successfully',
            'referral' => $referral,
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Referral $referral)
    {
        //
    }
}
