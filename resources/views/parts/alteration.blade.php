{{-- Show all infos --}}
@if(!empty($metager->alteredQuery) && !empty($metager->alterationOverrideQuery))
	<div class="alteration">
		<div>Enthält Ergebnisse für <a href="{{ $metager->generateEingabeLink($metager->alteredQuery) }}">{{ $metager->alteredQuery }} <i class="fa fa-search"></i></a></div>
		<div class="original">Stattdessen nach <a href="{{ $metager->generateEingabeLink($metager->alterationOverrideQuery) }}">{{$metager->getEingabe() }} <i class="fa fa-search"></i></a> suchen</div>
	</div>
@endif
