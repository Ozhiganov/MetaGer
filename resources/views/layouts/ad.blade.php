@if(isset($ad)  && !$apiAuthorized)
	<div class="result ad" tabindex="0">
		</span>
		<div class="result-header">
			<div class="result-headline">
				<h2 class="result-title">
					<a href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}">
						{{ $ad->titel }}
					</a>
				</h2>
				<a class="ad-label" href="{{ $ad->gefVonLink }}" target="_blank" rel="noopener">{!! $ad->gefVon !!}</a>
			</div>
			<div class="result-subheadline">
				<a class="result-link" href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}">
					<span class="advertisement-mark">Anzeige</span>
					<span>{{ $ad->anzeigeLink }}</span>
				</a>
			</div>
		</div>
		<div class="result-body">
			<div class="result-description">
				{{ $ad->descr }}
			</div>
		</div>
		<div class="result-footer">
		<a class="result-open" href="{{ $ad->link }}" target="_self" rel="noopener">
			ÖFFNEN
		</a>
		<a class="result-open-newtab" href="{{ $ad->link }}" target="_blank" rel="noopener">
			IN NEUEM TAB
		</a>
	</div>
	</div>
@endif
