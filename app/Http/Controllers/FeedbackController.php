<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Referral;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('Doctor/FeedbackForm', ['referral_id' => $request->referral_id]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Insert the feedback data into the database
        Feedback::create([
            'referral_id' => $request->referral_id,
            'responding_ward_id' => $request->user()->ward_id, // Assuming the user has a ward_id
            'date' => $request->date,
            'final_diagnosis' => $request->final_diagnosis,
            'other_diagnoses' => $request->other_diagnoses,
            'management' => json_encode($request->management), // Convert array to JSON
            'type_of_surgery' => $request->type_of_surgery,
            'findings' => $request->findings,
            'outcome' => $request->outcome,
            'post_discharge_instructions' => json_encode($request->post_discharge_instructions), // Convert array to JSON
        ]);

        $referral = Referral::findOrFail($request->referral_id);
        $referral->status = 'Discharged';

        // Redirect back or to another page with a success message
        return redirect()->back()->with('success', 'Feedback submitted successfully!');
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $feedback = Feedback::where('referral_id', $id)->firstOrFail();
        return Inertia::render("Feedback", ['feedback' => $feedback, 'referral_id'=>$id]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        //
    }
}
