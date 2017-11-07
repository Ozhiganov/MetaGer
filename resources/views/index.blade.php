@extends('layouts.indexPage')

@section('title', $title )

@section('content')
	@include('modals.plugin-modal')
	@include('modals.create-focus-modal')
	<h1 id="mglogo"><a class="hidden-xs" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">MetaGer</a></h1>
		<fieldset>
			<form id="searchForm" method={{ $request }} action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/meta/meta.ger3") }}" accept-charset="UTF-8">
				<div class="search-bar">
					<div class="search-focus-selector">
						<select id="focus-select" name="focus" style="font-family: FontAwesome, sans-serif;">
							<option value="web" style="font-family: FontAwesome, sans-serif;" selected >&#xf0ac; Websuche</option>
							<option value="nachrichten" style="font-family: FontAwesome, sans-serif;" >&#xf0a1; Nachrichtensuche</option>
							<option value="wissenschaft" style="font-family: FontAwesome, sans-serif;" >&#xf15c; Wissenschaftssuche</option>
							<option value="produktsuche" style="font-family: FontAwesome, sans-serif;" >&#xf07a; Produktsuche</option>
							<option value="maps" style="font-family: FontAwesome, sans-serif;" >&#xf279; Kartensuche</option>
						</select>
					</div>
					<div class="search-add-focus js-only">
						<button type="button" id="addFocusBtn" title="@lang('index.add-focus')"><i class="fa fa-plus"></i></button>
					</div>
					<div class="search-edit-focus js-only">
						<button type="button" id="editFocusBtn" title="@lang('index.edit-focus')"><i class="fa fa-wrench"></i></button>
					</div>
					<div class="search-settings">
						<a id="settings-btn" class="mutelink btn btn-default" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "settings") }}">
							<i class="fa fa-cog" aria-hidden="true"></i>
						</a>
					</div>
					<div class="search-input-submit">
						<div class="search-input">
							<input type="text" name="eingabe" required="" autofocus="" autocomplete="{{$autocomplete}}" class="form-control" placeholder="{{ trans('index.placeholder') }}">
						</div>
						<div class="search-submit" id="submit-inputgroup">
							<button type="submit">
								<i class="fa fa-search" aria-hidden="true"></i>
							</button>
						</div>
					</div>
					<div class="search-hidden">
						<input type="hidden" name="encoding" value="utf8">
						@foreach($option_values as $option => $value)
							<input type="hidden" name={{ $option }} value={{ $value }}>
						@endforeach
						<input type="hidden" name="time" value={{ $time }}>
						@foreach ($focusPages as $fp)
							<input type="hidden" name={{ $fp }} value="on">
						@endforeach
						<input type="hidden" name="theme" value={{ $theme }}>
					</div>
				</div>
			</form>
		</fieldset>
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
	<script src="{{ elixir('js/scriptStartPage.js') }}"></script>
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
