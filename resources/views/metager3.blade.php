@extends('layouts.resultPage')

@section('results')
	<div id="results">
		{{-- Show all errors --}}
		@if(sizeof($errors) > 0)
			<div class="alert alert-danger">
				<ul>
					@foreach($errors as $error)
						<li>{!! $error !!}</li>
					@endforeach
				</ul>
			</div>
		@endif
		{{-- Show all warnings --}}
		@if(sizeof($warnings) > 0)
			<div class="alert alert-warning">
				<ul>
					@foreach($warnings as $warning)
						<li>{!! $warning !!}</li>
					@endforeach
				</ul>
			</div>
		@endif
		{{-- Show initial products or ads --}}
		@if($metager->hasProducts())
			@if( $metager->getFokus() !== "produktsuche" && !$apiAuthorized)
				@include('layouts.products', ['products' => $metager->getProducts()])
			@endif
		@else
			@for($i = 0; $i <= 2; $i++)
				@include('layouts.ad', ['ad' => $metager->popAd()])
			@endfor
		@endif
		{{-- Show map --}}
		@if($metager->getMaps())
			<div class="result" id="map">
				<iframe class="" src="https://maps.metager.de/metager/{{ $metager->getQ() }}" scrolling="no" tabindex="-1" style="width: 100%; height:0; border:0;"></iframe>
			</div>
		@endif
		{{-- Create results and ongoing ads --}}
		@foreach($metager->getResults() as $result)
			@if($result->number % 7 === 0)
				@include('layouts.ad', ['ad' => $metager->popAd()])
			@endif
			@include('layouts.result', ['result' => $result])
		@endforeach
		{{-- Show pagination --}}
		<nav class="mg-pager" aria-label="...">
			<div @if($metager->getPage() === 1) class="disabled" @endif>
				<a @if($metager->getPage() !== 1) href="javascript:history.back()" @endif>{{ trans('results.zurueck') }}</a>
			</div>
			<div @if($metager->nextSearchLink() === "#") class="disabled" @endif>
				<a @if($metager->nextSearchLink() !== "#") href="{{ $metager->nextSearchLink() }}" @endif>{{ trans('results.weiter') }}</a>
			</div>
		</nav>
	</div>
	@if( $metager->showQuicktips() )
		<div id="quicktips"></div>
	@endif
@endsection
