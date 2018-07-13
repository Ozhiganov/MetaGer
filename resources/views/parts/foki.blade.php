<div id="web" @if($metager->getFokus() === "web")class="active"@endif>
	<a href="@if($metager->getFokus() === "web")#@else{!!$metager->generateSearchLink('web')!!}@endif" target="_self" tabindex="2">@lang('index.foki.web')</a>
</div>
<div id="nachrichten" @if($metager->getFokus() === "nachrichten")class="active"@endif>
	<a href="@if($metager->getFokus() === "nachrichten")#@else{!!$metager->generateSearchLink('nachrichten')!!}@endif" target="_self" tabindex="3">@lang('index.foki.nachrichten')</a>
</div>
<div id="wissenschaft" @if($metager->getFokus() === "wissenschaft")class="active"@endif>
	<a href="@if($metager->getFokus() === "wissenschaft")#@else{!!$metager->generateSearchLink('wissenschaft')!!}@endif" target="_self" tabindex="4">@lang('index.foki.wissenschaft')</a>
</div>
<div id="produkte" @if($metager->getFokus() === "produktsuche")class="active"@endif>
	<a href="@if($metager->getFokus() === "produktsuche")#@else{!!$metager->generateSearchLink('produktsuche')!!}@endif" target="_self" tabindex="5">@lang('index.foki.produkte')</a>
</div>
<div id="maps">
	<a href="https://maps.metager.de/map/{{ $metager->getQ() }}/9.7380161,52.37119740000003,12" target="_self" tabindex="6">@lang('index.foki.maps')</a>
</div>
<div class="search-option-frame hide-tooltip-on-resultpage" data-tooltip="@lang("index.focus-creator.head")">
	<label class="navigation-element" for="show-create-focus">
		<i class="fa fa-sliders"></i>
	</label>
</div>
