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
		<meta name="mm" content="{{ Request::input('verification_id') }}" />
		<meta name="mn" content="{{ Request::input('verification_count') }}" />
		<link rel="search" type="application/opensearchdescription+xml" title="{!! trans('resultPage.opensearch') !!}" href="{{  LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), action('StartpageController@loadPlugin', ['params' => base64_encode(serialize(Request::all()))])) }}">
		<link type="text/css" rel="stylesheet" href="{{ mix('css/themes/default.css') }}" />
		<link type="text/css" rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" />
		<link type="text/css" rel="stylesheet" href="/fonts/liberation-fonts/liberation-fonts.css" />
		<link id="theme" type="text/css" rel="stylesheet" href="/css/theme.css.php" />
		<meta name="referrer" content="origin">
		<meta name="age-meta-label" content="age=18"/>
		@include('parts.utility')
	</head>
	<body id="resultpage-body">
		@if(Request::getHttpHost() === "metager3.de")
		<div class="alert alert-info" style="text-align: center; position: fixed; bottom: 0;">
		Sie befinden sich auf einer MetaGer Testversion. Hier werden Features vor der Veröffentlichung getestet. Unter Umständen funktioniert hier nicht alles wie gewohnt.
		Unsere stabile Version finden Sie <a href="https://metager.de" target="_self">hier</a>.
		</div>
		@endif
		@include('parts.sidebar', ['id' => 'resultPageSideBar'])
		@if( !isset($suspendheader) )
			@include('modals.create-focus-modal')
			@include('layouts.researchandtabs')
		@else
			<div id="resultpage-container-noheader">
				<div id="results-container">
					@include('parts.errors')
					@include('parts.warnings')
					@yield('results')
				</div>
			</div>
		@endif
		@include('parts.footer', ['type' => 'resultpage', 'id' => 'resultPageFooter'])
		<img src="{{ action('ImageController@generateImage')}}?site={{ urlencode(url()->current()) }}" class="hidden" alt=""/>
		<script src="{{ mix('js/lib.js') }}"></script>
		<script src="{{ mix('js/scriptResultPage.js') }}"></script>
		<script src="{{ mix('js/focus-creator.js') }}"></script>
		<script src="{{ mix('js/searchbar.js') }}"></script>
	</body>
</html>
