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
		<style>
			@php
				echo file_get_contents(public_path() . mix('css/themes/default.css'));
			@endphp
		</style>
		<link id="theme" type="text/css" rel="stylesheet" href="/css/theme.css.php" />
		<script type="text/javascript">
			@php
				echo file_get_contents(public_path() . mix('js/scriptSubPages.js'));
			@endphp
		</script>
		<script type="text/javascript">
			@php
				echo file_get_contents(public_path() . mix('js/lib.js'));
			@endphp
		</script>
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
		<nav id="navbar-static-pages" class="navbar-resultpage">


			<ul id="metager-static-nav-list" class="list-inline pull-right">
				<li id="toggle-nav-hide" class="hidden">
					<a class="metager-navbar-toggle pull-right" href="#" data-original-title="" title="">
									<span class="sr-only">Navigation anzeigen</span>
									<i class="fa fa-bars" aria-hidden="true"></i>
					</a>
					<div class="clearfix"></div>
				</li>
				<li id="toggle-nav-show">
					<a class="metager-navbar-toggle pull-right" href="#metager-static-nav-list" data-original-title="" title="">
						<span class="sr-only">Navigation anzeigen</span>
						<i class="fa fa-bars" aria-hidden="true"></i>
					</a>
					<div class="clearfix"></div>
				</li>
				<li @if ( !isset($navbarFocus) || $navbarFocus === 'suche') class="active" @endif >
					<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"  tabindex="200" id="navigationSuche">{{ trans('staticPages.nav1') }}</a>
				</li>
				<li @if (isset($navbarFocus) && $navbarFocus === 'foerdern') class="metager-dropdown active" @else class="metager-dropdown" @endif >
					<a class="metager-dropdown-toggle" role="button" aria-expanded="false" tabindex="201">{{ trans('staticPages.nav16') }}
								<span class="caret"></span></a>
								<ul class="metager-dropdown-menu">
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/spende/") }}" tabindex="202">{{ trans('staticPages.nav2') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/beitritt/") }}" tabindex="203">{{ trans('staticPages.nav23') }}</a>
									</li>
									<li>
										<a href="https://www.boost-project.com/de/shops?charity_id=1129&amp;tag=bl" tabindex="204">{{ trans('staticPages.nav17') }}</a>
									</li>
									@if(LaravelLocalization::getCurrentLocale() == "de")
										<li>
										<a href="https://shop.spreadshirt.de/metager/" rel="noopener" target="_blank">MetaGer-Fanshop</a>

										</li>
									@endif
								</ul>
							</li>
							<li @if (isset($navbarFocus) && $navbarFocus === 'datenschutz') class="active" @endif >
								<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/datenschutz/") }}" id="navigationPrivacy" tabindex="215">{{ trans('staticPages.nav3') }}</a>
							</li>
							<li @if (isset($navbarFocus) && $navbarFocus === 'hilfe') class="metager-dropdown active" @else class="metager-dropdown" @endif >
								<a class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" id="navigationHilfe" tabindex="216">{{ trans('staticPages.nav20') }}
								<span class="caret"></span></a>
								<ul class="metager-dropdown-menu">
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/hilfe/") }}" tabindex="217">{{ trans('staticPages.nav20') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/faq/") }}" tabindex="218">{{ trans('staticPages.nav21') }}</a>
									</li>
								</ul>
							</li>
							<li @if (isset($navbarFocus) && $navbarFocus === 'kontakt') class="metager-dropdown active" @else class="metager-dropdown" @endif >
								<a class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" id="navigationKontakt" tabindex="219">{{ trans('staticPages.nav18') }}
								<span class="caret"></span></a>
								<ul class="metager-dropdown-menu">
									<li>
										<a href="http://forum.suma-ev.de/" tabindex="220">{{ trans('staticPages.nav4') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/kontakt/") }}" tabindex="221">{{ trans('staticPages.nav5') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/team/") }}" tabindex="222">{{ trans('staticPages.nav6') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/about/") }}" tabindex="223">{{ trans('staticPages.nav7') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/impressum/") }}" tabindex="224">{{ trans('staticPages.nav8') }}</a>
									</li>
								</ul>
							</li>
							<li @if (isset($navbarFocus) && $navbarFocus === 'dienste') class="metager-dropdown active" @else class="metager-dropdown" @endif >
								<a class="metager-dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" tabindex="225">{{ trans('staticPages.nav15') }}
								<span class="caret"></span></a>
								<ul class="metager-dropdown-menu">
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/widget/") }}" tabindex="226">{{ trans('staticPages.nav10') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/zitat-suche/") }}" tabindex="227">{{ trans('staticPages.nav22') }}</a>
									</li>
									<li>
										<a href="https://metager.de/klassik/asso/" tabindex="228">{{ trans('staticPages.nav11') }}</a>
									</li>
									<li>
										<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/app/") }}" tabindex="230">@lang('staticPages.nav25')</a>
									</li>
									<li>
										<a href="https://metager.to/" tabindex="231">{{ trans('staticPages.nav13') }}</a>
									</li>
									<li>
										<a href="https://maps.metager.de" target="_blank" tabindex="232">Maps.MetaGer.de</a>
									</li>
									<li>
										<a href="https://gitlab.metager3.de/open-source/MetaGer" tabindex="233">{{ trans('staticPages.nav24') }}</a>
									</li>
									<li>
										<a href="http://forum.suma-ev.de/viewtopic.php?f=3&amp;t=43" tabindex="234">{{ trans('staticPages.nav14') }}</a>
									</li>
								</ul>
							</li>
							<li class="metager-dropdown">
								<a class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" id="navigationSprache" tabindex="235">{{ trans('staticPages.nav19') }} ({{ LaravelLocalization::getSupportedLocales()[LaravelLocalization::getCurrentLocale()]['native'] }})
								<span class="caret"></span></a>
								<ul class="metager-dropdown-menu">
									@foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
										<li>
											<a rel="alternate" hreflang="{{$localeCode}}" href="{{LaravelLocalization::getLocalizedURL($localeCode) }}" tabindex="{{235 + $loop->index}}">{{{ $properties['native'] }}}</a>
										</li>
									@endforeach
								</ul>
							</li>
			</ul>
		</nav>

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
					<div class="hidden-xs mg-img">
						<a href="https://www.suma-ev.de/"  >
						<img src="/img/suma_ev_logo-m1-greyscale.png" alt="SUMA-EV Logo"></a>
					</div>
					<div id="info">
						<div class="links">
							<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "kontakt") }}">
								{{ trans('staticPages.nav5') }}
							</a>
							<span> - </span>
							<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "impressum") }}">
								{{ trans('staticPages.nav8') }}
							</a>
							@if(LaravelLocalization::getCurrentLocale() == "de")
							<span> - </span>
							<a href="https://shop.spreadshirt.de/metager/" rel="noopener" target="_blank">Fanshop</a>
							@endif
						</div>
						<div>
							{{ trans('staticPages.sumaev.1') }}<a href="https://www.suma-ev.de/">{{ trans('staticPages.sumaev.2') }}</a>
						</div>
					</div>
					<div class="hidden-xs mg-img">
						<a href="https://www.uni-hannover.de/"  >
						<img src="/img/luh_metager.png" alt="LUH Logo"></a>
					</li>
			</footer>
		</div>
	</body>
</html>
