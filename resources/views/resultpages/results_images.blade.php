<div id="container" class="image-container">
	@foreach($metager->getResults() as $result)
		@include('layouts.image_result', ['result' => $result])
	@endforeach
</div>
@include('parts.pager')
