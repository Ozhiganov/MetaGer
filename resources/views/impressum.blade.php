@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<div id="impressum">
		<h1 class="page-title">{!! trans('impressum.title') !!}</h1>
		<div class="card-heavy">
			<h2 class="wrap">{!! trans('impressum.headline.1') !!}</h2>
			<p>{!! trans('impressum.info.1') !!}</p>
			<address>{!! trans('impressum.info.2') !!}</address>
			<address>{!! trans('impressum.info.3') !!}</address>
		</div>
		<div class="card-heavy">
			<p>{!! trans('impressum.info.4') !!}</p>
			<p>{!! trans('impressum.info.6') !!}</p>
			<p>{!! trans('impressum.info.8') !!}</p>
		</div>
		<div class="card-heavy">
			<h2>{!! trans('impressum.info.9') !!}</h2>
			<p>{!! trans('impressum.info.10') !!}</p>
		</div>
	</div>
@endsection
