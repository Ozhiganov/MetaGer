@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<p>{{ exec("uptime") }}</p>
	@if( isset($rekordDate) && isset($rekordTagSameTime) && isset($rekordCount) )
		<p>Rekord am {{ $rekordDate }} zur gleichen Zeit <span class="text-info">{{ $rekordTagSameTime }}</span> - insgesamt <span class="text-danger">{{ $rekordCount }}</span></p>
	@endif
	<p>Mittelwert der letzten {{ sizeof($oldLogs) }} Tage: {{ $oldLogs[sizeof($oldLogs)]['median'] }}</p>
	<table class="table table-striped">
		<caption>
			<form method="POST" style="display: flex; align-items: center;">
				<div class="form-group" style="max-width: 100px; margin-right: 8px;">
					<label for="days">Tage</label>
					<input class="form-control" type="number" id="days" name="days" value="{{$days}}" />
				</div>
				<div class="form-group" style="max-width: 100px; margin-right: 8px;">
					<label for="interface">Sprache</label>
					<select class="form-control" name="interface" id="interface">
						<option value="all" {{ (Request::input('interface', 'all') == "all" ? "selected" : "")}}>Alle</option>
						<option value="de" {{ (Request::input('interface', 'all') == "de" ? "selected" : "")}}>DE</option>
						<option value="en" {{ (Request::input('interface', 'all') == "en" ? "selected" : "")}}>EN</option>
						<option value="es" {{ (Request::input('interface', 'all') == "es" ? "selected" : "")}}>ES</option>
					</select>
				</div>
				<div id="refresh" style="margin-top: 11px; margin-right: 8px;">
					<button type="submit" class="btn btn-sm btn-default">Aktualisieren</button>
				</div>
				<div id="export" style="margin-top: 11px;">
					<button type="submit" name="out" value="csv" class="btn btn-sm btn-default">Als CSV exportieren</button>
				</div>
			</form>
		</caption>
		<tr>
			<th>Datum</th>
			<th>Suchanfragen zur gleichen Zeit</th>
			<th>Suchanfragen insgesamt</th>
			<th>Mittelwert (bis zum jeweiligen Tag zurück)</th>
		</tr>
		@if( isset($today) )
			<tr>
				<td>{{ Carbon::now()->format('D, d.m.Y') }}</td>
				<td>{{ $today }}</td>
				<td>???</td>
				<td>???</td>
			</tr>
		@endif
		@foreach($oldLogs as $key => $value)
			<tr>
				<td>{{ Carbon::now()->subDays($key)->format('D, d.m.Y') }}</td>
				<td>{{ $value['sameTime'] }}</td>
				<td>{{ $value['insgesamt'] }}</td>
				<td>{{ $value['median'] }}</td>
			</tr>
		@endforeach
	</table>

@endsection
