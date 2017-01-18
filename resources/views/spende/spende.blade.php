@extends('layouts.subPages')

@section('title', $title )

@section('navbarFocus.donate', 'class="dropdown active"')

@section('content')
	<h1>{!! trans('spenden.headline.1') !!}</h1>
	<h2 class="subheading">{!! trans('spenden.headline.2') !!}</h2>
	<div class="col">
		<div id="left" class="col-lg-6 col-md-12 col-sm-12 others">
			<h3>{!! trans('spenden.bankinfo.1') !!}</h3>
			<p>{!! trans('spenden.bankinfo.2') !!}</p>
			<p class="text-muted">{!! trans('spenden.bankinfo.3') !!}</p>
			<hr>
			<div class="col-lg-6 col-md-12 col-sm-12 others bitcoins">
				<h3>{!! trans('spenden.logos.1') !!}</h3>
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
					<input name="cmd" value="_xclick" type="hidden">
					<input name="business" value="wsb@suma-ev.de" type="hidden">
					<input name="item_name" value="SuMa-eV Spende" type="hidden">
					<input name="buyer_credit_promo_code" value="" type="hidden">
					<input name="buyer_credit_product_category" value="" type="hidden">
					<input name="buyer_credit_shipping_method" value="" type="hidden">
					<input name="buyer_credit_user_address_change" value="" type="hidden">
					<input name="no_shipping" value="0" type="hidden">
					<input name="no_note" value="1" type="hidden">
					<input name="currency_code" value="EUR" type="hidden">
					<input name="tax" value="0" type="hidden">
					<input name="lc" value="DE" type="hidden">
					<input name="bn" value="PP-DonationsBF" type="hidden">
					<input src="/img/paypalspenden.gif" name="submit" width="120px" alt="Spenden Sie mit PayPal - schnell, kostenlos und sicher!" type="image">
				</form>
			</div>
			<div class="col-lg-6 col-md-12 col-sm-12 others bitcoins">
				<h3>{!! trans('spenden.logos.2') !!}</h3>
				{!! trans('spenden.bitcoins') !!}<br/>
				<a href="bitcoin:174SDRNZqM2WNobHhCDqD1VXbnZYFXNf8V">174SDRNZqM2WNobHhCDqD1VXbnZYFXNf8V</a>
			</div>
			<div class="clearfix"></div>
			<hr>
			<h3 id="lastschrift">{!! trans('spenden.lastschrift.1') !!}</h3>
			<p>{!! trans('spenden.lastschrift.2') !!}</p>
			<form role="form" method="POST">
				<input type="hidden" name="dt" value="{{ md5(date('Y') . date('m') . date('d')) }}">
				<div class="form-group donation-form-group">
					<label for="Name">{!! trans('spenden.lastschrift.3') !!}</label>
					<input type="text" class="form-control" id="Name" required="" name="Name" placeholder="{!! trans('spenden.lastschrift.3.placeholder') !!}" value="{{ old('Name') }}">
				</div>
				<div class="form-group donation-form-group">
					<label for="email">{!! trans('spenden.lastschrift.4') !!}</label>
					<input type="email" class="form-control" id="email" name="email" placeholder="Email" value="{{ old('email') }}">
				</div>
				<div class="form-group donation-form-group">
					<label for="tel">{!! trans('spenden.lastschrift.5') !!}</label>
					<input type="tel" class="form-control" id="tel" name="Telefon" placeholder="xxxx-xxxxx" value="{{ old('Telefon') }}">
				</div>
				<div class="form-group donation-form-group">
					<label for="iban">{!! trans('spenden.lastschrift.6') !!}</label>
					<input type="text" class="form-control" id="iban" required="" name="Kontonummer" placeholder="IBAN" value="{{ old('Kontonummer') }}">
				</div>
				<div class="form-group donation-form-group">
					<label for="bic">{!! trans('spenden.lastschrift.7') !!}</label>
					<input type="text" class="form-control" id="bic" required="" name="Bankleitzahl" placeholder="BIC" value="{{ old('Bankleitzahl') }}">
				</div>
				<div class="form-group donation-form-group">
					<label for="msg">{!! trans('spenden.lastschrift.8') !!}</label>
					<textarea class="form-control" id="msg" required="" name="Nachricht" placeholder="{!! trans('spenden.lastschrift.8.placeholder') !!}">{{ old('Nachricht') }}</textarea>
				</div>
				<button type="submit" class="btn btn-default">{!! trans('spenden.lastschrift.9') !!}</button>
			</form>
			<p>{!! trans('spenden.lastschrift.10') !!}</p>
		</div>
		<div class="col-lg-6 col-md-12 col-sm-12 others" id="right">
			<h3>{!! trans('spenden.about.1') !!}</h3>
			<p>{!! trans('spenden.about.2') !!}</p>
			<p>{!! trans('spenden.about.3') !!}</p>
			<p>{!! trans('spenden.about.4') !!}</p>
			<p>{!! trans('spenden.about.5') !!}</p>
		</div>
		<div class="clearfix"></div>
	</div>
@endsection
