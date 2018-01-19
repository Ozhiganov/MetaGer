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
<header>
	<div id="research-bar">
		<div id="header-logo">
			<a class="hidden-xs" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"><h1 class="mg-logo">MetaGer</h1></a>
			<a class="visible-xs" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"><h1 class="mg-logo">M</h1></a>
		</div>
		<div id="header-searchbar">
			@include('parts.searchbar', ['class' => 'resultpage-searchbar', 'request' => Request::method()])
		</div>
	</div>
</header>
<div id="research-bar-placeholder"></div>
<div id="foki">
	@include('parts.foki')
</div>
<div id="resultpage-container">
	<div id="results-container">
		@yield('results')
	</div>
	<div id="additions-container">
		@if( $metager->showQuicktips() )
			<div id="quicktips"></div>
		@endif
	</div>
</div>