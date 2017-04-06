@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<form id="settings-form" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" method="get">
		<h1>{!! trans('settings.head.1') !!}</h1>
		<p id="lead">{!! trans('settings.head.2') !!}</p>
		<h2>{!! trans('settings.allgemein.1') !!}</h2>
		<input type="hidden" name="focus" value="angepasst">
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
					<label class="select-label">@lang("settings.maps.label")</label>
					<select class="form-control settings-form-control" name="param_maps">
						<option value="on" selected>@lang("settings.maps.on")</option>
						<option value="off">@lang("settings.maps.off")</option>
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
					<label class="select-label">@lang('settings.autocomplete'):</label>
					<select class="form-control settings-form-control" name="param_autocomplete">
						<option value="on" selected>@lang('settings.autocomplete.on')</option>
						<option value="off">@lang('settings.autocomplete.off')</option>
					</select>
				</div>
			</div>
		</container>
		<h2>{!! trans('settings.suchmaschinen.1') !!} <small><button type="button" class="btn btn-link allUnchecker">{!! trans('settings.suchmaschinen.2') !!}</button></small></h2>
		@foreach( $foki as $fokus => $sumas )
			<div class="headingGroup {{ $fokus }}">
				<h3 class="fokus-category">
					@lang("settings.foki." . $fokus)
					<small>
						<button type="button" class="checker btn btn-link" data-type="{{ $fokus }}">{!! trans('settings.suchmaschinen.3') !!}</button>
					</small>
				</h3>
				<div class="row">
					@foreach( $sumas as $name => $data )
						<div class="col-sm-6 col-md-4 col-lg-3">
							<div class="checkbox settings-checkbox">
								<label>
									<input name="param_{{ $name }}" class="focusCheckbox" type="checkbox" />{{ $data['displayName'] }}
								</label>
								<a class="glyphicon settings-glyphicon glyphicon-link" target="_blank" rel="noopener" href="{{ $data['url'] }}"></a>
							</div>
						</div>
					@endforeach
				</div>
			</div>
		@endforeach
		<input id="unten" type="submit" class="btn btn-primary settings-btn" value="{!! trans('settings.speichern.1') !!}">
		<input type="button" class="btn btn-primary settings-btn hidden" id="save" data-href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" value="{!! trans('settings.speichern.2') !!}">
		<input id="plugin" type="submit" class="btn btn-primary settings-btn" value="{!! trans('settings.speichern.3') !!}">
		<input type="button" class="btn btn-danger settings-btn hidden" id="reset" value="{!! trans('settings.speichern.4') !!}">
	</form>
@endsection
