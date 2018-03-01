@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<form id="settings-form" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" method="get">
		<h1>{!! trans('settings.head.1') !!}</h1>
		<p id="lead">{!! trans('settings.head.2') !!}</p>
		<h2>{!! trans('settings.allgemein.1') !!}</h2>
		<container>
			<div class="row">
				<div class="col-sm-6 col-md-4 col-lg-3">
					<label class="select-label">@lang("settings.quotes.label")</label>
					<select class="form-control settings-form-control" name="param_sprueche">
						<option value="on" selected>@lang("settings.quotes.on")</option>
						<option value="off">@lang("settings.quotes.off")</option>
					</select>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-3">
					<label class="select-label">@lang("settings.tab.label")</label>
					<select class="form-control settings-form-control" name="param_newtab">
						<option value="on" selected>@lang("settings.tab.new")</option>
						<option value="off">@lang("settings.tab.same")</option>
					</select>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-3">
					<label class="select-label">{!! trans('settings.language.label') !!}</label>
					<select class="form-control settings-form-control" name="param_lang">
						<option value="all" @if(App::isLocale('de')) selected @endif >{!! trans('settings.language.all') !!}</option>
						<option value="de">{!! trans('settings.language.de') !!}</option>
						<option value="en" @if(App::isLocale('en')) selected @endif>{!! trans('settings.language.en') !!}</option>
					</select>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-3">
					<label class="select-label">{{ trans('settings.request') }}:</label>
					<select class="form-control settings-form-control" name="request">
						<option value="GET" selected>GET</option>
						<option value="POST">POST</option>
					</select>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-3">
					<label class="select-label">@lang('settings.autocomplete.label'):</label>
					<select class="form-control settings-form-control" name="param_autocomplete">
						<option value="on" selected>@lang('settings.autocomplete.on')</option>
						<option value="off">@lang('settings.autocomplete.off')</option>
					</select>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-3">
					<label class="select-label">@lang('settings.key.label'):</label>
					<input type="text" class="form-control settings-form-control" name="param_key" placeholder="@lang('settings.key.placeholder')">
				</div>
			</div>
		</container>
		<div id="settingsButtons">
			<a id="settings-abort-btn" class="btn btn-danger mutelink settings-btn" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">@lang('settings.abort') <i class="fa fa-times" aria-hidden="true"></i></a>
			<input id="unten" class="btn btn-primary settings-btn" type="submit" value="{!! trans('settings.speichern.1') !!}">
			<input id="save" class="btn btn-primary settings-btn hidden" type="button" data-href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" value="{!! trans('settings.speichern.2') !!}">
			<input id="plugin" class="btn btn-primary settings-btn" type="submit" value="{!! trans('settings.speichern.3') !!}">
		</div>
	</form>
	<script src="{{ mix('js/settings.js') }}"></script>
@endsection
