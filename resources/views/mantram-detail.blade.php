@extends('layouts.app')

@section('title', 'Beranda')

@section('header')
    @include('layouts.ui.basichead', [
        'title' => $mantram->name,
        'secondaryTitle' => $mantramBase->name,
        'backHref' => route('mantram-base', ['mantramBaseId' => $mantramBase->id]),
    ])
@endsection

@section('content')
    <div class="p-4">
        <h2 class="font-semibold text-xl mb-4">Mantram</h2>
        <div class="text-lg italic">
            @foreach (explode("\n", $mantram->mantram) as $mantramLine)
                <div class="hover:text-slate-500">{{ $mantramLine }}</div>
            @endforeach
        </div>
    </div>

    <div class="p-4">
        <h2 class="font-semibold text-xl mb-4">Deskripsi</h2>
        <p>{{ $mantram->description }}</p>
    </div>

    <!-- AUDIO -->
    <div
        class="z-10 fixed left-0 bottom-0 shadow b border-t bg-slate-50 border-t-slate-200 w-full">
        <div id="audio-seek" class="relative w-full h-[4px] bg-slate-200">
            <div class="absolute h-full bg-blue-500"></div>
        </div>

        <div class="p-4 flex justify-between items-center">
            <div>
                @if ($mantram->audio_url)
                    <h3 class="text-lg font-semibold">Putar audio</h3>
                    <script>
                        window.MANTRAM_AUDIO_URL = '/storage/{{ $mantram->audio_url }}'
                    </script>
                @else
                    <span>Tidak ada audio</span>
                @endif
            </div>
            <div>
                <div class="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-black">
                    <svg id="audio-play" class="w-[20px] h-[20px] text-white" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path fill="currentColor"
                            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                    </svg>
                    <svg id="audio-pause" class="w-[20px] h-[20px] text-white hidden" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path fill="currentColor"
                            d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

    @vite('resources/js/mantram-audio.js')
@endsection
