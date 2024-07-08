<?php

use App\Models\Mantram;
use App\Models\MantramBase;
use Illuminate\Support\Facades\Route;

Route::view('/', 'main');
Route::view('/mantram{all}', 'main')->where('all', '.*');

Route::prefix('/api')->group(function () {
    Route::prefix('/v1')->group(function () {
        Route::get('/mantram', function () {
            $output = [];
            $mantramBases = MantramBase::select(['id', 'name'])->get();

            foreach ($mantramBases as $mantram) {
                $output[] = [
                    'id' => $mantram->id,
                    'name' => $mantram->name,
                    'mantram_count' => Mantram::where('mantram_base_id', $mantram->id)->count()
                ];
            }

            return response()->json($output);
        });

        Route::get('/mantram/{mantramBaseId}', function ($mantramBaseId) {
            $mantrams = Mantram::where('mantram_base_id', $mantramBaseId)
                ->select([
                    'id',
                    'name',
                    'mantram',
                    'description'
                ])
                ->get();

            if ($mantrams->count() <= 0) {
                return response()->json(null, 404);
            }

            return response()->json($mantrams);
        });

        Route::get('/mantram/{mantramBaseId}/{mantramId}', function ($mantramBaseId, $mantramId) {
            $mantram = Mantram::where([
                'id' => $mantramId,
                'mantram_base_id' => $mantramBaseId,
            ])
            ->select([
                'id',
                'name',
                'mantram',
                'description',
                'audio_url',
                'updated_at'
            ])
            ->first();

            if ($mantram->count() <= 0) {
                return response()->json(null, 404);
            }

            return response()->json($mantram);
        });
    });

    Route::get('/mantram', function () {
        $output = [];
        $mantramBases = MantramBase::select(['id', 'name'])->get();

        foreach ($mantramBases as $mantram) {
            $output[] = [
                'id' => $mantram->id,
                'name' => $mantram->name,
                'mantram_count' => Mantram::where('mantram_base_id', $mantram->id)->count()
            ];
        }

        return response()->json($output);
    });

    Route::get('/mantram/{mantramBaseId}', function ($mantramBaseId) {
        $mantramBase = MantramBase::find($mantramBaseId, ['id', 'name']);
        $mantrams = Mantram::where('mantram_base_id', $mantramBaseId)
            ->select([
                'id',
                'name',
                'mantram',
                'description'
            ])
            ->get();

        if (!$mantramBase) {
            return response()->json(null, 404);
        }

        return response()->json([
            'mantram_base' => $mantramBase,
            'mantram_count' => $mantrams->count(),
            'mantrams' => $mantrams,
        ]);
    })->name('mantram-base');

    Route::get('/mantram/{mantramBaseId}/{mantramId}', function ($mantramBaseId, $mantramId) {
        $mantramBase = MantramBase::find($mantramBaseId, ['id', 'name']);
        $mantram = Mantram::where([
            'id' => $mantramId,
            'mantram_base_id' => $mantramBaseId,
        ])->first();

        if (!$mantram) {
            return response()->json(null, 404);
        }

        return response()->json([
            'mantram_base' => $mantramBase,
            'mantram' => $mantram
        ]);
    })->name('mantram-detail');

});
