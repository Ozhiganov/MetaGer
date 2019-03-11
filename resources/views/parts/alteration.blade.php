{{-- Show all infos --}}
@if(!empty($metager->alteredQuery) && !empty($metager->alterationOverrideQuery))
	<div class="alteration">
		<div>@lang('results.query.alteration', ['link' => $metager->generateEingabeLink($metager->alteredQuery), 'alteration' => $metager->alteredQuery ])</div>
		<div class="original">@lang('results.query.alteration.original', ['link' => $metager->generateEingabeLink($metager->alterationOverrideQuery), 'original' => $metager->getEingabe()])</div>
	</div>
@endif
