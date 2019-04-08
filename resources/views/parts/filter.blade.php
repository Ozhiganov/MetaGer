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
        <div id="settings">
            <form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('settings')) }}" method="post">
                <input type="hidden" name="fokus" value="{{ $metager->getFokus() }}">
                <input type="hidden" name="url" value="{{ url()->full() }}">
                <button type="submit">Sucheinstellungen</button>
            </form>
        </div>
	</div>
	@endif
