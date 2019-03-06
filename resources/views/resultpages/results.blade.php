<div id="results">
	@if($mobile)
		@include('layouts.ad', ['ad' => $metager->popAd()])
	@else
		@for($i = 0; $i < 2; $i++)
			@include('layouts.ad', ['ad' => $metager->popAd()])
		@endfor
	@endif
	{{-- Create results and ongoing ads --}}
	@foreach($metager->getResults() as $index => $result)
		@if($mobile)
			@if($index % 4 === 0)
				@include('layouts.ad', ['ad' => $metager->popAd()])
			@endif
		@else
			@if($index % 7 === 0)
				@include('layouts.ad', ['ad' => $metager->popAd()])
			@endif
		@endif
		@include('layouts.result', ['result' => $result])
	@endforeach
	@include('parts.pager')
</div>
