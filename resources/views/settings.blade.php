@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" method="get">
		<h1>{{ trans('settings.head.1') }}</h1>
		<p id="lead">{{ trans('settings.head.2') }} <a href="#unten">{{ trans('settings.head.3') }}</a> {{ trans('settings.head.4') }}</p>
		<h2>{{ trans('settings.allgemein.1') }}</h2>
		<input type="hidden" name="focus" value="angepasst">
		<div class="checkbox">
			<label><input type="checkbox" name="param_sprueche">{{ trans('settings.allgemein.2') }}</label>
		</div>
		<div class="checkbox">
			<label><input type="checkbox" name="param_tab">{{ trans('settings.allgemein.3') }}</label>
		</div>
		<label class="select-label">{{ trans('settings.allgemein.4') }}:</label>
		<select class="form-control" name="param_lang">
			<option value="all" @if(App::isLocale('de')) selected @endif >{{ trans('settings.allgemein.5') }}</option>
			<option value="de">{{ trans('settings.allgemein.6') }}</option>
			<option value="en" @if(App::isLocale('en')) selected @endif>{{ trans('settings.allgemein.6_1') }}</option></select>
		<label class="select-label">{{ trans('settings.allgemein.7') }}:</label>
		<select class="form-control" name="param_resultCount">
			<option value="10">10</option>
			<option value="20" selected>20</option>
			<option value="50">50</option>
			<option value="100">100</option>
			<option value="0">{{ trans('settings.allgemein.8') }}</option></select>
		<label class="select-label">{{ trans('settings.allgemein.9') }}:</label>
		<select class="form-control" name="param_time">
			<option value="1000" selected>1 {{ trans('settings.allgemein.10') }}</option>
			<option value="2000">2 {{ trans('settings.allgemein.11') }}</option>
			<option value="5000">5 {{ trans('settings.allgemein.11') }}</option>
			<option value="10000">10 {{ trans('settings.allgemein.11') }}</option>
			<option value="20000">20 {{ trans('settings.allgemein.11') }}</option></select>
		<h2>{{ trans('settings.suchmaschinen.1') }} <small><a class="allUnchecker">{{ trans('settings.suchmaschinen.17') }}</a></small></h2>
		@foreach( $foki as $fokus => $sumas )
			<div class="headingGroup {{ $fokus }}">
				<h3>
					{{ ucfirst($fokus) }}
					<small>
						<a class="checker" data-type="{{ $fokus }}">{{ trans('settings.suchmaschinen.3') }}</a>
					</small>
				</h3>
				<div class="row">
					@foreach( $sumas as $name => $data )
						<div class="col-sm-6 col-md-4 col-lg-3">
							<div class="checkbox">
								<label>
									<input name="param_{{ $name }}" class="focusCheckbox" type="checkbox" />{{ $data['displayName'] }}
								</label>
								<a class="glyphicon glyphicon-link" target="_blank" href="{{ $data['url'] }}"></a>
							</div>
						</div>
					@endforeach
				</div>
			</div>
		@endforeach
		<input id="unten" type="submit" class="btn btn-primary" value="{{ trans('settings.speichern.1') }}">
		<input type="button" class="btn btn-primary hidden" id="save" data-href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" value="{{ trans('settings.speichern.2') }}">
		<input id="plugin" type="submit" class="btn btn-primary" value="{{ trans('settings.speichern.3') }}">
		<input type="button" class="btn btn-danger hidden" id="reset" value="{{ trans('settings.speichern.4') }}">
	</form>
@endsection