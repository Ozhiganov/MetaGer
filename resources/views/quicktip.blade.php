<!DOCTYPE html>
<html>
	<head>
		<title>{!! trans('quicktip.title') !!}</title>
		<!--<link type="text/css" rel="stylesheet" href="/css/themes/{{ app('request')->input('theme', 'default-neu') }}.css" />-->
		<link type="text/css" rel="stylesheet" href="{{ elixir('css/themes/default.css') }}" />
	</head>
	<body class="quicktips">
		@if(App::isLocale("de"))
		<div class="quicktip aufruf-winter">
						<div class="media">
							<div class="media-body">
								<h2 class="qtheader"><a href="@lang('spendenaufruf.link')" target="_blank">@lang('spendenaufruf.heading')</a></h2>
								<div>@lang('spendenaufruf.text')</div>
								<br>
								<a href="@lang('spendenaufruf.link')" class="btn btn-primary btn-block aufruf-action-btn" target="_blank">@lang('spendenaufruf.button')</a>
							</div>
						</div>
		</div>
		@endif
		@if( $spruch !== "" )
			<blockquote id="spruch">{!! $spruch !!}</blockquote>
		@endif
		@foreach( $mqs as $mq)
			<div class="quicktip">
				@if( isset($mq['details']) )
				<details>
					<summary>
				@endif
						<div class="media">
							@if( isset($mq['image']) && isset($mq['image-alt'] ))
								<div class="media-left">
									<img class="qt-icon" src="{!! $mq['image'] !!}" alt="{!! $mq['image-alt'] !!}">
								</div>
							@endif
							<div class="media-body">
								<h2 class="qtheader"><a href="{{ $mq['URL'] }}" target="_blank" rel="noopener">{{ $mq['title'] }}</a></h2>
								<div>{!! $mq['summary'] !!}</div>
							</div>
							@if( isset($mq['details']) )
								<div class="media-right">
									<span class="glyphicon glyphicon-info-sign info-details-available" aria-hidden="true"></span>
								</div>
							@endif
						</div>
				@if( isset($mq['details']) )
					</summary>
						{!! $mq['details'] !!}
				</details>
				@endif
						@if( isset($mq['gefVon']) )
							<div class="pull-right">{!! $mq['gefVon'] !!}</div>
						@endif
			</div>
		@endforeach
		<div class="quicktip">
			<details>
				<summary>
					<div class="media">
						<div class="media-body">
							<div>
								@if( Request::input('lang') === "all")
									{!! trans('results.filter.default', ['langName' => LaravelLocalization::getSupportedLocales()[LaravelLocalization::getCurrentLocale()]['native']]) !!}
								@else
									{!! trans('results.filter', ['langName' => LaravelLocalization::getSupportedLocales()[LaravelLocalization::getCurrentLocale()]['native'], 'link' => base64_decode(Request::input('unfilteredLink','')), 'filter' => Request::input('lang')]) !!}
								@endif
							</div>
						</div>
					</div>
				</summary>
			</details>
		</div>
		<script src="{{ elixir('js/quicktips.js') }}">
        </script>
	</body>
</html>
