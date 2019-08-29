<div id="resultpage-container">
	<div id="whitespace"></div>
	<div id="research-bar-container">
		<div id="research-bar">
			<div id="header-logo">
				<a class="screen-large" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" tabindex="4">
					<h1>MetaGer</h1>
				</a>
				<a class="screen-small" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">
					<h1>M</h1>
				</a>
			</div>
			<div id="header-searchbar">
				@include('parts.searchbar', ['class' => 'resultpage-searchbar', 'request' => Request::method()])
			</div>
			<div class="sidebar-opener-placeholder"></div>
		</div>
	</div>
	<div id="foki">
		<div class="scrollbox">
			<div id="foki-box">
				@include('parts.foki')
			</div>
			<div class="scrollfade-right"></div>
		</div>
	</div>
	@include('parts.filter')
	<div id="results-container">
		@include('parts.errors')
		@include('parts.warnings')
		@yield('results')
	</div>
	<div id="additions-container">
		@include('layouts.keyboardNavBox')
		@if( $metager->showQuicktips() )
			<div id="quicktips">
				@include('quicktips', ['quicktips', $quicktips])
			</div>
		@endif
	</div>
	@include('parts.footer', ['type' => 'resultpage', 'id' => 'resultPageFooter'])
</div>
