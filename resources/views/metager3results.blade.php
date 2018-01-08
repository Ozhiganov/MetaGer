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
	@if(!$apiAuthorized && !$metager->validated && LaravelLocalization::getCurrentLocale() == "de" && strpos(url()->current(), '/beitritt') === false && strpos(url()->current(), '/spendenaufruf') === false)
		@include('parts.spendenaufruf')
	@endif
	{{-- Show initial products or a
	@if($metager->hasProducts())
		@if( $metager->getFokus() !== "produktsuche" && !$apiAuthorized)
			@include('layouts.products', ['products' => $metager->getProducts()])
		@endif
	@else
		@for($i = 0; $i <= 1; $i++)
			@include('layouts.ad', ['ad' => $metager->popAd()])
		@endfor
	@endif
	{{-- Show map --}}
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