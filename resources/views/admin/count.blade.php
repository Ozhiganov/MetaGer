@extends('layouts.subPages')

@section('title', $title )

@section('content')
	@php ($width = 400)
	@php ($height = 100)
	@php ($padding = 3)
	@php ($paddingArrow = 4)
	@php ($startX = 20)
	@php ($startY = $height-20)
	@php ($maxCount = intval(str_replace(".", "", $rekordCount)))
	@php ($minCount = $minCount)
	@php ($scaleFromTo = $maxCount - $minCount)
	@php ($yPerSearch = ($startY - $padding - $paddingArrow) / floatval($scaleFromTo))
	@php ($entryCount = min(sizeof($oldLogs), 30))
	@php ($daysPerEntry = sizeof($oldLogs) / floatval($entryCount))
	<div id="graph">
		<svg width="100%" height="auto" viewbox="0 0 {{$width}} {{$height}}">
			<!-- Data -->
			@php($vStep = ($width - $padding - $paddingArrow - $startX) / floatval(sizeof($oldLogs)-1))
			<polyline
				points="
				@foreach($oldLogs as $key => $value)
				{{$width - $padding - $paddingArrow - (($key-1)*$vStep)}},{{$startY - ((intval(str_replace(".", "", $value['insgesamt'])) - $minCount)  * $yPerSearch)}}
				@endforeach
				{{$startX}},{{$startY}}
				{{$width-$padding-$paddingArrow}},{{$startY}}

				"
				fill="rgba(255,127,0,.2)" stroke="rgb(255,127,0)" stroke-width=".5"
			/>
			<!-- Y-Achse -->
			<path d="m{{$startX}} {{$startY}} L{{$startX}} {{$padding}} L{{$startX-1}} {{$padding}} L{{$startX}} {{$padding-1}} L{{$startX+1}} {{$padding}} L{{$startX}} {{$padding}}z" fill="#333" stroke="#333" stroke-width=".7" />
			<!-- Skalierung Y-Achse -->
			@for($i = 0; $i < 10; $i++)
			<line x1="{{$startX-1}}" y1="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) }}" x2="{{$startX+1}}" y2="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) }}" fill="#333" stroke="#333" stroke-width=".7" />
			<line x1="{{$startX}}" y1="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) }}" x2="{{$width-$padding-$paddingArrow}}" y2="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) }}" fill="#777" stroke="#777" stroke-width=".2" />
			<text x="{{$startX - 15}}" y="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) + 2 }}" style="font-size: .3em;">
			{{ round(($maxCount - ($scaleFromTo * ($i/10.0))) / 1000.0)}}k
			</text>
			@endfor
			<!-- X-Achse -->
			<path d="m{{$startX}} {{$startY}} L{{$width-$padding}} {{$startY}} L{{$width-$padding}} {{$startY-1}} L{{$width-($padding-1)}} {{$startY}} L{{$width-$padding}} {{$startY+1}} L{{$width-$padding}} {{$startY}}z" fill="#333" stroke="#333" stroke-width=".5" />
			@for($i = 0; $i < $entryCount; $i++)
			<line x1="{{ $startX + (($width - $padding - $paddingArrow - $startX) * ($i/($entryCount-1)))}}" y1="{{$startY-1}}" x2="{{ $startX + (($width - $padding - $paddingArrow - $startX) * ($i/($entryCount-1)))}}" y2="{{$startY+1}}" fill="#333" stroke="#333" stroke-width=".7" />
			<text x="{{ $startX + (($width - $padding - $paddingArrow - $startX) * ($i/($entryCount-1)))}}" y="{{$startY + 4}}" style="font-size: .3em;" writing-mode="tb">
			{{ Carbon::now()->subDays(floor(($entryCount-$i) * $daysPerEntry))->format('d.m')}}
			</text>
			@endfor
		</svg>
	</div>
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
