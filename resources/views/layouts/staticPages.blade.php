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
		<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE" />
		<meta HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE" />
		<link rel="search" type="application/opensearchdescription+xml" title="{{ trans('staticPages.opensearch') }}" href="{{  LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), action('StartpageController@loadPlugin', ['params' => base64_encode(serialize(Request::all()))])) }}">
		<link type="text/css" rel="stylesheet" href="{{ elixir('css/themes/default.css') }}" />
		<link id="theme" type="text/css" rel="stylesheet" href="/css/theme.css.php" />
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
			<nav class="navbar navbar-default navbar-fixed-top">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
							<span class="sr-only">{{ trans('staticPages.navigationToggle') }}</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						@yield('homeIcon')
					</div>
					<div class="collapse navbar-collapse" id="navbar-collapse">
						<ul class="nav navbar-nav navbar-right">
							<li @if ( !isset($navbarFocus) || $navbarFocus === 'suche') class="active" @endif >
								<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" id="navigationSuche">{{ trans('staticPages.nav1') }}</a>
							</li>
							<li @if (isset($navbarFocus) && $navbarFocus === 'foerdern') class="dropdown active" @else class="dropdown" @endif >
								<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ trans('staticPages.nav16') }}
								<span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/spende/") }}">{{ trans('staticPages.nav2') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/beitritt/") }}">{{ trans('staticPages.nav23') }}</a>
									</li>
									<li>
										<a href="https://www.boost-project.com/de/shops?charity_id=1129&amp;tag=bl">{{ trans('staticPages.nav17') }}</a>
									</li>
								</ul>
							</li>
							@if(LaravelLocalization::getCurrentLocale() === "de")
							<li id="gutscheine"@if (isset($navbarFocus) && $navbarFocus === 'gutscheine') class="dropdown active" @else class="dropdown" @endif >
								<span class="dropdown-toggle" data-role="button" aria-expanded="false">... durch {!! trans('staticPages.gutscheineToggle') !!}
								<span class="caret"></span></span>
								<ul class="dropdown-menu">
									<li>
										<a href="https://metager.de/gutscheine/congstar/"  >{{ trans('staticPages.gutscheine.2') }}</a>
									</li>
									<li>
										<a href="https://metager.de/gutscheine/check24/"  >{{ trans('staticPages.gutscheine.3') }}</a>
									</li>
									<li>
										<a href="https://metager.de/gutscheine/handyflash/"  >{{ trans('staticPages.gutscheine.4') }}</a>
									</li>
									<li>
										<a href="https://metager.de/gutscheine/groupon/"  >{{ trans('staticPages.gutscheine.5') }}</a>
									</li>
									<li>
										<a href="https://metager.de/gutscheine/medion/"  >{{ trans('staticPages.gutscheine.6') }}</a>
									</li>
									<li>
										<a href="https://metager.de/gutscheine/navabi/"  >{{ trans('staticPages.gutscheine.7') }}</a>
									</li>
									<li>
										<a href="https://metager.de/gutscheine/netcologne/"  >{{ trans('staticPages.gutscheine.8') }}</a>
									</li>
									<li>
										<a href="https://metager.de/gutscheine/teufel/"  >{{ trans('staticPages.gutscheine.9') }}</a>
									</li>
									<li role="separator" class="divider"></li>
									<li>
										<a href="https://metager.de/gutscheine/alle-gutscheine/"  >{{ trans('staticPages.gutscheine.10') }}</a>
									</li>
								</ul>
							</li>
							@endif
							<li @if (isset($navbarFocus) && $navbarFocus === 'datenschutz') class="active" @endif >
								<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/datenschutz/") }}" id="navigationPrivacy">{{ trans('staticPages.nav3') }}</a>
							</li>
							<li @if (isset($navbarFocus) && $navbarFocus === 'hilfe') class="dropdown active" @else class="dropdown" @endif >
								<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="navigationHilfe">{{ trans('staticPages.nav20') }}
								<span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/hilfe/") }}">{{ trans('staticPages.nav20') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/faq/") }}">{{ trans('staticPages.nav21') }}</a>
									</li>
								</ul>
							</li>
							<li @if (isset($navbarFocus) && $navbarFocus === 'kontakt') class="dropdown active" @else class="dropdown" @endif >
								<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="navigationKontakt">{{ trans('staticPages.nav18') }}
								<span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li>
										<a href="http://forum.suma-ev.de/">{{ trans('staticPages.nav4') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/kontakt/") }}">{{ trans('staticPages.nav5') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/team/") }}">{{ trans('staticPages.nav6') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/about/") }}">{{ trans('staticPages.nav7') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/impressum/") }}">{{ trans('staticPages.nav8') }}</a>
									</li>
								</ul>
							</li>
							<li @if (isset($navbarFocus) && $navbarFocus === 'dienste') class="dropdown active" @else class="dropdown" @endif >
								<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ trans('staticPages.nav15') }}
								<span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/widget/") }}">{{ trans('staticPages.nav10') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/zitat-suche/") }}"  >{{ trans('staticPages.nav22') }}</a>
									</li>
									<li>
										<a href="https://metager.de/klassik/asso/"  >{{ trans('staticPages.nav11') }}</a>
									</li>
									<li>
										<a href="http://code.metager.de/"  >{{ trans('staticPages.nav12') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/app/") }}">@lang('staticPages.nav25')</a>
									</li>
									<li>
										<a href="https://metager.to/"  >{{ trans('staticPages.nav13') }}</a>
									</li>
									<li>
										<a href="https://maps.metager.de" target="_blank">Maps.MetaGer.de</a>
									</li>
									<li>
										<a href="https://gitlab.metager3.de/open-source/MetaGer"  >{{ trans('staticPages.nav24') }}</a>
									</li>
									<li>
										<a href="http://forum.suma-ev.de/viewtopic.php?f=3&amp;t=43"  >{{ trans('staticPages.nav14') }}</a>
									</li>
								</ul>
							</li>
							<li class="dropdown">
								<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="navigationSprache">{{ trans('staticPages.nav19') }} ({{ LaravelLocalization::getSupportedLocales()[LaravelLocalization::getCurrentLocale()]['native'] }})
								<span class="caret"></span></a>
								<ul class="dropdown-menu">
									@foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
										<li>
											<a rel="alternate" hreflang="{{$localeCode}}" href="{{LaravelLocalization::getLocalizedURL($localeCode) }}">{{{ $properties['native'] }}}</a>
										</li>
									@endforeach
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<div class="wrapper">
			<main class="mg-panel container">
				@if (isset($success))
					<div class="alert alert-success" role="alert">{{ $success }}</div>
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
						{{ trans('staticPages.sumaev.1') }}<a href="https://www.suma-ev.de/"   >{{ trans('staticPages.sumaev.2') }}</a>
					</li>
					<li>
						<a href="https://www.uni-hannover.de/"  >
						<img src="/img/luh_metager.png" alt="LUH Logo"></a>
					</li>
				</ul>
			</footer>
			<img src="{{ action('ImageController@generateImage')}}?site={{ urlencode(url()->current()) }}" class="hidden" />
			<script type="text/javascript" src="{{ elixir('js/all.js') }}"></script>
		</div>
	</body>
</html>
