@extends('layouts.subPages')

@section('title', $title )

@section('navbarFocus.tips', 'class="active"')

@section('content')<div role="dialog">
	<h1 class="page-title">
		@if ($browser === 'Firefox' || $browser === 'Mozilla')
			{{ trans('plugin-page.head.1') }}
		@elseif ($browser === 'Chrome')
			{{ trans('plugin-page.head.2') }}
		@elseif ($browser === 'Opera')
			{{ trans('plugin-page.head.3') }}
		@elseif ($browser === 'IE')
			{{ trans('plugin-page.head.4') }}
		@elseif ($browser === 'Edge')
			{{ trans('plugin-page.head.5') }}
		@elseif ($browser === 'Safari')
			{{ trans('plugin-page.head.6') }}
		@elseif ($browser === 'Vivaldi')
			{{ trans('plugin-page.head.7') }}
		@else
			$(".seperator").addClass("hidden");
		@endif
	</h1>
	<h2 class="subheading">{{ trans('plugin-page.head.info') }}</h2>
	@if ($browser === 'Firefox' || $browser === 'Mozilla')
		<div class="card-medium">
			<h3>{!! trans('plugin-page.firefox.plugin') !!}</h3>
		</div>
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.default-search', ['browser' => $browser]) !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.firefox.1') !!}<img src="/img/Firefox.png" width="100%" /></li>
				<li>{!! trans('plugin-page.firefox.2') !!}<img src="/img/Firefox_Standard.png" width="100%" /></li>
			</ol>
		</div>
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.firefox.3', ['browser' => $browser]) !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.firefox.4') !!}</li>
				<li>{!! trans('plugin-page.firefox.5') !!}</li>
			</ol>
		</div>
		<div class="card-heavy">
			<h4>{{ trans('plugin-page.head.8') }}</h4>
			<ol>
				<li>{!! trans('plugin-page.firefox-klar.1') !!}</li>
				<li>{{ trans('plugin-page.firefox-klar.2')}}<img src="/img/FirefoxKlar-Settings.png" width="100%"/></li>
				<li>{{ trans('plugin-page.firefox-klar.3') }}<img src="/img/FirefoxKlar-addSearchengine.png" width="100%"/></li>
				<li>{{ trans('plugin-page.firefox-klar.4') }}</li>
			</ol>
		</div>
	@elseif ($browser === 'Chrome')
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.default-search') !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.chrome.1') !!}</li>
				<li>{!! trans('plugin-page.chrome.2') !!}</li>
				<li>{{ trans('plugin-page.chrome.3') }}</li>
			</ol>
		</div>
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.chrome.4', ['browser' => $browser]) !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.chrome.5') !!}</li>
				<li>{!! trans('plugin-page.chrome.6') !!}</li>
				<li>{!! trans('plugin-page.chrome.7') !!}</li>
				<li>{!! trans('plugin-page.chrome.8') !!}</li>
			</ol>
		</div>
	@elseif ($browser === 'Opera')
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.default-search') !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.opera.1') !!}</li>
				<li>{!! trans('plugin-page.opera.2') !!}</li>
				<li>{!! trans('plugin-page.opera.3') !!}</li>
				<li>{!! trans('plugin-page.opera.4') !!}</li>
				<li><small>{!! trans('plugin-page.opera.5') !!}</small>
			</ol>
		</div>
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.opera.6', ['browser' => $browser]) !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.opera.7') !!}</li>
				<li>{!! trans('plugin-page.opera.8') !!}</li>
				<li>{!! trans('plugin-page.opera.9') !!}</li>
				<li>{!! trans('plugin-page.opera.10') !!}</li>
			</ol>
		</div>
	@elseif ($browser === 'IE')
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.default-search') !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.IE.1') !!}</li>
				<li>{!! trans('plugin-page.IE.4') !!} (<i class="fa fa-cog" aria-hidden="true"></i>)</li>
				<li>{!! trans('plugin-page.IE.5') !!}</li>
				<li>{!! trans('plugin-page.IE.6') !!}</li>
				<li>{!! trans('plugin-page.IE.7') !!}</li>
			</ol>
		</div>
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.IE.8', ['browser' => $browser]) !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.IE.9') !!}</li>
				<li>{!! trans('plugin-page.IE.10') !!}</li>
				<li>{!! trans('plugin-page.IE.11') !!}</li>
			</ol>
		</div>
	@elseif ($browser === 'Edge')
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.default-search') !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.edge.1') !!}<i class="fa fa-ellipsis-h" aria-hidden="true"></i>{!! trans('plugin-page.edge.2') !!}</li>
				<li>{!! trans('plugin-page.edge.3') !!}</li>
				<li>{!! trans('plugin-page.edge.4') !!}</li>
				<li>{!! trans('plugin-page.edge.5') !!}</li>
			</ol>
		</div>
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.edge.6', ['browser' => $browser]) !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.edge.7') !!}</li>
				<li>{!! trans('plugin-page.edge.8') !!}</li>
				<li>{!! trans('plugin-page.edge.9') !!}</li>
				<li>{!! trans('plugin-page.edge.10') !!}</li>
				<li>{!! trans('plugin-page.edge.11') !!}</li>
			</ol>
		</div>
	@elseif ($browser === 'Safari')
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.default-search') !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.safari.1') !!}</li>
				<li>{!! trans('plugin-page.safari.2') !!}</li>
				<li>{!! trans('plugin-page.safari.3') !!}</li>
				<li>{!! trans('plugin-page.safari.4') !!}</li>
			</ol>
		</div>
	@elseif ($browser === 'Vivaldi')
		<div class="card-heavy">
			<h3>{!! trans('plugin-page.default-search') !!}</h3>
			<ol>
				<li>{!! trans('plugin-page.vivaldi.1') !!}</li>
				<li>{!! trans('plugin-page.vivaldi.2') !!}</li>
				<li>{!! trans('plugin-page.vivaldi.3') !!}</li>
				<li>{!! trans('plugin-page.vivaldi.4') !!}</li>
				<li>{!! trans('plugin-page.vivaldi.5') !!}</li>
				<li>{!! trans('plugin-page.vivaldi.6') !!}</li>
				<li>{!! trans('plugin-page.vivaldi.7') !!}</li>
			</ol>
		</div>
		<div class="card-heavy">
			<h4>{!! trans('plugin-page.vivaldi.8', ['browser' => $browser]) !!}</h4>
			<ol>
				<li>{!! trans('plugin-page.vivaldi.9') !!}</li>
				<li>{!! trans('plugin-page.vivaldi.10') !!}</li>
			</ol>
		</div>
	@endif

@endsection
