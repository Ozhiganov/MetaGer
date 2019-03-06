<!DOCTYPE html>
<html lang="{!! trans('staticPages.meta.language') !!}">
	<head>
		<meta charset="utf-8" />
		<title>@yield('title')</title>
		<meta name="description" content="{!! trans('staticPages.meta.Description') !!}" />
		<meta name="keywords" content="{!! trans('staticPages.meta.Keywords') !!}" />
		<meta name="page-topic" content="Dienstleistung" />
		<meta name="robots" content="index,follow" />
		<meta name="revisit-after" content="7 days" />
		<meta name="audience" content="all" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
		<link href="/favicon.ico" rel="icon" type="image/x-icon" />
		<link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<link rel="search" type="application/opensearchdescription+xml" title="{{ trans('staticPages.opensearch') }}" href="{{  LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), action('StartpageController@loadPlugin', ['params' => base64_encode(serialize(Request::all()))])) }}">
		<link type="text/css" rel="stylesheet" href="{{ mix('css/fontawesome.css') }}" />
		<link type="text/css" rel="stylesheet" href="{{ mix('css/fontawesome-solid.css') }}" />
		<link type="text/css" rel="stylesheet" href="{{ mix('css/bootstrap.css') }}" />
		<link type="text/css" rel="stylesheet" href="{{ mix('css/themes/metager.css') }}" />
		<link type="text/css" rel="stylesheet" href="{{ mix('css/utility.css') }}" />
		<script src="{{ mix('js/lib.js') }}"></script>
		<script src="{{ mix('js/utility.js') }}"></script>
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
		@if(Request::getHttpHost() === "metager3.de")
		<div class="alert alert-info metager3-unstable-warning-static-pages">
			{!! @trans('resultPage.metager3') !!}
		</div>
		@endif
		<header>
			@yield('homeIcon')
		</header>
		<div class="wrapper {{$page ?? ''}}">
			<main id="main-content">
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
			<div id="additional-content">
				@yield('additional-content')
			</div>
		</div>
		@include('parts.sidebar', ['id' => 'staticPagesSideBar'])
		@include('parts.sidebar-opener', ['class' => 'fixed'])
		@if (isset($page) && $page === 'startpage')
			@include('parts.footer', ['type' => 'startpage', 'id' => 'startPageFooter'])
		@else
			@include('parts.footer', ['type' => 'subpage', 'id' => 'subPageFooter'])
		@endif
	</body>
</html>
