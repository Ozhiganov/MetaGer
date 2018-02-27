@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<div class="card-heavy">
		<h1>{!! trans('kontakt.headline.1') !!}</h1>
		<h2>{!! trans('kontakt.form.1') !!}</h2>
		<p>{!! trans('kontakt.form.2') !!}</p>
		@if(isset($formerrors))
			@foreach($formerrors->errors()->all() as $errormessage)
			<div class="alert alert-danger" role="alert">{{$errormessage}}</div>
			@endforeach
		@endif
		<form class="contact" name="contact" method="post" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/kontakt") }}">
			{{ csrf_field() }}
			<div class="form-group kontakt-form-group">
				<input class="form-control" name="name" placeholder="{!!trans('kontakt.form.name')!!}" type="text" required @if(isset($formerrors) && Request::has('name'))value="{{Request::input('name')}}"@endif>
			</div>
			<div class="form-group kontakt-form-group">
				<input class="form-control" name="email" placeholder="{!! trans('kontakt.form.5') !!}" type="email" required @if(isset($formerrors) && Request::has('email'))value="{{Request::input('email')}}"@endif>
			</div>
			<div class="form-group kontakt-form-group">
				<input class="form-control" name="subject" placeholder="{!! trans('kontakt.form.7') !!}" type="text" required @if(isset($formerrors) && Request::has('subject'))value="{{Request::input('subject')}}"@endif>
			</div>
				<div class="form-group kontakt-form-group">
					@if(isset($url) && $url !== "")
					<label for="message">Wenn MetaGer bestimmte Webseiten nicht angezeigt hat, von denen Sie wissen, dass es sie gibt: Bitte nennen Sie deren Adresse/n (http:// ...???...). Wir werden das detailliert untersuchen.</label>
					@endif
					<textarea class="form-control" id="message" name="message" placeholder="{!! trans('kontakt.form.6') !!}" required>@if(isset($formerrors) && Request::has('message')){{Request::input('message')}}@endif</textarea>
				</div>
				<div class="form-group kontakt-form-group">
				<button title="" data-original-title="" class="btn btn-default encrypt-btn" type="submit">{!! trans('kontakt.form.8') !!}</button>
			</div>
		</form>
	</div>
	<div class="card-heavy">
		<h2>{!! trans('kontakt.mail.1') !!}</h2>
		<p>{!! trans('kontakt.mail.2') !!}</p>
		<p>{!! trans('kontakt.mail.3') !!}</p>
		<textarea id="pubkey" style="width:50%" rows="8" readonly>@include('kontakt/pgp')</textarea>
	</div>
	<div class="card-heavy">
		<h2>{!! trans('kontakt.letter.1') !!}</h2>
		<p>{!! trans('kontakt.letter.2') !!}</p>
		<address>{!! trans('kontakt.letter.3') !!}</address>
	</div>
	<script type="text/javascript" src="{{ elixir('js/lib.js') }}"></script>
@endsection
