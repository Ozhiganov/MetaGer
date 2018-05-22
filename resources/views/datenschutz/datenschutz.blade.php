@extends('layouts.subPages')

@section('title', $title )

@section('navbarFocus.datenschutz', 'class="active"')

@section('content')
	<div class="card-heavy">
		<h1>{!! trans('datenschutz.head') !!}</h1>
		<p>{!! trans('datenschutz.general.1') !!}</p>
		<p>{!! trans('datenschutz.general.3') !!}</p>
	</div>
	<div class="card-heavy">
		<h1>{!! trans('datenschutz.policy.1') !!}</h2>
		<ul class="dotlist">
			<li>{!! trans('datenschutz.policy.2') !!}</li>
			<li>{!! trans('datenschutz.policy.5') !!}</li>
			<li>{!! trans('datenschutz.policy.6') !!}</li>
			<li>{!! trans('datenschutz.policy.7') !!}</li>
			<li>{!! trans('datenschutz.policy.9') !!}</li>
			<li>{!! trans('datenschutz.policy.10') !!}</li>
			<li>{!! trans('datenschutz.policy.13') !!}</li>
			<li>{!! trans('datenschutz.policy.17') !!}</li>
			<li>{!! trans('datenschutz.policy.18') !!}</li>
			<li>{!! trans('datenschutz.policy.19') !!}</li>
		</ul>
	</div>
@endsection