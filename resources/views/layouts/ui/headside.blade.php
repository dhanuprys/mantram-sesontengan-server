<div class="bg-blue-500 flex items-center gap-4 py-6 px-4 shadow">
    <div id="sidebar-open">
        <svg class="w-[25px] h-[25px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </div>
    <h1 class="text-xl font-semibold text-white">MANTRAM SESONTENGAN</h1>
</div>

<div id="sidebar" class="fixed top-0 left-0 min-h-[100vh] min-w-[100vw] flex transition-all -translate-x-full">
    <div class="bg-white shadow-2xl min-w-[80vw] p-4">
        <h1 class="text-2xl font-semibold mb-4">MANTRAM<br />SESONTENGAN</h1>
        <a href="/info" class="p-4 hover:bg-slate-100 gap-2 flex items-center">
            <svg class="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            <span>Info Aplikasi</span>
        </a>
    </div>

    <div id="sidebar-close" class="flex-1"></div>
</div>

@vite('resources/js/sidebar.js')
