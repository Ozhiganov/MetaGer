@extends('layouts.indexPage')

@section('title', $title )

@section('content')
	@include('modals.create-focus-modal')
	@include('modals.plugin-modal')
	<h1 id="mglogo"><a class="hidden-xs" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">MetaGer</a></h1>
	@include('parts.searchbar', ['class' => 'startpage-searchbar'])
	<ul class="list-inline searchform-bonus hidden">
		<li id="plug"
		@unless ($browser === 'Firefox' || $browser === 'Mozilla' || $browser === 'Chrome' || $browser === 'Opera' || $browser === 'IE' || $browser === 'Edge' || $browser === 'Safari' || $browser === 'Vivaldi')
			class="hidden"
		@endunless>
		<a href="#" data-toggle="modal" data-target="#plugin-modal" class="btn btn-default mutelink" title="{{ trans('index.plugintitle') }}"><i class="fa fa-plug" aria-hidden="true"></i> {{ trans('index.plugin') }}</a></li>
		@if (LaravelLocalization::getCurrentLocale() == "de")
		<li>
			<a href="https://suma-ev.de/presse/Werbefreie-Suche-mit-MetaGer.html" target="_blank" class="btn btn-default mutelink">
				Werbefreie Suche mit MetaGer
			</a>
		</li>
		@endif
	</ul>
	<script type="text/javascript" src="{{ elixir('js/scriptStartPage.js') }}"></script>
	<script type="text/javascript" src="{{ elixir('js/searchbar.js') }}"></script>
@endsection

@section('optionalContent')
	<section id="moreInformation" class="hidden-xs hidden">
		<h1 class="hidden">{{ trans('index.sponsors.head.1') }}</h1>
		<div class="row">
			<div id="sponsors" class="col-sm-6">
				<h2>{{ trans('index.sponsors.head.2') }}</h2>
				<ul class="startpage">
					<li>{!! trans('index.sponsors.woxikon') !!}</li>
					<li>{!! trans('index.sponsors.gutscheine') !!}</li>
					<li>{!! trans('index.sponsors.kredite') !!}</li>
				</ul>
			</div>
			<div id="about-us" class="col-sm-6">
				<h2>
					<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "about") }}">{{ trans('index.about.title') }}</a>
				</h2>
				<ul class="startpage">
					<li>{!! trans('index.about.1.1') !!}</li>
					<li>{!! trans('index.about.2.1') !!}</li>
					<li>@lang('index.about.3.1')</li>
				</ul>
			</div>
		</div>
	</section>
@endsection
