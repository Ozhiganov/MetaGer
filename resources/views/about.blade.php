@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<div id="about">
		<h1 class="page-title">{{ trans('about.head.1') }}</h1>
		<div class="card-heavy">
			<h2>{{ trans('about.head.3') }}</h2>
			<p class="lead">{!! trans('about.3.0') !!}</p>
			<ul class="dotlist">
				<li>{!! trans('about.3.1') !!}</li>
				<li>{!! trans('about.3.2') !!}</li>
				<li>{!! trans('about.3.3') !!}</li>
				<li>{!! trans('about.3.4') !!}</li>
				<li>{!! trans('about.3.5') !!}</li>
				<li>{!! trans('about.3.6') !!}</li>
				<li>{!! trans('about.3.7') !!}</li>
			</ul>
		</div>
		<div class="card-heavy">
			<h2>{{ trans('about.head.2') }}</h2>
			<ul class="dotlist">
				<li>{!! trans('about.list.1') !!}</li>
				<li>{!! trans('about.list.2') !!}</li>
				<li>{!! trans('about.list.3') !!}</li>
				<li>{!! trans('about.list.4') !!}</li>
				<li>{!! trans('about.list.5') !!}</li>
				<li>{!! trans('about.list.6') !!}</li>
				<li>{!! trans('about.list.7') !!}</li>
			</ul>
		</div>
		<div class="card-heavy">
		<h2>{{ trans('about.head.4') }}</h2>
			<ul class="dotlist">
				<li><p>{!! trans('spende.about.3') !!}</p></li>
				<li><p>{!! trans('spende.about.4') !!}</p></li>
				<li><p>{!! trans('spende.about.5') !!}</p></li>
			</ul>
		</div>
	</div>
@endsection
