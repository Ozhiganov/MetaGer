<div id="resultpage-container">
	<div id="research-bar-container">
		<div id="research-bar">
			<div id="header-logo">
				<a class="screen-large" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">
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
	<div id="research-bar-placeholder">
	</div>
	<div id="foki">
		<div class="scrollbox">
			<div class="scrollfade-left"></div>
			<div id="foki-box">
				@include('parts.foki')
			</div>
			<div class="scrollfade-right"></div>
		</div>
	</div>
	<div id="results-container">
		@include('parts.errors')
		@include('parts.warnings')
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
