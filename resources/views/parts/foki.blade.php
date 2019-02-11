@foreach($metager->getSumaFile()->foki as $name => $fokus)
	<div id="{{$name}}" @if($metager->getFokus() === $name)class="active"@endif>
		<a href="@if($metager->getFokus() === $name)#@else{!!$metager->generateSearchLink($name)!!}@endif" target="_self" tabindex="0">@lang($fokus->{"display-name"})</a>
	</div>
@endforeach
@if(sizeof($metager->getAvailableParameterFilter()) > 0)
<div class="option-toggle">
	<label class="navigation-element" for="options-toggle">
		<i class="fas fa-filter"></i>
	</label>
</div>
@endif
