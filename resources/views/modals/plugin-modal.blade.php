<input type="checkbox" id="plugin-modal-checkbox" class="hidden">
<div class="metager-modal" id="plugin-modal" tab-index="-1" role="dialog">
		<div class="metager-modal-dialog ">
			<div class="metager-modal-content">
				<div class="metager-modal-header">
					<label type="button" for="plugin-modal-checkbox" class="close">
						<span aria-hidden="true">&times;</span>
</label>
					<h4>
						@if ($browser === 'Firefox' || $browser === 'Mozilla')
							{{ trans('index.plugin.head.1') }}
						@elseif ($browser === 'Chrome')
							{{ trans('index.plugin.head.2') }}
						@elseif ($browser === 'Opera')
							{{ trans('index.plugin.head.3') }}
						@elseif ($browser === 'IE')
							{{ trans('index.plugin.head.4') }}
						@elseif ($browser === 'Edge')
							{{ trans('index.plugin.head.5') }}
						@elseif ($browser === 'Safari')
							{{ trans('index.plugin.head.6') }}
						@elseif ($browser === 'Vivaldi')
							{{ trans('index.plugin.head.6') }}
						@else
							$(".seperator").addClass("hidden");
						@endif
					</h4>
					<p class="text-muted">{{ trans('index.plugin.head.info') }}</p>
				</div>
				<div class="modal-body">
					@if ($browser === 'Firefox' || $browser === 'Mozilla')
						<h4>{!! trans('index.plugin.firefox.plugin') !!}</h4>
						<ol>
							<li>{{ trans('index.plugin.firefox.1') }}<img src="/img/Firefox.png" width="100%" /></li>
							<li>{{ trans('index.plugin.firefox.2') }}<img src="/img/Firefox_Standard.png" width="100%" /></li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.firefox.3', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.firefox.4') !!}</li>
							<li>{!! trans('index.plugin.firefox.5') !!}</li>
						</ol>
						<hr>
						<h4>{{ trans('index.plugin.head.8') }}</h4>
						<ol>
							<li>{!! trans('index.plugin.firefox-klar.1') !!}</li>
							<li>{{ trans('index.plugin.firefox-klar.2')}}<img src="/img/FirefoxKlar-Settings.png" width="100%"/></li>
							<li>{{ trans('index.plugin.firefox-klar.3') }}<img src="/img/FirefoxKlar-addSearchengine.png" width="100%"/></li>
							<li>{{ trans('index.plugin.firefox-klar.4') }}</li>
						</ol>
					@elseif ($browser === 'Chrome')
						<ol>
							<li>{!! trans('index.plugin.chrome.1') !!}</li>
							<li>{!! trans('index.plugin.chrome.2') !!}</li>
							<li>{{ trans('index.plugin.chrome.3') }}</li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.chrome.4', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.chrome.5') !!}</li>
							<li>{!! trans('index.plugin.chrome.6') !!}</li>
							<li>{!! trans('index.plugin.chrome.7') !!}</li>
							<li>{!! trans('index.plugin.chrome.8') !!}</li>
						</ol>
					@elseif ($browser === 'Opera')
						<ol>
							<li>{!! trans('index.plugin.opera.1') !!}</li>
							<li>{!! trans('index.plugin.opera.2') !!}</li>
							<li>{!! trans('index.plugin.opera.3') !!}</li>
							<li>{!! trans('index.plugin.opera.4') !!}</li>
							<li><small>{!! trans('index.plugin.opera.5') !!}</small>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.opera.6', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.opera.7') !!}</li>
							<li>{!! trans('index.plugin.opera.8') !!}</li>
							<li>{!! trans('index.plugin.opera.9') !!}</li>
							<li>{!! trans('index.plugin.opera.10') !!}</li>
						</ol>
					@elseif ($browser === 'IE')
						<ol>
							<li>{!! trans('index.plugin.IE.1') !!}</li>
							<li>{!! trans('index.plugin.IE.4') !!} (<i class="fa fa-cog" aria-hidden="true"></i>)</li>
							<li>{!! trans('index.plugin.IE.5') !!}</li>
							<li>{!! trans('index.plugin.IE.6') !!}</li>
							<li>{!! trans('index.plugin.IE.7') !!}</li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.IE.8', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.IE.9') !!}</li>
							<li>{!! trans('index.plugin.IE.10') !!}</li>
							<li>{!! trans('index.plugin.IE.11') !!}</li>
						</ol>
					@elseif ($browser === 'Edge')
						<ol>
							<li>{!! trans('index.plugin.edge.1') !!}<i class="fa fa-ellipsis-h" aria-hidden="true"></i>{!! trans('index.plugin.edge.2') !!}</li>
							<li>{!! trans('index.plugin.edge.3') !!}</li>
							<li>{!! trans('index.plugin.edge.4') !!}</li>
							<li>{!! trans('index.plugin.edge.5') !!}</li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.edge.6', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.edge.7') !!}</li>
							<li>{!! trans('index.plugin.edge.8') !!}</li>
							<li>{!! trans('index.plugin.edge.9') !!}</li>
							<li>{!! trans('index.plugin.edge.10') !!}</li>
							<li>{!! trans('index.plugin.edge.11') !!}</li>
						</ol>
					@elseif ($browser === 'Safari')
						<ol>
							<li>{!! trans('index.plugin.safari.1') !!}</li>
							<li>{!! trans('index.plugin.safari.2') !!}</li>
							<li>{!! trans('index.plugin.safari.3') !!}</li>
							<li>{!! trans('index.plugin.safari.4') !!}</li>
						</ol>
					@elseif ($browser === 'Vivaldi')
						<ol>
							<li>{!! trans('index.plugin.vivaldi.1') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.2') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.3') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.4') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.5') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.6') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.7') !!}</li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.vivaldi.8', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.vivaldi.9') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.10') !!}</li>
						</ol>
					@endif
					<hr>
					<p>@lang('index.plugin.faq.1')<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/faq#mg-plugin") }}">@lang('index.plugin.faq.2')</a></p>
				</div>
			</div>
		</div>
	</div>
