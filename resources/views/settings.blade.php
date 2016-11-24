@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<form id="settings-form" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" method="get">
		<h1>{!! trans('settings.head.1') !!}</h1>
		<p id="lead">{!! trans('settings.head.2') !!}</p>
		<h2>{!! trans('settings.allgemein.1') !!}</h2>
		<input type="hidden" name="focus" value="angepasst">
		<label class="select-label">@lang("settings.allgemein.2.1")</label>
		<select class="form-control settings-form-control" name="param_sprueche">
			<option value="on" selected>@lang("settings.allgemein.2.2")</option>
			<option value="off">@lang("settings.allgemein.2.3")</option>
		</select><label class="select-label">@lang("settings.allgemein.3.1")</label>
		<select class="form-control settings-form-control" name="param_maps">
			<option value="on" selected>@lang("settings.allgemein.3.2")</option>
			<option value="off">@lang("settings.allgemein.3.3")</option>
		</select><label class="select-label">@lang("settings.allgemein.4.1")</label>
		<select class="form-control settings-form-control" name="param_newtab">
			<option value="on">@lang("settings.allgemein.4.2")</option>
			<option value="off" selected>@lang("settings.allgemein.4.3")</option>
		</select>
		<label class="select-label">{!! trans('settings.allgemein.5') !!}</label>
		<select class="form-control settings-form-control" name="param_lang">
			<option value="all" @if(App::isLocale('de')) selected @endif >{!! trans('settings.allgemein.6') !!}</option>
			<option value="de">{!! trans('settings.allgemein.7') !!}</option>
			<option value="en" @if(App::isLocale('en')) selected @endif>{!! trans('settings.allgemein.8') !!}</option>
		</select>
		<label class="select-label">{!! trans('settings.allgemein.9') !!}</label>
		<select class="form-control settings-form-control" name="param_resultCount">
			<option value="10">10</option>
			<option value="20" selected>20</option>
			<option value="50">50</option>
			<option value="100">100</option>
			<option value="0">{!! trans('settings.allgemein.10') !!}</option>
		</select>
		<label class="select-label">{!! trans('settings.zeit.1') !!}:</label>
		<select class="form-control settings-form-control" name="param_time">
			<option value="1000" selected>{!! trans('settings.zeit.2') !!}</option>
			<option value="2000">{!! trans('settings.zeit.3') !!}</option>
			<option value="5000">{!! trans('settings.zeit.4') !!}</option>
			<option value="10000">{!! trans('settings.zeit.5') !!}</option>
			<option value="20000">{!! trans('settings.zeit.6') !!}</option></select>
		<label class="select-label">{{ trans('settings.request') }}:</label>
		<select class="form-control settings-form-control" name="request">
			<option value="GET" selected>GET</option>
			<option value="POST">POST</option>
		</select>
		<h2>{!! trans('settings.suchmaschinen.1') !!} <small><button type="button" class="btn btn-link allUnchecker">{!! trans('settings.suchmaschinen.2') !!}</button></small></h2>
		@foreach( $foki as $fokus => $sumas )
			<div class="headingGroup {{ $fokus }}">
				<h3 class="fokus-category">
					{{ ucfirst($fokus) }}
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
