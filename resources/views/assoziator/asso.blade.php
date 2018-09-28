@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<style>
		form div.input-group-addon button {
			padding: 9px;
		}

		.reasso {
			color: rgb(0, 102, 204);
		}
		.reasso:hover {
			color: red;
		}

		td.association {
			display: flex;
		}
		.asso-search-link {
			margin-right: 10px;
		}
	</style>
	<h1 class="page-title">{{ trans('asso.head.1') }}</h1>
	<div class="card-heavy">
		<p>{{ trans('asso.1.1') }} <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), '/datenschutz') }}" target="_blank">{{ trans('asso.1.2') }}</a>.</p>
		
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
						<td class="association">
							<a class="asso-search-link" href="{{ action('MetaGerSearch@search', ['eingabe' => $key]) }}" title="{{ trans('asso.searchasso.title') }}"><i class="fa fa-search" aria-hidden="true"></i></a>
							<form method="POST">
								<button name="q" value="{{ $key }}" class="reasso" type="submit" title="{{ trans('asso.reasso.title') }}">{{ $key }}</button>
							</form>
						</td>
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
