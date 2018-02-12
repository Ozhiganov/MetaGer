<!DOCTYPE html>
<html>
	<head>
		<title>{{ $eingabe }} - MetaGer</title>
		<link href="/favicon.ico" rel="icon" type="image/x-icon" />
		<link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<meta content="width=device-width, initial-scale=1.0, user-scalable=no" name="viewport" />
		<meta name="p" content="{{ getmypid() }}" />
		<meta name="q" content="{{ $eingabe }}" />
		<meta name="l" content="{{ LaravelLocalization::getCurrentLocale() }}" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE" />
		<meta http-equiv="language" content="{!! trans('staticPages.meta.language') !!}" />
		<meta HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE" />
		<link rel="search" type="application/opensearchdescription+xml" title="{!! trans('resultPage.opensearch') !!}" href="{{  LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), action('StartpageController@loadPlugin', ['params' => base64_encode(serialize(Request::all()))])) }}">
		<link type="text/css" rel="stylesheet" href="{{ elixir('css/themes/default.css') }}" />
		<link type="text/css" rel="stylesheet" href="/css/lightslider.css" />
		<link type="text/css" rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" />
		<link type="text/css" rel="stylesheet" href="/fonts/liberation-fonts/liberation-fonts.css" />
		<link id="theme" type="text/css" rel="stylesheet" href="/css/theme.css.php" />
		@include('parts.utility')
	</head>
	<body id="resultBody">
		@include('parts.sidebar', ['id' => 'resultPageSideBar'])
		@if( !isset($suspendheader) )
			@include('modals.create-focus-modal')
			@include('layouts.researchandtabs')
		@else
			<div id="resultpage-container">
				@yield('results')
			</div>
		@endif
		@include('parts.footer', ['type' => 'resultpage', 'id' => 'resultPageFooter'])
		<img src="{{ action('ImageController@generateImage')}}?site={{ urlencode(url()->current()) }}" class="hidden" />
		<script type="text/javascript" src="{{ elixir('js/lib.js') }}"></script>
		<script type="text/javascript" src="{{ elixir('js/scriptResultPage.js') }}"></script>
		<script type="text/javascript" src="{{ elixir('js/searchbar.js') }}"></script>
		<script type="text/javascript" src="{{ elixir('js/focus-creator.js') }}"></script>
	</body>
</html>
