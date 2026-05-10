<?php

use App\Http\Controllers\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;

Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('admin.dashboard');
    }
    return view('auth.login');
})->name('login');

Route::get('/login', fn () => redirect()->route('login'));

Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email'    => ['required', 'email'],
        'password' => ['required', 'string'],
    ]);

    if (! Auth::attempt($credentials, $request->boolean('remember'))) {
        throw ValidationException::withMessages([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    $request->session()->regenerate();

    return redirect()->intended(route('admin.dashboard'));
})->name('login.attempt');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [Admin\DashboardController::class, 'index'])->name('admin.dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('blogs', Admin\BlogController::class)->except(['show']);
        Route::patch('blogs/{blog}/status', [Admin\BlogController::class, 'toggleStatus'])->name('blogs.status');

        Route::resource('projects', Admin\ProjectController::class)->except(['show']);
        Route::patch('projects/{project}/status', [Admin\ProjectController::class, 'toggleStatus'])->name('projects.status');

        Route::resource('services', Admin\ServiceController::class)->except(['show']);
        Route::patch('services/{service}/status', [Admin\ServiceController::class, 'toggleStatus'])->name('services.status');

        Route::resource('case-studies', Admin\CaseStudyController::class)
            ->except(['show'])
            ->parameters(['case-studies' => 'caseStudy']);
        Route::patch('case-studies/{caseStudy}/status', [Admin\CaseStudyController::class, 'toggleStatus'])->name('case-studies.status');

        Route::resource('contacts', Admin\ContactController::class)->only(['index', 'destroy']);
    });

    Route::post('/logout', function (Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login');
    })->name('logout');
});
