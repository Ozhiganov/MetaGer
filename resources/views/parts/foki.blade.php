<div id="web" @if($metager->getFokus() === "web")class="active"@endif>
	<a href="@if($metager->getFokus() === "web")#@else{!!$metager->generateSearchLink('web')!!}@endif" target="_self">@lang('index.foki.web')</a>
</div>
<div id="nachrichten" @if($metager->getFokus() === "nachrichten")class="active"@endif>
	<a href="@if($metager->getFokus() === "nachrichten")#@else{!!$metager->generateSearchLink('nachrichten')!!}@endif" target="_self">@lang('index.foki.nachrichten')</a>
</div>
<div id="wissenschaft" @if($metager->getFokus() === "wissenschaft")class="active"@endif>
	<a href="@if($metager->getFokus() === "wissenschaft")#@else{!!$metager->generateSearchLink('wissenschaft')!!}@endif" target="_self">@lang('index.foki.wissenschaft')</a>
</div>
<div id="produkte" @if($metager->getFokus() === "produktsuche")class="active"@endif>
	<a href="@if($metager->getFokus() === "produktsuche")#@else{!!$metager->generateSearchLink('produktsuche')!!}@endif" target="_self">@lang('index.foki.produkte')</a>
</div>
<div id="maps">
	<a href="https://maps.metager.de/map/{{ $metager->getQ() }}/9.7380161,52.37119740000003,12" target="_self">@lang('index.foki.maps')</a>
</div>
<div class="search-option-frame">
					<div class="searchbar-options-arrow"></div>
					<div class="search-button-container">
						<div class="search-add-focus js-only">
							<button type="button" id="addFocusBtn">
								<i class="fa fa-plus"></i>
							</button>
							<div class="searchbar-tooltip">
								<div class="searchbar-tooltip-arrow"></div>
								<div class="searchbar-tooltip-content">
									<p>{{{ trans('index.tooltips.add-focus') }}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
