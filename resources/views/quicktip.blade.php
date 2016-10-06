<html>
	<head>
		<title>{!! trans('quicktip.title') !!}</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="/css/style.css" />
		@if( app('request')->input('theme', 'none') != "none" )
		<link type="text/css" rel="stylesheet" href="/css/themes/{{ app('request')->input('theme', 'none') }}.css" />
		@endif
	</head>
	<body>
		@if( $spruch !== "" )
			<blockquote id="spruch">{!! $spruch !!}</blockquote>
		@endif
		@foreach( $mqs as $mq)
			<div class="quicktip">
				<b class="qtheader"><a href="{{ $mq['URL'] }}" target="_blank">{{ $mq['title'] }}</a></b><br>
				<div>{!! $mq['descr'] !!}</div>
				@if( isset($mq['gefVon']) )
					<div class="pull-right">{!! $mq['gefVon'] !!}</div>
				@endif
			</div>
		@endforeach
	</body>
</html>
