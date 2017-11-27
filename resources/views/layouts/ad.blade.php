@if(isset($ad)  && !$apiAuthorized)
	<div class="result ad row">
		<div class="result-information col-sm-10">
			<p class="title">
				<a class="title" href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}" data-hoster="{{ $ad->gefVon }}" data-count="0">
					{{ $ad->titel }}
				</a>
			</p>
			<p class="link">
				<a href="{{ $ad->link }}" target="{{ $metager->getNewtab() }}" data-hoster="{{ $ad->gefVon }}" data-count="0">
					{{ $ad->anzeigeLink }}
				</a>
				<span class="hoster">
					<span class="ad-label">{!! trans('ad.werbung') !!}</span> {!! trans('ad.von') !!} {!! $ad->gefVon !!}
				</span>
			</p>
			<p class="description">
				{{ $ad->descr }}
			</p>
		</div>
	</div>
@endif
