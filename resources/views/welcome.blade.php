<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>JobMalai</title>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
        <link rel="icon" href="{{asset('logo.ico')}}">
        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body>
    <div id="app">
    <!-- don't code here goto App.vue and code there -->
    </div>
    <!-- <script src="{{asset('js/app.js')}}"></script> -->
    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
