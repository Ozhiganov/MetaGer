@extends('layouts.staticPages', ['page' => 'startpage'])

@section('title', $title )

@section('content')
	<h1 id="startpage-logo">
		<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">MetaGer</a>
	</h1>
	@include('parts.searchbar', ['class' => 'startpage-searchbar'])
	<div id="plugin-btn-div">
		<a id="plugin-btn" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/plugin") }}" title="{{ trans('index.plugin-title') }}"><i class="fa fa-plug" aria-hidden="true"></i> {{ trans('index.plugin') }}</a>
	</div>
	<a id="scroll-helper" href="#about-us">
		<i class="fas fa-angle-double-down"></i>
	</a>
	<script src="{{ mix('js/scriptStartPage.js') }}" defer></script>
	<script src="{{ mix('js/searchbar.js') }}" defer></script>
@endsection

@section('additional-content')
	<div id="about-us">
		<div>
			<h2>{!! trans('index.slogan.title') !!}</h2>
			<p>{!! trans('index.slogan.1') !!}</p>
			<p>{!! trans('index.slogan.2') !!}</p>
		</div>
	</div>
	<div id="sponsors">
		<h2>{{ trans('index.sponsors.head') }}</h2>
		<ul class="startpage">
			@foreach($sponsors as $link)
			<li class="sponsor">
				<a href="{{ $link->link }}" target="_blank" rel="noopener"><p>{{ $link->linktext }}</p> <i class="fa fa-external-link-alt"></i></a>
			</li>
			@endforeach
		</ul>
	</div>
@endsection
