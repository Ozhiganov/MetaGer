@extends('layouts.staticPages', ['page' => 'startpage'])

@section('title', $title )

@section('content')
	@include('modals.plugin-modal')
	<h1 id="startpage-logo">
		<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">MetaGer</a>
	</h1>
	@include('parts.searchbar', ['class' => 'startpage-searchbar'])
	<div id="show-plugin-modal">
		<label for="plugin-modal-checkbox" class="btn btn-default open-plugin-modal" title="{{ trans('index.plugin.open-modal.title') }}"><i class="fa fa-plug" aria-hidden="true"></i> {{ trans('index.plugin.open-modal') }}</label>
	</div>
	<script src="{{ mix('js/scriptStartPage.js') }}"></script>
	<script src="{{ mix('js/searchbar.js') }}"></script>
@endsection

@section('optionalContent')
	<div id="more-information">
		<div id="about-us">
			<h2>{!! trans('index.slogan.title') !!}</h2>
			<p>{!! trans('index.slogan.1') !!}</p>
			<p>{!! trans('index.slogan.2') !!}</p>
		</div>
		<div id="sponsors">
			<h2>{{ trans('index.sponsors.head.2') }}</h2>
			<ul class="startpage">
				<li class="sponsor">
					<a href="https://www.semtrix.de/seo-agentur/" target="_blank" rel="noopener"><p>@lang('index.sponsors.woxikon')</p> <i class="fa fa-external-link"></i></a>
				</li>
				<li class="sponsor">
					<a href="https://b-ceed.de/weihnachtsfeiern-ideen/" target="_blank" rel="noopener"><p>@lang('index.sponsors.seo')</p> <i class="fa fa-external-link"></i></a>
				</li>
				<li class="sponsor">
					<a href="https://www.stern.de/vergleich/kredit/" target="_blank" rel="noopener"><p>@lang('index.sponsors.gutscheine')</p> <i class="fa fa-external-link"></i></a>
				</li>
			</ul>
		</div>
	</div>
@endsection
