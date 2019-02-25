@extends('layouts.subPages')

@section('title', $title )

@section('navbarFocus.donate', 'class="dropdown active"')

@section('content')
	<div id="donation">
		<div class="section">
			<h1>{!! trans('spende.headline.1') !!}</h1>
			<h2>{!! trans('spende.headline.2') !!}</h2>
			<p><i class="fa fa-info fa-fw fa-lg" aria-hidden="true"></i>{!! trans('spende.bankinfo.3') !!}</p>
		</div>
		<div class="two-col">
			<div class="col-left">
				<div class="section">
					<h3 id="lastschrift">{!! trans('spende.lastschrift.1') !!}</h3>
					<p>{!! trans('spende.lastschrift.2') !!}</p>
					<form id="donate" method="POST">
						<input type="hidden" name="dt" value="{{ md5(date('Y') . date('m') . date('d')) }}">
						<div class="form-group donation-form-group">
							<label for="Name">*{!! trans('spende.lastschrift.3') !!}</label>
							<input type="text" class="form-control" id="Name" required="" name="Name" placeholder="{!! trans('spende.lastschrift.3.placeholder') !!}" @if(isset($data['name'])) value="{{$data['name']}}" @endif />
						</div>
						<div class="form-group donation-form-group">
							<label for="email">{!! trans('spende.lastschrift.4') !!}</label>
							<input type="email" class="form-control" id="email" name="email" placeholder="Email" @if(isset($data['email'])) value="{{$data['email']}}" @endif>
						</div>
						<div class="form-group donation-form-group">
							<label for="iban">*{!! trans('spende.lastschrift.6') !!}</label>
							<input type="text" class="form-control" id="iban" required="" name="iban" placeholder="IBAN" @if(isset($data['iban'])) value="{{$data['iban']}}" @endif>
						</div>
						<div class="form-group donation-form-group">
							<label for="bic">{!! trans('spende.lastschrift.7') !!}</label>
							<input type="text" class="form-control" id="bic" name="bic" placeholder="BIC" @if(isset($data['bic'])) value="{{$data['bic']}}" @endif>
						</div>
						<div class="form-group donation-form-group">
							<label for="value">*{!! trans('spende.lastschrift.8.value')!!} </label>
							<input type="number" class="form-control" id="value" required="" name="Betrag" min="1" step="0.01" placeholder="{!! trans('spende.lastschrift.8.value.placeholder') !!}" @if(isset($data['betrag'])) value="{{$data['betrag']}}" @endif>
						</div>
						<div class="form-group donation-form-group">
							<label for="msg">{!! trans('spende.lastschrift.8.message')!!}</label>
							<p>{!! trans('spende.bankinfo.3')!!}</p>
							<textarea class="form-control" id="msg" name="Nachricht" placeholder="{!! trans('spende.lastschrift.8.message.placeholder') !!}">@if(isset($data['nachricht'])){{$data['nachricht']}}@endif</textarea>
						</div>
						<button type="submit" form="donate" class="btn btn-default">{!! trans('spende.lastschrift.9') !!}</button>
					</form>
				</div>
			</div>
			<div class="col-right">
				<div class="section">
					<h3>{!! trans('spende.bankinfo.1') !!}</h3>
					<p>{!! trans('spende.bankinfo.2') !!}</p>
				</div>
				<div class="section">
					<h3>{!! trans('spende.paypal.title') !!}</h3>
					<p>{!! trans('spende.paypal.subtitle') !!}</p>
					<div class="center-wrapper">
						@if (LaravelLocalization::getCurrentLocale() == "de")
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
							<input type="hidden" name="cmd" value="_s-xclick" />
							<input type="hidden" name="hosted_button_id" value="5JPHYQT88JSRQ" />
							<input type="image" src="{{ action('Pictureproxy@get', ['url' => 'https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donateCC_LG.gif']) }}" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
							<img alt="" border="0" src="{{ action('Pictureproxy@get', ['url' => 'https://www.paypal.com/de_DE/i/scr/pixel.gif']) }}" width="1" height="1" />
						</form>
						@else
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
							<input type="hidden" name="cmd" value="_s-xclick" />
							<input type="hidden" name="hosted_button_id" value="LXWAVD6P3ZSWG" />
							<input type="image" src="{{ action('Pictureproxy@get', ['url' => 'https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif']) }}" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
							<img alt="" border="0" src="{{ action('Pictureproxy@get', ['url' => 'https://www.paypal.com/en_DE/i/scr/pixel.gif']) }}" width="1" height="1" />
						</form>
						@endif
					</div>
				</div>
				<div class="section">
					<h3>{{ trans('spende.bitpay.title') }}</h3>
					@include('spende.bitpay')
				</div>
				<div class="section">
					<p>{!! trans('spende.lastschrift.10') !!}</p>
				</div>
			</div>
		</div>
	</div>
@endsection
