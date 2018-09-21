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
		
		<form method="post">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="Zu assoziierender Begriff" @if(isset($keywords)) value="{{$keywords}}" @endif name="q" required autofocus/>
				<div class="input-group-addon"><button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button></div>
			</div>
		</form>
	</div>
	@if(isset($words))
	<div class="card-heavy">
		<div class="table-responsive">
			<table class="table">
				<caption>Assoziationen für "{{ $keywords }}"</caption>
				<thead>
					<tr>
						<th>#</th>
						<th>Assoziation</th>
						<th>Relevanz</th>
					</tr>
				</thead>
				<tbody>
					@php $i = 1; @endphp
					@foreach($words as $key => $value)
					<tr>
						<td>{{ $i }}</td>
						<td>{{ $key }}</td>
						<td>{{ round(($value / $wordCount) * 100, 2) }}%</td>
						@php $i++; @endphp
					</tr>
					@endforeach
				</tbody>
			</table>
		</div>
	</div>
	@endif
@endsection
