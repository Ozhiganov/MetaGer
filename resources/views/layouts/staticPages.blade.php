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
		<link id="theme" type="text/css" rel="stylesheet" href="/css/theme.css.php" />
		<script src="{{ elixir('js/scriptSubPages.js') }}"></script>
		<script src="{{ elixir('js/lib.js') }}"></script>
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
			@yield('homeIcon')

			<style>.sideBar {position:fixed; right:-160px; top:0; width:200px; height:100%; background:#ffffff; overflow:hidden; overflow-y:auto; transition:0.5s; z-index:100005;}
			</style>
			<input name="nav" id="nav0" style="display:none;" class="nav0" checked="" type="radio">
			<div class="sideBar">
				<label for="nav0"><a href="#"><i class="fa fa-bars fa-lg" style="position:fixed; top:2%; right:1%;" aria-hidden="true"></i></a></label>
			</div>

		</header>
		<div class="wrapper">
			<main class="mg-panel container">
				@if (isset($success))
					<div class="alert alert-success" role="alert">{{ $success }}</div>
				@endif
				@if (isset($info))
					<div class="alert alert-info" role="alert">{{ $info }}</div>
				@endif
				@if (isset($warning))
					<div class="alert alert-warning" role="alert">{{ $warning }}</div>
				@endif
				@if (isset($error))
					<div class="alert alert-danger" role="alert">{{ $error }}</div>
				@endif
				@yield('content')
			</main>
			@yield('optionalContent')
			<footer class="noprint">
				<ul class="list-inline hidden-xs">
					<li>
						<a href="https://www.suma-ev.de/"  >
						<img src="/img/suma_ev_logo-m1-greyscale.png" alt="SUMA-EV Logo"></a>
					</li>
					<li id="info">
						<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "kontakt") }}">{{ trans('staticPages.nav5') }}</a> - <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "impressum") }}">{{ trans('staticPages.nav8') }}</a>
						{{ trans('staticPages.sumaev.1') }}<a href="https://www.suma-ev.de/">{{ trans('staticPages.sumaev.2') }}</a>
					</li>
					<li>
						<a href="https://www.uni-hannover.de/"  >
						<img src="/img/luh_metager.png" alt="LUH Logo"></a>
					</li>
				</ul>
			</footer>
			<img src="{{ action('ImageController@generateImage')}}?site={{ urlencode(url()->current()) }}" class="hidden" />
		</div>
	</body>
</html>
