@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<h1>{{ trans('zitatsuche.title') }}</h1>
	<p>{{ trans('zitatsuche.subtitle') }}</p>
	<form id="searchForm" class="form-inline" accept-charset="UTF-8">
		<div class="form-group">
			<label class="sr-only" for="q">{{ trans('zitatsuche.search-label') }}</label>
			<div class="input-group">
				<input type="text" class="form-control" id="q" name="q" placeholder="Suchworte" value="{{ $q }}">
				<div class="input-group-addon"><button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button></div>
			</div>
		</div>
	</form>
	@if($q !== "")
	<hr />
	<h3>{{ trans('zitatsuche.results-label') }} "{{$q}}":</h3>
	@foreach($results as $author => $quotes)
	<b><a href="{{ action('MetaGerSearch@search', ['eingabe' => $author, 'focus' => 'web', 'encoding' => 'utf8', 'lang' => 'all']) }}" target="_blank">{{$author}}</a>:</b>
	<ul class="list-unstyled">
		@foreach($quotes as $quote)
		<li><quote>"{{ $quote }}"</quote></li>
		@endforeach
	</ul>
	@endforeach
	@endif
@endsection
