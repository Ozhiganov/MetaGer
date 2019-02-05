@include('parts.errors')
@include('parts.warnings')
<div id="container" class="image-container">
	@foreach($metager->getResults() as $result)
		<div class="image">
			<a href="{{ $result->link }}" target="_blank">
				<div title="{{ $result->titel }}">
					<img src="{{ $metager->getImageProxyLink($result->image)}}" alt="{{ $result->titel }}"/>
					<div>{{ $result->gefVon }}</div>
				</div>
			</a>
		</div>
	@endforeach
</div>
@include('parts.pager')
