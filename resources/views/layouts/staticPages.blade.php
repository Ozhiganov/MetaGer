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
		<link type="text/css" rel="stylesheet" href="/fonts/liberation-fonts/liberation-fonts.css" />
		<link type="text/css" rel="stylesheet" href="{{ mix('css/themes/default.css') }}" />
		<link type="text/css" rel="stylesheet" href="{{ mix('css/utility.css') }}" />
		<link id="theme" type="text/css" rel="stylesheet" href="/css/theme.css.php" />
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
		<div class="alert alert-info" style="text-align: center;">
		Sie befinden sich auf einer MetaGer Testversion. Hier werden Features vor der Veröffentlichung getestet. Unter Umständen funktioniert hier nicht alles wie gewohnt.
		Unsere stabile Version finden Sie <a href="https://metager.de" target="_self">hier</a>.
		</div>
		@endif
		<header>
			@yield('homeIcon')
		</header>
		@include('parts.sidebar', ['id' => 'staticPagesSideBar'])
		@include('parts.sidebar-opener', ['class' => 'fixed'])
		<div class="wrapper">
			<main class="mg-panel">
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
		</div>
		@if (isset($page) && $page === 'startpage')
			@include('parts.footer', ['type' => 'startpage', 'id' => 'startPageFooter'])
		@else
			@include('parts.footer', ['type' => 'subpage', 'id' => 'subPageFooter'])
		@endif
	</body>
</html>
