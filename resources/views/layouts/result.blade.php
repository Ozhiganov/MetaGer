<div class="result" data-count="{{ $result->number }}">
	<div class="result-header">
		<div class="result-headline">
			<h2 class="result-title">
				@if(stripos($result->anzeigeLink, "twitter.com") !== false)
					<i class="fa fa-twitter" aria-hidden="true"></i>
				@endif
				@if( isset($result->price) && $result->price != 0)
					<span class="result-price">{!! $result->price_text !!}</span>
				@endif
				<a href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" rel="noopener">
					{!! $result->titel !!}
				</a>
			</h2>
			<a class="result-hoster" href="{{ $result->gefVonLink }}" target="{{ $metager->getNewtab() }}" rel="noopener">{{ $result->gefVon }}</a>
		</div>
		<div class="result-subheadline">
			<a class="result-link" href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" rel="noopener">
				{{ $result->anzeigeLink }}
			</a>
			@if( isset($result->partnershop) && $result->partnershop === TRUE)
				<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/partnershops") }}" target="_blank" rel="noopener">
					<span class="partnershop-info">{!! trans('result.options.4') !!}</span>
				</a>
			@endif
		</div>
	</div>
	<div class="result-body">
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
					<img src="{{ $metager->getImageProxyLink($result->image) }}" align="left" width="120px" height="60px" alt="" />
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
		<label class="open-result-options navigation-element" for="result-toggle-{{$result->number}}">
			MEHR
		</label>
	</div>
	<div class="result-options">
		<input type="checkbox" id="result-toggle-{{$result->number}}" class="result-toggle" style="display: none">
		<div class="options">
				<div>
				<ul class="option-list list-unstyled small">
					<li class="js-only">
						<a href="javascript:resultSaver({{ $result->number }});" class="saver">
							<i class="fa fa-floppy-o"></i> {!! trans('result.options.savetab') !!}
						</a>
					</li>
					@if(strlen($metager->getSite()) === 0)
						<li>
							<a href="{{ $metager->generateSiteSearchLink($result->strippedHost) }}">
								{!! trans('result.options.1') !!}
							</a>
						</li>
					@endif
					<li>
						<a href="{{ $metager->generateRemovedHostLink($result->strippedHost) }}">
							{!! trans('result.options.2', ['host' => $result->strippedHost]) !!}
						</a>
					</li>
					@if( $result->strippedHost !== $result->strippedDomain )
						<li>
							<a href="{{ $metager->generateRemovedDomainLink($result->strippedDomain) }}">
								{!! trans('result.options.3', ['domain' => $result->strippedDomain]) !!}
							</a>
						</li>
					@endif
				</ul>
		</div>
	</div>
</div>
