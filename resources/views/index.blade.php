@extends('layouts.indexPage')

@section('title', $title )

@section('content')
	@include('modals.create-focus-modal')
	@include('modals.plugin-modal')
	<h1 id="mglogo">
		<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">MetaGer</a>
	</h1>
	@include('parts.searchbar', ['class' => 'startpage-searchbar'])
	<script type="text/javascript" src="{{ elixir('js/scriptStartPage.js') }}"></script>
	<script type="text/javascript" src="{{ elixir('js/searchbar.js') }}"></script>
@endsection

@section('optionalContent')
	<div id="more-information">
		<div id="about-us">
			<h2>Besser&nbsp;suchen, schneller&nbsp;finden</h2>
			<p>MetaGer ist die einzige Suchmaschine, die nicht profitgetrieben, sondern gemeinnützig arbeitet. Wir speichern keine persönlichen Daten und bevorzugen keine Ergebnisse für Geld.</p>
			<p>Mit MetaGer bewahren Sie einen neutralen Blick auf’s Web!</p>
		</div>
		<div id="sponsors">
			<h2>{{ trans('index.sponsors.head.2') }}</h2>
			<ul class="startpage">
				<li class="sponsor">
					<a href="http://www.tagesgeld.jetzt" target="_blank" rel="noopener"><p>@lang('index.sponsors.woxikon')</p> <i class="fa fa-external-link"></i></a>
				</li>
				<li class="sponsor">
					<a href="http://www.gutschein-magazin.de/" target="_blank" rel="noopener"><p>@lang('index.sponsors.seo')</p> <i class="fa fa-external-link"></i></a>
				</li>
				<li class="sponsor">
					<a href="https://www.semtrix.de/suchmaschinenoptimierung/" target="_blank" rel="noopener"><p>@lang('index.sponsors.gutscheine')</p> <i class="fa fa-external-link"></i></a>
				</li>
			</ul>
		</div>
	</div>
@endsection
