@extends('layouts.staticPages')

@section('homeIcon')
	<a class="navbar-brand visible-xs" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">
		<div class="logo">
			<h1>MetaGer</h1>
		</div>
	</a>
@endsection
