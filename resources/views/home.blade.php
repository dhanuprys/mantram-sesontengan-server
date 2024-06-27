@extends('layouts.app')

@section('title', 'Beranda')

@section('header')
    @include('layouts.ui.headside')
@endsection

@section('content')
    <div class="flex justify-center">
        <img src="/hindu.png" class="p-8" />
    </div>
    <h2 class="px-4 py-2 font-semibold text-xl">Pilih Mantra</h2>
    <div class="p-4 flex flex-col gap-2">
        @foreach ($mantrams as $mantram)
            <a wire:navigate href="{{ route('mantram-base', ['mantramBaseId' => $mantram->id]) }}" class="p-4 shadow flex items-center gap-2 border rounded-lg border-slate-300 hover:shadow-lg">
                <div>
                    <h1 class="text-lg font-semibold">{{ $mantram->name }}</h1>
                    <p class="text-sm">Terdapat {{ \App\Models\Mantram::where('mantram_base_id', $mantram->id)->count() }} mantram</p>
                </div>
                <span class="ml-auto">
                    <svg class="w-[25px] h-[25px] text-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </span>
            </a>
        @endforeach
    </div>
@endsection
