<div id="resultpage-container">
	<div id="whitespace"></div>
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
	<div id="foki">
		<div class="scrollbox">
			<div id="foki-box">
				@include('parts.foki')
			</div>
			<div class="scrollfade-right"></div>
		</div>
	</div>
	@if(sizeof($metager->getAvailableParameterFilter()) > 0)
	<div id="options">
		<div id="toggle-box">
			@if(sizeof($metager->getAvailableParameterFilter()) > 0)
			<div class="option-toggle">
				<label class="navigation-element" for="options-toggle">
					<i class="fas fa-filter"></i> Filter&hellip;
				</label>
			</div>
			@endif
			@if(sizeof($metager->getParameterFilter()) > 0)
			<div id="options-reset">
				<a href="{{$metager->generateSearchLink($metager->getFokus())}}"><nobr>{{ trans('metaGer.filter.reset') }}</nobr></a>
			</div>
			@endif
			@if($metager->getTotalResultCount() > 0)
			<div id="result-count">
				~ {{$metager->getTotalResultCount()}} {{ trans('metaGer.results') }}
			</div>
			@endif
		</div>
		<input type="checkbox" id="options-toggle" @if(sizeof($metager->getParameterFilter()) > 0)checked @endif />
		<div class="scrollbox">
			<div id="options-box">
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
	@include('parts.footer', ['type' => 'resultpage', 'id' => 'resultPageFooter'])
</div>
