<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

use function PHPUnit\Framework\throwException;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $firstWord = explode(' ', $request['name'])[0];
        
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required', 'string'],
            'specialty' => 'nullable|string',
            'hospital_id' => 'nullable|string',
            'profile_photo' => 'nullable|string',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role'=> $request->role,
            'specialty'=> $request->specialty,
            'hospital_id'=> $request->hospital_id,
            'profile_photo' => $firstWord . ".jpg",
        ]);

        event(new Registered($user));

        //return response()->json(['success' => 'User added successfully'], 200);
        return Inertia::render('Admin/Register', [
            'success' => 'User added successfully'
        ]);
    }
}
