@if(isset($ad)  && !$apiAuthorized)
	<div class="result ad">
		</span>
		<div class="result-header">
			<div class="result-headline">
				<h2 class="result-title">
					<a href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}">
						{{ $ad->titel }}
					</a>
				</h2>
				<a class="ad-label" href="{!! $ad->link !!}" target="_blank" rel="noopener">Werbung von {!! $ad->gefVon !!}</a>
			</div>
			<a class="result-link" href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}">
				{{ $ad->anzeigeLink }}
			</a>
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
