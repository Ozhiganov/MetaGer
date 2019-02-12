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
	@if(sizeof($metager->getAvailableParameterFilter()) > 0)
	<div id="options">
		<input type="checkbox" id="options-toggle" @if(sizeof($metager->getParameterFilter()) > 0)checked @endif />
		<div class="scrollbox">
			<div class="scrollfade-left"></div>
			<div id="options-box">
				@if(sizeof($metager->getParameterFilter()) > 0)
				<div id="options-reset">
					<a href="{{$metager->generateSearchLink($metager->getFokus())}}"><nobr>Filter zurücksetzen</nobr></a>
				</div>
				@endif
				<div id="options-items">
				@foreach($metager->getAvailableParameterFilter() as $filterName => $filter)
					<div class="option-selector">
					<label for="{{$filterName}}">@lang($filter->name)</label>
					<select name="{{$filter->{'get-parameter'} }}" form="searchForm" onchange="this.form.submit()">
						@foreach($filter->values as $value => $text)
						<option value="{{$value}}" @if(Request::input($filter->{'get-parameter'}, '') === $value)selected="selected" @endif>{{trans($text)}}</option>
						@endforeach
					</select>
					</div>
				@endforeach
				</div>

			</div>
			<div class="scrollfade-right"></div>
		</div>
	</div>
	@endif
	<div id="results-container">
		@include('parts.errors')
		@include('parts.warnings')
		@yield('results')
	</div>
	<div id="additions-container">
		@if( $metager->showQuicktips() )
			<div id="quicktips">
				@include('quicktips', ['quicktips', $quicktips])
			</div>
		@endif
	</div>
</div>
