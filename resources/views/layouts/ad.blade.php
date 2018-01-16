@if(isset($ad)  && !$apiAuthorized)
	<div class="result ad">
		<a class="ad-label" href="{!! $ad->link !!}" target="_blank" rel="noopener">Werbung von {!! $ad->gefVon !!}</a>
		</span>
		<div class="result-header">
			<h2 class="result-title">
				<a href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}">
					{{ $ad->titel }}
				</a>
			</h2>
			<a class="result-link" href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}">
				{{ $ad->anzeigeLink }}
			</a>
		</div>
		<div class="result-body">
			<div class="result-description">
				{{ $ad->descr }}
			</div>
		</div>
	</div>
@endif
