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
					<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"><h1 class="mg-logo">M<span class="hidden-xs">eta</span>G<span class="hidden-xs">er</span></h1></a>
					<form method="{{ Request::method() }}" accept-charset="UTF-8" class="form search-bar-input" id="submitForm">
						<div class="searchbar">
							<input autocomplete="off" class="form-control" form="submitForm" id="eingabeTop" name="eingabe" placeholder="Suchbegriffe erweitern/verändern, oder völlig neue Suche:" tabindex="1" type="text" value="{{ $eingabe }}" required />
							<button type='submit' form="submitForm" id='search'><i class="fa fa-search" aria-hidden="true"></i></button>
						</div>
						@foreach( $metager->request->all() as $key => $value)
							@if($key !== "eingabe" && $key !== "page" && $key !== "next")
								<input type='hidden' name='{{ $key }}' value='{{ $value }}' form='submitForm' />
							@endif
						@endforeach
					</form>
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
