	<div id="options">
		<div id="toggle-box">
			<div id="filter-toggle">
				@if(sizeof($metager->getAvailableParameterFilter()) > 0)
				<div class="option-toggle">
					<label class="navigation-element" for="options-toggle">
						<i class="fas fa-filter"></i> Filter&hellip;
					</label>
				</div>
				@endif
				@if($metager->getManualParameterFilterSet())
				<div id="options-reset">
					<a href="{{$metager->generateSearchLink($metager->getFokus())}}"><nobr>{{ trans('metaGer.filter.reset') }}</nobr></a>
				</div>
				@endif
			</div>
			<div id="settings">
				<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('settings', ["fokus" => $metager->getFokus(), "url" => url()->full()])) }}">
					<i class="fas fa-cogs"></i>
					@if($metager->getSavedSettingCount() > 0) <span class="badge badge-primary">{{ $metager->getSavedSettingCount() }}@endif</span>
					@lang('metaGer.settings')&hellip;
				</a>
			</div>
			@if($metager->getTotalResultCount() > 0)
			<div id="result-count">
				<nobr>~ {{$metager->getTotalResultCount()}}</nobr> {{ trans('metaGer.results') }}
			</div>
			@endif
		</div>
		@if(sizeof($metager->getAvailableParameterFilter()) > 0)
		<input type="checkbox" id="options-toggle" @if(sizeof($metager->getParameterFilter()) > 0)checked @endif />
		<div class="scrollbox">
			<div id="options-box">
				<div id="options-items">
				@foreach($metager->getAvailableParameterFilter() as $filterName => $filter)
					<div class="option-selector">
					<label for="{{$filterName}}">@lang($filter->name)</label>
					<select name="{{$filter->{'get-parameter'} }}" class="custom-select custom-select-sm" form="searchForm" onchange="this.form.submit()">
						@foreach($filter->values as $value => $text)
						@if($value === "" && Cookie::get($metager->getFokus() . "_setting_" . $filter->{"get-parameter"}) !== null)
						<option value="off" @if(empty($filter->value) || $filter->value === "off")selected @endif>{{trans($text)}}</option>
						@else
						<option value="{{$value}}" @if(!empty($filter->value) && $filter->value === $value)selected @endif>{{trans($text)}}</option>
						@endif
						@endforeach
					</select>
					</div>
				@endforeach
				</div>

			</div>
			<div class="scrollfade-right"></div>
		</div>
	@endif
	</div>
