@extends('layouts.app')

@section('title', 'Beranda')

@section('header')
    @include('layouts.ui.basichead', [
        'title' => $mantramBase->name,
        'secondaryTitle' => 'Jenis Mantram',
        'backHref' => '/',
    ])
@endsection

@section('content')
    <div class="p-4 flex flex-col gap-2">
        <h2 class="font-semibold text-xl">Pilih Mantra</h2>
        <p class="text-sm">Terdapat {{ \App\Models\Mantram::where('mantram_base_id', $mantramBase->id)->count() }} mantram
        </p>
        <div class="flex flex-col gap-2 mt-4">
            @foreach ($mantrams as $mantram)
                <div
                    data-id="{{ $mantram->id }}"
                    class="mantram-accordion p-4 shadow flex items-center gap-2 border rounded-lg border-slate-300 hover:shadow-lg">
                    <div class="flex-1">
                        <h1 class="text-lg font-semibold">{{ $mantram->name }}</h1>
                        <p class="ma-short text-sm text-slate-400">{{ Str::of($mantram->description ?? $mantram->mantram)->limit(30) }}</p>
                        <div class="ma-active">
                            <p class="text-slate-500 mb-6">{{ $mantram->description ?? $mantram->mantram }}</p>
                            <a href="{{ route('mantram-detail', ['mantramBaseId' => $mantramBase->id, 'mantramId' => $mantram->id]) }}" class="bg-blue-500 hover:bg-blue-300 rounded-xl px-4 py-2 text-white">selengkapnya</a>
                        </div>
                    </div>
                    <span>
                        <svg class="w-[25px] h-[25px] text-slate-800" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path fill="currentColor"
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </span>
                </div>
            @endforeach
        </div>
    </div>

    @vite('resources/js/mantram-accordion.js')
@endsection
