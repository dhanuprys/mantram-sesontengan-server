<?php

use App\Models\Mantram;
use App\Models\MantramBase;
use Illuminate\Support\Facades\Route;

Route::prefix('/api')->group(function () {
    Route::prefix('/v1')->group(function () {
        Route::get('/mantram', function () {
            $output = [];
            $mantramBases = MantramBase::select(['id', 'name'])
                ->orderByDesc('updated_at')
                ->get();

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
                ->orderByDesc('updated_at')
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

});
