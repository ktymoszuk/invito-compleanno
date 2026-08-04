<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @php($isProduction = app()->environment('production'))
    @if($isProduction)
        <link rel="preload" href="{{ secure_asset('build/assets/app.css') }}" as="style">
        <link rel="preload" href="{{ secure_asset('build/assets/app.js') }}" as="script">
    @endif
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <div id="app"></div>
</body>
</html>