<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
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
    public function create()
    {
        return Inertia::render('Specialist/FeedbackForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'central_hospital' => 'required|string|max:255',
            'responding_department' => 'required|string|max:255',
            'reporting_officer' => 'required|string|max:255',
            'date' => 'required|date',
            'name_of_patient' => 'required|string|max:255',
            'final_diagnosis' => 'required|string|max:255',
            'other_diagnoses' => 'nullable|string|max:255',
            'management_1' => 'nullable|string|max:255',
            'management_2' => 'nullable|string|max:255',
            'management_3' => 'nullable|string|max:255',
            'type_of_surgery' => 'nullable|string|max:255',
            'findings' => 'nullable|string|max:255',
            'outcome' => 'nullable|string|max:255',
            'post_discharge_instruction_1' => 'nullable|string|max:255',
            'post_discharge_instruction_2' => 'nullable|string|max:255',
            'post_discharge_instruction_3' => 'nullable|string|max:255',
        ]);

        // Store the validated data in the database or perform other actions
        Feedback::create($validated);
        // For now, we will just return the data for demonstration purposes
        return redirect()->back()->with('success', 'Feedback submitted successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        //
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
