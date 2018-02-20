@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<h1 class="page-title">{{ trans('widget.head') }}</h1>
	<div class="card-heavy">
		<p>{{ trans('widget.body.1') }}</p>
		<p id="widgetLinks" class="btn-group"><a class="btn btn-default mutelink" href="websearch/">{{ trans('widget.body.2') }}</a><a class="btn btn-default mutelink" href="sitesearch/">{{ trans('widget.body.3') }}</a></p>
		<p>{{ trans('widget.body.4') }}</p>
	</div>
@endsection
