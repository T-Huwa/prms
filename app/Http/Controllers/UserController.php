<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
        public function index()
    {
        $users = User::all();

        return Inertia::render('Admin/Users', [
            'users' => $users,
        ]);
    }

    public function destroy(Request $request, $id){
        $user = User::findOrFail($id);

        if ($request->user()->role == "Admin") {
            $user->delete();
            
            return redirect(route('users'));
        }
        return Inertia::render('Admin/Users', [
            'error' => 'Failed to delete user'
        ]);
    }

    public function getSpecialistsByHospital($hospitalId)
    {
        $specialists = User::where('hospital_id', $hospitalId)
                            ->get();

        // Return JSON for Axios
        return response()->json(['specialists' => $specialists]);
    }

    public function editWard(Request $request)
    {
                // Validate the incoming request data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'ward_id' => 'required|exists:wards,id',
        ]);

        // Find the user and assign them to the ward
        $user = User::findOrFail($request->user_id);
        $user->ward_id = $request->ward_id;
        $user->save();

        // Return a response
        return response()->json([
            'message' => 'User assigned to ward successfully.',
            'user' => $user,
        ]);
    }

    public function toggleDuty(Request $request, $userId)
    {
        $user = User::findOrFail($userId);

        // Validate the incoming request
        $validatedData = $request->validate([
            'onDuty' => 'required|boolean',
        ]);

        // Update the user's on-duty status
        $user->onDuty = $validatedData['onDuty'];
        $user->save();

        // Return response
        return response()->json(['message' => 'Duty status updated successfully', 'onDuty' => $user->onDuty], 200);
    }

}
