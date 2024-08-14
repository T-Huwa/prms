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
}
