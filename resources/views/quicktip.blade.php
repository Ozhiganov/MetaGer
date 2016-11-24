<html>
	<head>
		<title>{!! trans('quicktip.title') !!}</title>
		<link type="text/css" rel="stylesheet" href="/css/themes/{{ app('request')->input('theme', 'default') }}.css" />
	</head>
	<body class="quicktips">
		<div class="quicktip aufruf-winter">
						<div class="media">
							<div class="media-body">
								<h2 class="qtheader"><a href="/spendenaufruf/" target="_blank" rel="noopener">Winter ist die Zeit der Großzügigkeit</a></h2>
								<div contenteditable>Helfen Sie mit, MetaGer weiterzuentwickeln und am Laufen zu halten. Ihre Spende sichert unseren Fortbestand:</div>
								<a href="/spendenaufruf/" class="btn btn-primary btn-block aufruf-action-btn">Zum Spendenaufruf&hellip;</a>
							</div>
						</div>
		</div>
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
	</body>
</html>
