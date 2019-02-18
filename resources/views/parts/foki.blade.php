@foreach($metager->getSumaFile()->foki as $name => $fokus)
	<div id="{{$name}}" @if($metager->getFokus() === $name)class="active"@endif>
		<a href="@if($metager->getFokus() === $name)#@else{!!$metager->generateSearchLink($name)!!}@endif" target="_self" tabindex="0">@lang($fokus->{"display-name"})</a>
	</div>
@endforeach
