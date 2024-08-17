<?php

use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\HospitalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReferralController;
use App\Http\Controllers\UserController;
use App\Models\Hospital;
use App\Models\Referral;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Admin Route Group
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
        
    Route::get('/users/register', function () {
        $hospitals = Hospital::all();
        return Inertia::render('Admin/Register', [
            'hospitals' => $hospitals,
        ]);
    })->name('users.register');

    Route::get('/users', [UserController::class, 'index'])->name('users');
});

// Admin Route Group
Route::middleware(['auth'])->group(function () {
    Route::get('specialist/dashboard', function () {
        return Inertia::render('Specialist/Dashboard');
    })->name('specialist.dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/referrals/new', [ReferralController::class, 'create'])->name('referrals.new');
Route::post('/referrals/new', [ReferralController::class, 'store'])->name('referrals.store');
Route::get('/referrals/{id}', [ReferralController::class, 'show'])->name('referrals.view');
Route::get('/referrals', [ReferralController::class, 'index'])->name('incoming');

Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('user.delete');

Route::post('/feedback', [FeedbackController::class, 'store'])->name('feedback.create');
Route::get('/feedback', [FeedbackController::class, 'create'])->name('feedback');

Route::get('/hospitals', [HospitalController::class, 'index'])->name('hospitals');