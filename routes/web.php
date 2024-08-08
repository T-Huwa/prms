<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashtest', function () {
    return Inertia::render('DashTest');
})->middleware(['auth', 'verified'])->name('dashtest');

Route::get('/register', function () {
    return Inertia::render('Register');
})->middleware(['auth', 'verified'])->name('register');

Route::get('/incoming', function () {
    return Inertia::render('Incoming');
})->middleware(['auth', 'verified'])->name('incoming');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::get('/referrals/{id}', function ($id) {
    // This is where you would typically fetch data from the database,
    // but since we're using static data, we'll pass the data directly.

    $referrals = [
        [
            'ReferralID' => "2",
            'Urgency' => 1,
            'Hospital' => "City Hospital",
            'Name' => "John Doe",
            'Sex' => "m",
            'Age' => 45,
            'BloodGroup' => "A+",
            'LNMP' => null,
            'Gravida' => null,
            'Para' => null,
            'LCB' => null,
            'ReportedFrom' => "Home",
            'ReportedOn' => "2024-07-25",
            'PresentingComplaints' => [
                "Chest pain",
                "Shortness of breath",
                "Dizziness",
            ],
            'Duration' => "2 days",
            'ExaminationFindings' => [
                "Elevated blood pressure",
                "Irregular heartbeat",
                "Pale complexion",
            ],
            'WorkingDiagnosis' => "Myocardial infarction",
            'DifferentialDiagnosis' => ["Angina", "Pulmonary embolism"],
            'PreReferralManagement' => [
                "Aspirin given",
                "Oxygen administered",
                "IV fluids started",
            ],
            'Procedure' => null,
            'Findings' => null,
            'ReasonsForReferral' => [
                "Need for specialized care",
                "Unstable condition",
                "Further diagnostics",
            ],
            'DepartmentReferralDirected' => "Cardiology",
            'UnitsOfBlood' => 0,
            'ReferringOfficer' => "Dr. Smith",
            'Designation' => "GP",
            'NameDHO' => "Dr. Johnson",
            'Status' => "Requested",
        ],
        // Add more referral data here if needed
    ];

    $referral = collect($referrals)->firstWhere('ReferralID', $id);

    return Inertia::render('Referral', ['referral' => $referral]);
});

// back navigation route
Route::get('/back', function () {
    return redirect()->back();
})->name('back');