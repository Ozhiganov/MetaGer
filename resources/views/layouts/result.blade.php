<div class="result" data-count="{{ $result->number }}">
	<h2 class="result-title">
		<a href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" data-hoster="{{ strip_tags($result->gefVon) }}" data-count="{{ $result->number }}"  rel="noopener">
			{!! $result->titel !!}
		</a>
	</h2>
	<div class="result-header">
		<div class="result-link">
			<a href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" data-hoster="{{ strip_tags($result->gefVon) }}" data-count="{{ $result->number }}" rel="noopener">
				{{ $result->anzeigeLink }}
			</a>
		</div>
		<div class="result-options">
			<a class="dropdown-opener" href="javascript:void(0);">
				<i class="fa fa-caret-down option-opener-icon" aria-hidden="true"></i>
			</a>
			<div class="dropdown-content option-content">
				<ul class="option-list list-unstyled small">
					<li class="option-title">
						<i class="fa fa-cog"></i> {!! trans('result.options.headline') !!}
					</li>
					<hr>
					<li class="js-only">
						<a href="javascript:resultSaver({{ $result->number }});" class="saver" data-counter="{{ $result->number }}">
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
		<span class="result-hoster">
			von {!! $result->gefVon !!}
		</span>
		@if( isset($result->partnershop) && $result->partnershop === TRUE )
			<span class="partnershop-info">
				<img src="/img/boosticon.png" height="13" alt="">
				<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/partnershops") }}" target="_blank" rel="noopener">{!! trans('result.options.4') !!}</a>
			</span>
		@endif
		<span class="result-proxy">
			<a onmouseover="$(this).popover('show');" onmouseout="$(this).popover('hide');" data-toggle="popover" data-placement="auto right" data-container="body" data-content="@lang('result.proxytext')" href="{{ $result->proxyLink }}" target="{{ $metager->getNewtab() }}" rel="noopener">
				<img src="/img/proxyicon.png" alt="" />
				<span>{!! trans('result.options.5') !!}</span>
			</a>
		</span>
	</div>
	<div class="result-body">
		@if( isset($result->logo) )
			<div class="result-logo">
				<a href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" data-hoster="{{ strip_tags($result->gefVon) }}" data-count="{{ $result->number }}">
					<img src="{{ $metager->getImageProxyLink($result->logo) }}" alt="" />
				</a>
			</div>
		@endif
		@if( $result->image !== "" )
			<div class="result-image result-description">
				<a href="{{ $result->link }}" target="{{ $metager->getNewtab() }}" data-hoster="{{ strip_tags($result->gefVon) }}" data-count="{{ $result->number }}"  rel="noopener">
					<img src="{{ $metager->getImageProxyLink($result->image) }}" align="left" width="120px" height="60px" alt="" />
				</a>
				{!! $result->descr !!}
			</div>
		@else
			@if( $metager->getFokus() == "nachrichten" )
				<div class="result-description">
					<span class="date">{{ isset($result->additionalInformation["date"])?date("Y-m-d H:i:s", $result->additionalInformation["date"]):"" }}</span> {{ $result->descr }}
				</div>
			@else
				<div class="result-description">
					{{ $result->descr }}
				</div>
			@endif
		@endif
	</div>
</div>
