<?php

use App\Models\Mantram;
use App\Models\MantramBase;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $mantramBases = MantramBase::get();

    return view('home', [
        'mantrams' => $mantramBases
    ]);
});

Route::get('/mantram/{mantramBaseId}', function ($mantramBaseId) {
    $mantramBase = MantramBase::find($mantramBaseId);
    $mantrams = Mantram::where('mantram_base_id', $mantramBaseId)->get();

    if (!$mantramBase) {
        return abort(404);
    }

    return view('mantram-base', [
        'mantramBase' => $mantramBase,
        'mantrams' => $mantrams,
    ]);
})->name('mantram-base');

Route::get('/mantram/{mantramBaseId}/{mantramId}', function ($mantramBaseId, $mantramId) {
    $mantramBase = MantramBase::find($mantramBaseId);
    $mantram = Mantram::where([
        'id' => $mantramId,
        'mantram_base_id' => $mantramBaseId,
    ])->first();

    if (!$mantram) {
        return abort(404);
    }

    return view('mantram-detail', [
        'mantramBase' => $mantramBase,
        'mantram' => $mantram
    ]);
})->name('mantram-detail');

Route::get('/info', function () {
    return 'INFO';
});
