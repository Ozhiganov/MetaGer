@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<h1>{{ trans('languages.header') }}</h1>
	<p>{{ trans('languages.beschreibung.1') }}</p>
	<p>{{ trans('languages.beschreibung.2') }}</p>
	<div class="progress">
		<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="{{ round(100 * (($langTexts[$to]+$new) / count($sum))) }}" aria-valuemin="0" aria-valuemax="100" style="width: {{ round(100 * (($langTexts[$to]+$new) / count($sum))) }}%">
			{{ trans('languages.progress', ['uebersetzteTexte'=> ($langTexts[$to]+$new), 'textCount'=>count($sum), 'percentage'=>round(100 * (($langTexts[$to]+$new) / count($sum)))]) }}
		</div>
	</div>
	<h1>{{$filename}}</h1>
	<form id="submit" method="POST">
		<input type="hidden" name="filename" value="{{$filename}}" />
	</form>
	<table class="table">
		<thead>
			<tr>
				<th>#ID</th>
				<th>{{$to}}</th>
				@foreach($langs as $lang => $value)
					<th>{{$lang}}</th>
				@endforeach
			</tr>
		</thead>
		<tbody>
			@foreach($texts as $name => $langValues)
				@if($langValues === "")
					<tr>
						<td class="name language-name">{{preg_replace("/(\s*).*#(.*)$/si", "$1$2", $name)}}</td>
						<td></td>
						<td></td>
					</tr>
				@else
					<tr>
						<td class="name language-name">{{preg_replace("/(\s*).*#(.*)$/si", "$1$2", $name)}}</td>
						<td>
							@if(isset($langValues[$to]))
								<textarea class="language-text-area" type="text" rows="1" cols="50" form="submit" name="{{ base64_encode($name) }}">{{$langValues[$to]}}</textarea>
							@else
								<textarea class="language-text-area" rows="1" cols="50" form="submit" name="{{base64_encode("_new_" . $name)}}"></textarea>
							@endif
						</td>
						@foreach($langs as $lang => $value)
							<td>{!! $langValues[$lang] or "" !!}</td>
						@endforeach
					</tr>
				@endif
			@endforeach
		</tbody>
	</table>
	<p>{{ trans('languages.hinweis.1') }}</p>
	<p>{!! trans('languages.hinweis.2') !!}</p>
	<p>{!! trans('languages.hinweis.3') !!}</p>
	<p>{!! trans('languages.email') !!}</p>
	<p><input type="email" name="email" form="submit" value="{{$email}}"/></p>
	<button class="btn btn-success" type="submit" form="submit">Daten übermitteln</button>
	<script type="text/javascript" src="{{ mix('js/lib.js') }}"></script>
	<script type="text/javascript" src="{{ mix('js/editLanguage.js') }}"></script>
@endsection
