<html>
	<head>
		<title>{!! trans('quicktip.title') !!}</title>
		<link type="text/css" rel="stylesheet" href="/css/themes/{{ app('request')->input('theme', 'default') }}.css" />
	</head>
	<body class="quicktips">
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
								<div>{!! $mq['descr'] !!}</div>
							</div>
							@if( isset($mq['details']) )
								<div class="media-right">
									<span class="glyphicon glyphicon-info-sign info-details-available" aria-hidden="true"></span>
								</div>
							@endif
						</div>
				@if( isset($mq['details']) )
					</summary>
					@if( isset($mq['details']) )
						{!! $mq['details'] !!}
					@endif
				</details>
				@endif
						@if( isset($mq['gefVon']) )
							<div class="pull-right">{!! $mq['gefVon'] !!}</div>
						@endif
			</div>
		@endforeach
	</body>
</html>
