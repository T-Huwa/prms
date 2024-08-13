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
        $user = User::find($id);

        if ($request->user()->role == "Admin") {
            $user->delete();
            
            return Inertia::render('Admin/Users', [
                'success' => 'User deleted successfully'
            ]);
        }
        return Inertia::render('Admin/Users', [
            'error' => 'Failed to delete user'
        ]);
    }
}
