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
<div class="content-wrapper">
	<header id="research-bar">
		<div id="header-logo">
			<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"><h1 class="mg-logo">MetaGer</h1></a>
		</div>
		<div id="header-searchbar">
			@include('parts.searchbar', ['class' => 'resultpage-searchbar', 'request' => Request::method()])
		</div>
	</header>
	<main class="resultpage-container">
		@yield('results')
	</main>
</div>