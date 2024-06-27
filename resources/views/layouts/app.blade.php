<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    @vite('resources/css/app.css')
</head>
<body>
    <div class="sticky top-0">
        @yield('header')
    </div>
    <div class="max-w-[55rem] mx-auto">
        @yield('content')
    </div>
</body>
</html>
