<?xml version='1.0' encoding='utf-8'?>
@php ($width = 400)
@php ($height = 100)
@php ($padding = 3)
@php ($paddingArrow = 4)
@php ($startX = 20)
@php ($startY = $height-20)
@php ($entryCount = sizeof($data["hourly"]))
@php ($drawWidth = $width - $padding - $paddingArrow - $startX)
@php ($widthPerElement = $drawWidth / (sizeof($data["hourly"]) * 2))
@php ($heightPerSearch = ($startY - $padding - $paddingArrow) / $data["max"])
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="auto" viewBox="0 0 400 100">
    <!-- Y-Achse -->
	<path d="m{{$startX}} {{$startY}} L{{$startX}} {{$padding}} L{{$startX-1}} {{$padding}} L{{$startX}} {{$padding-1}} L{{$startX+1}} {{$padding}} L{{$startX}} {{$padding}}z" fill="#333" stroke="#333" stroke-width=".7" />
    <text x="{{ $startX + 4}}" y="{{ $padding + $paddingArrow - 2 }}" style="font-size: .3em;" fill="rgba(0,0,0,.5)">
        X(Abfragen)
    </text>
    <!-- Skalierung Y-Achse -->
	@for($i = 0; $i < 10; $i++)
	<line x1="{{$startX-1}}" y1="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) }}" x2="{{$startX+1}}" y2="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) }}" fill="#333" stroke="#333" stroke-width=".7" />
	<line x1="{{$startX}}" y1="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) }}" x2="{{$width-$padding-$paddingArrow}}" y2="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) }}" fill="#777" stroke="#777" stroke-width=".2" />
	<text x="{{$startX - 15}}" y="{{ ($padding+$paddingArrow) + (($startY-($padding+$paddingArrow)) * ($i/10.0)) + 2 }}" style="font-size: .3em;">
		@php ($value = round($data["max"] - $i * ($data["max"] / 10.0)))
        @if($value >= 1000)
        @php($value = round($value / 100.0) / 10.0 . "k" )
        @endif
        {{ $value }}
	</text>
	@endfor
    @for($i = 0; $i < $entryCount; $i++)
	<rect x="{{ $startX + ($widthPerElement * $i * 2) + $widthPerElement}}" y="{{ $startY - ($heightPerSearch * $data["hourly"][$i]) }}" width="{{ $widthPerElement }}" height="{{ ($heightPerSearch * $data["hourly"][$i]) }}" style="fill:rgb(255,127,0); stroke-width:0;" />
    <text x="{{ $startX + ($widthPerElement * 1.4) + (($width - $padding - $paddingArrow - $startX  - ($widthPerElement * 2)) * ($i/($entryCount-1)))}}" y="{{$startY + 6}}" style="font-size: .3em;" >
	{{ number_format($i, 0, ",", ".") }}
    </text>
	@endfor
    <!-- X-Achse -->
	<path d="m{{$startX}} {{$startY}} L{{$width-$padding}} {{$startY}} L{{$width-$padding}} {{$startY-1}} L{{$width-($padding-1)}} {{$startY}} L{{$width-$padding}} {{$startY+1}} L{{$width-$padding}} {{$startY}}z" fill="#333" stroke="#333" stroke-width=".5" />
    <text x="{{ $width - 4}}" y="{{ $startY + 3}}" style="font-size: .3em;" fill="rgba(0,0,0,.5)" writing-mode="tb">
        Y(h)
    </text>
</svg>
