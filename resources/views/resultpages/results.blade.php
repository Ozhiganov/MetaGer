<div id="results">
	@if($mobile)
		@include('layouts.ad', ['ad' => $metager->popAd()])
	@else
		@for($i = 0; $i < 2; $i++)
			@include('layouts.ad', ['ad' => $metager->popAd()])
		@endfor
	@endif
	{{-- Create results and ongoing ads --}}
	@foreach($metager->getResults() as $result)
		@if($mobile)
			@if($result->number % 4 === 0)
				@include('layouts.ad', ['ad' => $metager->popAd()])
			@endif
		@else
			@if($result->number % 7 === 0)
				@include('layouts.ad', ['ad' => $metager->popAd()])
			@endif
		@endif
		@include('layouts.result', ['result' => $result])
	@endforeach
	@include('parts.pager')
</div>