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
<div id="results">
	@if( $metager->getFokus() !== "produktsuche" && !$apiAuthorized)
		@include('layouts.products', ['products' => $metager->getProducts()])
	@else
		@if($mobile)
			@include('layouts.ad', ['ad' => $metager->popAd()])
		@else
			@for($i = 0; $i <= 2; $i++)
				@include('layouts.ad', ['ad' => $metager->popAd()])
			@endfor
		@endif
	@endif
	{{-- Show map --}}
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