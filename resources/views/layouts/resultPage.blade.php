<!DOCTYPE html>
<html lang="{!! trans('staticPages.meta.language') !!}">
	<head>
		<meta charset="utf-8">
		<title>{{ $eingabe }} - MetaGer</title>
		<link href="/favicon.ico" rel="icon" type="image/x-icon" />
		<link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<meta content="width=device-width, initial-scale=1.0, user-scalable=no" name="viewport" />
		<meta name="p" content="{{ getmypid() }}" />
		<meta name="q" content="{{ $eingabe }}" />
		<meta name="l" content="{{ LaravelLocalization::getCurrentLocale() }}" />
		<meta name="mm" content="{{ $metager->getVerificationId() }}" />
		<meta name="mn" content="{{ $metager->getVerificationCount() }}" />
		<link rel="search" type="application/opensearchdescription+xml" title="{!! trans('resultPage.opensearch') !!}" href="{{  LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), action('StartpageController@loadPlugin', ['params' => base64_encode(serialize(Request::all()))])) }}">
		<link type="text/css" rel="stylesheet" href="{{ mix('css/fontawesome.css') }}" />
		<link type="text/css" rel="stylesheet" href="{{ mix('css/fontawesome-solid.css') }}" />
		<link type="text/css" rel="stylesheet" href="{{ mix('css/bootstrap.css') }}" />
		<link type="text/css" rel="stylesheet" href="{{ mix('css/themes/metager.css') }}" />
		<link type="text/css" rel="stylesheet" href="/fonts/arimo/stylesheet.css" />
		<meta name="referrer" content="origin">
		<meta name="age-meta-label" content="age=18"/>
		@include('parts.utility')
	</head>
	<body id="resultpage-body">
		@if(Request::getHttpHost() === "metager3.de")
		<div class="alert alert-info metager3-unstable-warning-resultpage">
			{!! @trans('resultPage.metager3') !!}
		</div>
		@endif
		@include('parts.sidebar', ['id' => 'resultPageSideBar'])
		@include('parts.sidebar-opener', ['class' => 'fixed'])
		@if( !isset($suspendheader) )
			@include('layouts.researchandtabs')
		@else
			<link rel="stylesheet" href="/css/noheader.css">
			<div id="resultpage-container-noheader">
				<div id="results-container">
					@include('parts.errors')
					@include('parts.warnings')
					@yield('results')
				</div>
			</div>
		@endif
		@include('parts.footer', ['type' => 'resultpage', 'id' => 'resultPageFooter'])
		<script src="{{ mix('js/lib.js') }}"></script>
		<script src="{{ mix('js/scriptResultPage.js') }}" defer></script>
		<script src="{{ mix('js/focus-creator.js') }}" defer></script>
		<script src="{{ mix('js/searchbar.js') }}" defer></script>
	</body>
</html>
