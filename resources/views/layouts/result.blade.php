<div class="result" data-count="{{ $result->hash }}" data-index="{{$index}}" tabindex="0">
	<div class="result-header">
		<div class="result-headline">
			<h2 class="result-title" title="{{ $result->titel }}">
				@if( isset($result->price) && $result->price != 0)
					<span class="result-price">{!! $result->price_text !!}</span>
				@endif
				<a href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" rel="noopener">
					{!! $result->titel !!}
				</a>
			</h2>
			<a class="result-hoster" href="{{ $result->gefVonLink }}" target="{{ $metager->getNewtab() }}" rel="noopener">{{ trans('result.gefVon') . " " . $result->gefVon }}</a>
		</div>
		<div class="result-subheadline">
			<a class="result-link" href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" title="{{ $result->anzeigeLink }}" rel="noopener">
				{{ $result->anzeigeLink }}
			</a>
			@if( isset($result->partnershop) && $result->partnershop === TRUE)
				<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/partnershops") }}" target="_blank" rel="noopener">
					<span class="partnershop-info">{!! trans('result.options.4') !!}</span>
				</a>
			@endif
		</div>
	</div>
	<div class="result-body {{ (!empty($result->logo) || !empty($result->image) ? "with-image" : "")}}">
		@if( isset($result->logo) )
			<div class="result-logo">
				<a href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" rel="noopener">
					<img src="{{ $metager->getImageProxyLink($result->logo) }}" alt="" />
				</a>
			</div>
		@endif
		@if( $result->image !== "" )
			<div class="result-image">
				<a href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" rel="noopener">
					<img src="{{ $metager->getImageProxyLink($result->image) }}" alt="" />
				</a>
			</div>
		@endif
		@if( $metager->getFokus() == "nachrichten" )
			<div class="result-description">
				<span class="date">{{ isset($result->additionalInformation["date"])?date("Y-m-d H:i:s", $result->additionalInformation["date"]):"" }}</span> {{ $result->descr }}
			</div>
		@else
			<div class="result-description">
				{!! $result->descr !!}
			</div>
		@endif
	</div>
	<input type="checkbox" id="result-toggle-{{$result->hash}}" class="result-toggle" style="display: none">
	<div class="result-footer">
		<a class="result-open" href="{{ $result->link }}" target="_self" rel="noopener">
			{!! trans('result.options.7') !!}
		</a>
		<a class="result-open-newtab" href="{{ $result->link }}" target="_blank" rel="noopener">
			{!! trans('result.options.6') !!}
		</a>
		<a class="result-open-proxy" onmouseover="$(this).popover('show');" onmouseout="$(this).popover('hide');" data-toggle="popover" data-placement="auto right" data-container="body" data-content="@lang('result.proxytext')" href="{{ $result->proxyLink }}" target="{{ $metager->getNewtab() }}" rel="noopener">
			{!! trans('result.options.5') !!}
		</a>
		<label class="open-result-options navigation-element" for="result-toggle-{{$result->hash}}">
			{{ trans('result.options.more')}}
		</label>
		<label class="close-result-options navigation-element" for="result-toggle-{{$result->hash}}">
			{{ trans('result.options.less')}}
		</label>
	</div>
	<div class="result-options">
		<div class="options">
				<ul class="option-list list-unstyled small">
					<li class="js-only">
						<a href="javascript:resultSaver("{{ $result->hash }}");" class="saver">
							<nobr><i class="fa fa-floppy-o"></i> {!! trans('result.options.savetab') !!}</nobr>
						</a>
					</li>
					@if(strlen($metager->getSite()) === 0)
						<li>
							<a href="{{ $metager->generateSiteSearchLink($result->strippedHost) }}">
								<nobr>{!! trans('result.options.1') !!}</nobr>
							</a>
						</li>
					@endif
					<li>
						<a href="{{ $metager->generateRemovedHostLink($result->strippedHost) }}">
							<nobr>{!! trans('result.options.2', ['host' => $result->strippedHost]) !!}</nobr>
						</a>
					</li>
					@if( $result->strippedHost !== $result->strippedDomain )
						<li>
							<a href="{{ $metager->generateRemovedDomainLink($result->strippedDomain) }}">
								<nobr>{!! trans('result.options.3', ['domain' => $result->strippedDomain]) !!}</nobr>
							</a>
						</li>
					@endif
				</ul>
		</div>
	</div>
</div>
