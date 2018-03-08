@include('parts.errors')
@include('parts.warnings')
<div id="container" class="image-container">
	@foreach($metager->getResults() as $result)
		<div class="item image-item">
			<div class="img">
				<a href="{{ $result->link }}" target="{{ $metager->getNewtab() }}"><img src="{{ $metager->getImageProxyLink($result->image) }}" width="150px" alt="" rel="noopener"/></a>
				<span class="label label-default hostlabel">{{ strip_tags($result->gefVon) }}</span>
			</div>
		</div>
	@endforeach
</div>
@include('parts.pager')
