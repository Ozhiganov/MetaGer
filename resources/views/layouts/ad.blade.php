@if(isset($ad)  && !$apiAuthorized)
	<div class="result ad">
		<h2 class="result-title">
			<a class="title" href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}" data-hoster="{{ $ad->gefVon }}" data-count="0">
				{{ $ad->titel }}
			</a>
		</h2>
		<div class="result-header">
			<div class="result-link">
				<a href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}" data-hoster="{{ $ad->gefVon }}" data-count="0">
					{{ $ad->anzeigeLink }}
				</a>
			</div>
			<span class="result-hoster">
				<span class="ad-label">{!! trans('ad.werbung') !!}</span> {!! trans('ad.von') !!} {!! $ad->gefVon !!}
			</span>
		</div>
		<div class="result-description">
			{{ $ad->descr }}
		</div>
	</div>
@endif
