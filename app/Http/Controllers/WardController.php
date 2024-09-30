<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Ward;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $wards = Ward::all();

        return response()->json(['wards' => $wards]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Admin/NewWard");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'hospital_id' => 'required|exists:hospitals,id',
        ]);

        Ward::create($validated);

        return redirect()->route('hospitals.view', ['id' => $validated['hospital_id']]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $ward = Ward::find($id);
        $users = User::where('ward_id', $id)->get();
        return Inertia::render('Ward', ['ward' => $ward, 'users'=>$users]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ward $ward)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ward $ward)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ward $ward)
    {
        //
    }
}
