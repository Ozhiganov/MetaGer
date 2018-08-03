@extends('layouts.subPages')

@section('title', $title )

@section('navbarFocus.tips', 'class="active"')

@section('content')
	<h1 class="page-title">{!! trans('tips.title') !!}</h1>
	<div class="card-heavy">
		<ol>
			@foreach( $tips as $tip )
				<li>{!! $tip !!}</li>
			@endforeach
		</ol>
	</div>
@endsection
