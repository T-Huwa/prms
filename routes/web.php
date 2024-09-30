<?php

use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\HospitalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReferralController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WardController;
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
Route::patch('/toggle-duty/{userId}', [UserController::class, 'toggleDuty'])->name('users.toggle.onDuty');

// Admin Route Group
Route::middleware(['auth'])->group(function () {
    Route::get('specialist/dashboard', function () {
        return Inertia::render('Specialist/Dashboard');
    })->name('specialist.dashboard');
});

Route::middleware(['auth'])->group(function () {
    Route::get('doctor/dashboard', function () {
        return Inertia::render('Doctor/Dashboard');
    })->name('doctor.dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('referrals')->group(function (){
    Route::get('new', [ReferralController::class, 'create'])->name('referrals.new');
    Route::post('new', [ReferralController::class, 'store'])->name('referrals.store');
    Route::get('show/{id}', [ReferralController::class, 'show'])->name('referrals.view');
    Route::get('incoming', [ReferralController::class, 'index'])->name('incoming');
    Route::get('outgoing', [ReferralController::class, 'outgoingReferrals'])->name('outgoing');
    Route::get('internal', [ReferralController::class, 'internalReferrals'])->name('internal'); 
    Route::put('updateStatus/{id}', [ReferralController::class, 'updateStatus'])->name('referral.update.status'); 
});


Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('user.delete');

Route::post('/feedback', [FeedbackController::class, 'store'])->name('feedback.create');
Route::get('/feedback', [FeedbackController::class, 'create'])->name('feedback');

Route::prefix('hospitals')->group(function (){
    Route::get('addNew', [HospitalController::class, 'create'])->middleware('admin')->name('hospitals.register');
    Route::get('/', [HospitalController::class, 'index'])->name('hospitals');
    Route::post('addNew', [HospitalController::class, 'store'])->middleware('admin')->name('hospitals.register');
    Route::get('/{id}', [HospitalController::class, 'show'])->name('hospitals.view');
    Route::get('/{id}/staff', [HospitalController::class, 'getStaff'])->name('hospitals.get.staff');
});

Route::prefix('wards')->group(function (){
    Route::get('/', [WardController::class, 'index'])->name('wards');
    Route::get('/create', [WardController::class, 'create'])->name('wards.create');
    Route::post('/store', [WardController::class, 'store'])->name('wards.store');
    Route::get('/{id}', [WardController::class, 'show'])->name('wards.show');
    Route::patch('/addUserToWard', [UserController::class, 'editWard'])->name('wards.add.user');
});

require __DIR__.'/auth.php';