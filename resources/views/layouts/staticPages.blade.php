<!DOCTYPE html>
<html lang="{!! trans('staticPages.meta.language') !!}">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>@yield('title')</title>
		<meta name="description" content="{!! trans('staticPages.meta.Description') !!}" />
		<meta name="keywords" content="{!! trans('staticPages.meta.Keywords') !!}" />
		<meta name="page-topic" content="Dienstleistung" />
		<meta name="robots" content="index,follow" />
		<meta name="revisit-after" content="7 days" />
		<meta name="audience" content="all" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
		<meta rel="icon" type="image/x-icon" href="/favicon.ico" />
		<meta rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
		<link rel="search" type="application/opensearchdescription+xml" title="{{ trans('staticPages.opensearch') }}" href="{{  LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), action('StartpageController@loadPlugin', ['params' => base64_encode(serialize(Request::all()))])) }}">
		<link type="text/css" rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" />
		<link type="text/css" rel="stylesheet" href="{{ elixir('css/themes/default.css') }}" />
		<link type="text/css" rel="stylesheet" href="{{ elixir('css/utility.css') }}" />
		<link id="theme" type="text/css" rel="stylesheet" href="/css/theme.css.php" />
		<script src="{{ elixir('js/scriptSubPages.js') }}"></script>
		<script src="{{ elixir('js/lib.js') }}"></script>
		<script src="{{ elixir('js/utility.js') }}"></script>
		@if (isset($css))
			@if(is_array($css))
				@foreach($css as $el)
					<link href="/css/{{ $el }}" rel="stylesheet" />
				@endforeach
			@else
				<link href="/css/{{ $css }}" rel="stylesheet" />
			@endif
		@endif
	</head>
	<body>
		<header>
			@include('layouts.header')
		</header>
		@include('layouts.sidebar', ['id' => 'staticPagesSideBar'])
		<div class="content">
			@include('layouts.alerts')
			<main>
				@yield('content')
			</main>
			@yield('optionalContent')
			<img src="{{ action('ImageController@generateImage')}}?site={{ urlencode(url()->current()) }}" class="hidden" />
		</div>
		@if (isset($page) && $page === 'startpage')
			<footer class="noprint startPageFooter">
				@include('layouts.footer', ['type' => 'startpage', 'id' => 'startPageFooter'])
			</footer>
		@else
			<footer class="noprint">
				@include('layouts.footer', ['type' => 'subpage', 'id' => 'subPageFooter'])
			</footer>
		@endif
	</body>
</html>
