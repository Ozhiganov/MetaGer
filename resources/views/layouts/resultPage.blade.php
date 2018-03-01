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
		<link type="text/css" rel="stylesheet" href="{{ mix('css/themes/default.css') }}" />
		<link type="text/css" rel="stylesheet" href="/css/lightslider.css" />
		<link type="text/css" rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" />
		<link id="theme" type="text/css" rel="stylesheet" href="/css/theme.css.php" />
		<meta name="referrer" content="origin">
		@include('layouts.utility')
	</head>
	<body id="resultBody">
		@if( !isset($suspendheader) )
			@include('layouts.researchandtabs')
		@else
			<div class="tab-content container-fluid">
				@yield('results')
			</div>
		@endif
		<div id="feedback" style="width:50%;margin-left:25%;position: relative; top:10px;" class="alert alert-danger alert-dismissable">
			<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  				<strong> {!! trans('metaGer.feedback') !!}<a href="{{URL::to('')}}/kontakt/{{base64_encode(Request::fullUrl())}}/" target="_blank">
  					{!! trans('kontakt.form.1') !!}</a>
  				</strong>
		</div>
		<footer>
			<div class="row">
				<div @if(LaravelLocalization::getCurrentLocale() === "de") class="col-xs-4"@else class="col-xs-6"@endif>
					<a class="btn btn-default" href="/">{!! trans('resultPage.startseite') !!}</a>
				</div>
				<div @if(LaravelLocalization::getCurrentLocale() === "de") class="col-xs-4"@else class="col-xs-6"@endif>
					<a class="btn btn-default" href="/impressum/">{!! trans('resultPage.impressum') !!}</a>
				</div>
			</div>
		</footer>
		<img src="{{ action('ImageController@generateImage')}}?site={{ urlencode(url()->current()) }}" class="hidden" />
		<script type="text/javascript" src="{{ mix('js/lib.js') }}"></script>
		<script type="text/javascript" src="{{ mix('js/scriptResultPage.js') }}"></script>
	</body>
</html>
