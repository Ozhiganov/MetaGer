@if( strpos(rtrim(Request::header('REFERER'), '/'), LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") )  === 0 && ( $browser === 'Firefox' || $browser === 'Mozilla' || $browser === 'Chrome' || $browser === 'IE' || $browser === 'Edge') )
	<div id="searchplugin" class="alert alert-warning alert-dismissible hide" role="alert" style="">
		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		{!! trans('researchandtabs.plugin.1', ['browser' => $browser]) !!}
		<br />
		<div style="">
			<a href="{{ action('StartpageController@loadStartPage', Request::all()) }}#plugin-modal" target="_blank" rel="noopener" type="button" class="btn btn-info" style="">{!! trans('researchandtabs.plugin.2') !!}</a>
		</div>
	</div>
@endif
<div class="content-wrapper container">
	<header id="research" class="row">
		<nav class="navbar navbar-default navbar-fixed-top navbar-resultpage">
			<div class="container">
				<div class="row" id="logo-searchbar-container">
					<div id="header-logo">
						<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"><h1 class="mg-logo">MetaGer</h1></a>
					</div>
					<div id="header-searchbar">
					@include('parts.searchbar', ['class' => 'resultpage-searchbar', 'request' => Request::method()])
          </div>
				</div>
			</div>
		</nav>
	</header>
	<main id="main-content-tabs" class="row">
		<div>
			<div class="row">
				@yield('results')
			</div>
		</div>
	</main>
</div>
