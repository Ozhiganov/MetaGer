@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<style>
		form div.input-group-addon button {
			padding: 9px;
		}
	</style>
	<h1 class="page-title">{{ trans('asso.head.1') }}</h1>
	<div class="card-heavy">
		<p>{{ trans('asso.1.1') }} <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), '/') }}" target="_blank">{{ trans('asso.1.2') }}</a>.</p>
		
		<form>
			<div class="input-group">
				<input type="text" class="form-control" placeholder="Zu assoziierender Begriff" name="q" required autofocus/>
				<div class="input-group-addon"><button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button></div>
			</div>
		</form>
	</div>
@endsection
