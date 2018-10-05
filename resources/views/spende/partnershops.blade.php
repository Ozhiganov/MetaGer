@extends('layouts.subPages')

@section('title', $title )

@section('navbarFocus.datenschutz', 'class="active"')

@section('content')
	<h1>{{ trans('partnershops.heading') }}</h1>
	<p>{{ trans('partnershops.paragraph.1') }}</p>
	<p>{!! trans('partnershops.paragraph.2') !!}</p>
	<p>{!! trans('partnershops.paragraph.3') !!}</p>
@endsection
