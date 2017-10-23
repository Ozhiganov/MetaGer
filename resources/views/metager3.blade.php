@extends('layouts.resultPage')

@section('results')
	@if(sizeof($errors) > 0)
		<div class="alert alert-danger">
			<ul>
				@foreach($errors as $error)
					<li>{!! $error !!}</li>
				@endforeach
			</ul>
		</div>
	@endif
	@if(sizeof($warnings) > 0)
		<div class="alert alert-warning">
			<ul>
				@foreach($warnings as $warning)
					<li>{!! $warning !!}</li>
				@endforeach
			</ul>
		</div>
	@endif
	@if($metager->showQuicktips())
		<div class="col-xs-12 col-md-8 resultContainer">
	@else
		<div class="col-xs-12 col-md-12 resultContainer">
	@endif
		@if($metager->hasProducts())
    		@if( $metager->getFokus() !== "produktsuche" && !$apiAuthorized)
    		    @include('layouts.products', ['products' => $metager->getProducts()])
    		@endif

		@else
			@for($i = 0; $i <= 2; $i++)
				@include('layouts.ad', ['ad' => $metager->popAd()])
			@endfor
		@endif
		@if($metager->getMaps())
		<div class="result row" id="map">
			<div class="resultInformation col-xs-12 col-sm-11">
				<iframe class="" src="https://maps.metager.de/metager/{{ $metager->getQ() }}" scrolling="no" tabindex="-1" style="width: 100%; height:0; border:0;"></iframe>
			</div>
		</div>
		@endif
		@foreach($metager->getResults() as $result)
			@if($result->number % 7 === 0)
				@include('layouts.ad', ['ad' => $metager->popAd()])
			@endif
			@include('layouts.result', ['result' => $result])
		@endforeach
		<nav class="mg-pager" aria-label="...">
			<div @if($metager->getPage() === 1) class="disabled" @endif><a href="@if($metager->getPage() === 1) # @else javascript:history.back() @endif">{{ trans('results.zurueck') }}</a></div>
			<div @if($metager->nextSearchLink() === "#") class="disabled" @endif><a href="{{ $metager->nextSearchLink() }}">{{ trans('results.weiter') }}</a></div>
		</nav>
	</div>
	@if( $metager->showQuicktips() )
		<div class="col-md-4 hidden-xs hidden-sm" id="quicktips"></div>
	@endif
@endsection
