@extends('layouts.staticPages')

@section('homeIcon')
	<div id="subpage-logo">
		<a class="navbar-brand" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">
			<h1>MetaGer</h1>
		</a>
	</div>
@endsection
