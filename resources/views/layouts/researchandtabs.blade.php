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
	<div class="scrollbox">
		<div class="foki-scrollfade-left"></div>
		<div id="foki-box">
			@include('parts.foki')
		</div>
		<div class="foki-scrollfade-right"></div>
	</div>
</div>
<div id="resultpage-container">
	<div id="results-container">
		@yield('results')
	</div>
	<div id="additions-container">
		<div id="search-settings">
			<h1>Eigene Suche</h1>
			@foreach( App\Http\Controllers\FokiLoader::loadFoki() as $fokus => $sumas )
					<h2 class="focus-category">
						@lang("settings.foki." . $fokus)
					</h2>
					<div class="fokus-engines">
						@foreach( $sumas as $name => $data )
							<div class="checkbox settings-checkbox">
								<label>
									<input type="checkbox" name="engine_{{ strtolower($name) }}" class="focusCheckbox" @if ($fokus=='web' ) checked @endif>{{ $data['displayName'] }}
									<a class="settings-icon" target="_blank" rel="noopener" href="{{ $data['url'] }}">
										<i class="fa fa-info-circle" aria-hidden="true"></i>
									</a>
								</label>
						</div>
						@endforeach
				</div>
			@endforeach
		</div>
		@if( $metager->showQuicktips() )
			<div id="quicktips">
				@include('quicktips', ['quicktips', $quicktips])
			</div>
		@endif
	</div>
</div>
