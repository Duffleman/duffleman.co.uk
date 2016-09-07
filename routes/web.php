<?php

use Carbon\Carbon;

Route::get('/', function () {
    $age = Carbon::parse('1366-03-08')->age;

    return view('welcome', [
        'age' => $age,
        'photos' => env('PHOTOS', false),
    ]);
});
