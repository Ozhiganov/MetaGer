@extends('layouts.subPages')

@section('title', $title )

@section('navbarFocus.donate', 'class="dropdown active"')

@section('content')
	<link type="text/css" rel="stylesheet" href="{{ mix('/css/beitritt.css') }}" />	
	<script src="{{ mix('js/scriptJoinPage.js') }}"></script>
<form id="donation-form">
	<div class="card-heavy">
		<h1>{{ trans('beitritt.heading.1') }}</h1>
		<h3>{{ trans('beitritt.ansprache.1') }}</h3>
		<h3>{{ trans('beitritt.ansprache.2') }}</h3>
		<h3>{{ trans('beitritt.ansprache.3') }}</h3>
		<h3>{{ trans('beitritt.ansprache.4') }}</h3>
		<h3>{!! trans('beitritt.ansprache.5') !!}</h3>
		<div class="beitritt-inputs">
			<div>
				<label for="name">{{ trans('beitritt.beitritt.1') }}</label>
				<input type="text" class="form-control beitritt-input" name="name" placeholder="{{trans('beitritt.placeholder.1')}}" required>
			</div>
			<div>
				<label for="firma">{{ trans('beitritt.beitritt.2') }}</label>
				<input type="text" class="form-control beitritt-input" name="firma" placeholder="{{trans('beitritt.placeholder.2')}}">
			</div>
			<div>
				<label for="funktion">{{ trans('beitritt.beitritt.3') }}</label>
				<input type="text" class="form-control beitritt-input" name="funktion" placeholder="{{trans('beitritt.placeholder.3')}}">
			</div>
			<div>
				<label for="adresse">{{ trans('beitritt.beitritt.4') }}</label>
				<input type="text" class="form-control beitritt-input" name="adresse" placeholder="{{trans('beitritt.placeholder.4')}}" required>
			</div>
			<div>
				<label for="email">{{ trans('beitritt.beitritt.5') }}</label>
				<input type="email" class="form-control beitritt-input" name="email" placeholder="">
			</div>
			<div>
				<label for="homepage">{{ trans('beitritt.beitritt.6') }}</label>
				<input type="text" class="form-control beitritt-input" name="homepage" placeholder="http://">
			</div>
			<div>
				<label for="telefon">{{ trans('beitritt.beitritt.7') }}</label>
				<input type="text" class="form-control beitritt-input" name="telefon" placeholder="{{trans('beitritt.placeholder.7')}}">
			</div>
		</div>
		<div>
			<p>{{ trans('beitritt.beitritt.8') }}</p>
			<input type="text" class="form-control beitritt-input" name="betrag" required>
			<p> {{ trans('beitritt.beitritt.9') }}</p>
		</div>
		<div>
			<p>{{ trans('beitritt.beitritt.10') }}</p>
			<p>{{ trans('beitritt.beitritt.11') }}</p>
		</div>
		<div>
			<input type="radio" name="veröffentlichung" checked> {{ trans('beitritt.beitritt.12') }}
			<input type="radio" name="veröffentlichung"> {{ trans('beitritt.beitritt.13') }}
		</div>
		<div>
			<div>
				<label for="ort">{{ trans('beitritt.beitritt.14') }}</label>
				<input type="text" class="form-control beitritt-input" id="ort" placeholder="">
			</div>
			<br>
			<p class="signature">{{ trans('beitritt.unterschrift') }}</p>
		</div>
	</div>
	<div class="card-heavy">
		<div class="newpage noprint"></div>
		<h1>{{ trans('beitritt.abbuchung.2') }}</h1>
		<p>{{ trans('beitritt.abbuchung.3') }}</p>
		<div class="beitritt-inputs">
			<div>
				<label for="kontoname">{{ trans('beitritt.abbuchung.4') }}</label>
				<input type="text" class="form-control beitritt-input" name="kontoname" placeholder="">
			</div>
			<div>
				<label for="bankverbindung">{{ trans('beitritt.abbuchung.5') }}</label>
				<input type="text" class="form-control beitritt-input" name="bankverbindung" placeholder="">
			</div>
			<div>
				<label for="iban">{{ trans('beitritt.abbuchung.6') }}</label>
				<input type="text" class="form-control beitritt-input" name="iban" maxlength="22" placeholder="">
			</div>
			<div>
				<label for="bic">{{ trans('beitritt.abbuchung.7') }}</label>
				<input type="text" class="form-control beitritt-input" name="bic" placeholder="">
			</div>
		</div>
		<div>
			<label for="ort2">{{ trans('beitritt.abbuchung.8') }}</label>
			<input type="text" class="form-control beitritt-input" id="ort2" placeholder="">
			<br>
			<p class="signature">{{ trans('beitritt.unterschrift') }}</p>
		</div>
		<hr>
		<div class="beitritt-formular-info">
			<p>{{ trans('beitritt.anweisung.1') }}</p>
			<ul class="dotlist">
				<li>{{ trans('beitritt.anweisung.2') }}</li>
				<li>{{ trans('beitritt.anweisung.3') }}</li>
				<li>{{ trans('beitritt.anweisung.4') }}</li>
			</ul>
			<p>{{ trans('beitritt.anweisung.5') }}</p>
			<p>{{ trans('beitritt.anweisung.6') }}</p>
		</div>
	</div>
</form>
	<button type="button" class="noprint js-only btn btn-lg btn-primary" onclick="window.print();">{{ trans('beitritt.anweisung.7') }}</button>
@endsection
