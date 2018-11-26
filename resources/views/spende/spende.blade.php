@extends('layouts.subPages')

@section('title', $title )

@section('navbarFocus.donate', 'class="dropdown active"')

@section('content')
	<div class="card-heavy">
		<h1>{!! trans('spende.headline.1') !!}</h1>
		<h2>{!! trans('spende.headline.2') !!}</h2>
		<p>{!! trans('spende.about.2') !!}</p>
		<p><i class="fa fa-info fa-fw fa-lg" aria-hidden="true"></i>{!! trans('spende.bankinfo.3') !!}</p>
	</div>
	<div class="two-col">
		<div>
			<div class="card-medium">
				<h3 id="lastschrift">{!! trans('spende.lastschrift.1') !!}</h3>
				<p>{!! trans('spende.lastschrift.2') !!}</p>
				<form id="donate" method="POST">
					<input type="hidden" name="dt" value="{{ md5(date('Y') . date('m') . date('d')) }}">
					<div class="form-group donation-form-group">
						<label for="Name">{!! trans('spende.lastschrift.3') !!}</label>
						<input type="text" class="form-control" id="Name" required="" name="Name" placeholder="{!! trans('spende.lastschrift.3.placeholder') !!}" value="{{ old('Name') }}" />
					</div>
					<div class="form-group donation-form-group">
						<label for="email">{!! trans('spende.lastschrift.4') !!}</label>
						<input type="email" class="form-control" id="email" name="email" placeholder="Email" value="{{ old('email') }}">
					</div>
					<div class="form-group donation-form-group">
						<label for="iban">{!! trans('spende.lastschrift.6') !!}</label>
						<input type="text" class="form-control" id="iban" required="" name="Kontonummer" placeholder="IBAN" value="{{ old('Kontonummer') }}">
					</div>
					<div class="form-group donation-form-group">
						<label for="bic">{!! trans('spende.lastschrift.7') !!}</label>
						<input type="text" class="form-control" id="bic" required="" name="Bankleitzahl" placeholder="BIC" value="{{ old('Bankleitzahl') }}">
					</div>
					<div class="form-group donation-form-group">
						<label for="value">{!! trans('spende.lastschrift.8.value')!!} </label>
						<input type="number" class="form-control" id="value" required="" name="Betrag" placeholder="{!! trans('spende.lastschrift.8.value.placeholder') !!}" value="{{ old('Bankleitzahl') }}">
					</div>
					<div class="form-group donation-form-group">
						<label for="msg">{!! trans('spende.lastschrift.8.message')!!}</label>
						<p>{!! trans('spende.bankinfo.3')!!}</p>
						<textarea class="form-control" id="msg" name="Nachricht" placeholder="{!! trans('spende.lastschrift.8.message.placeholder') !!}">{{ old('Nachricht') }}</textarea>
					</div>
					<button type="submit" form="donate" class="btn btn-default">{!! trans('spende.lastschrift.9') !!}</button>
				</form>
			</div>
		</div>
		<div>
			<div class="card-medium">
				<h3>{!! trans('spende.bankinfo.1') !!}</h3>
				<p>{!! trans('spende.bankinfo.2') !!}</p>
			</div>
		</div>
		<div>
			<div class="card-medium">
				<h3>{!! trans('spende.paypal.1') !!}</h3>
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
					<input src="/img/paypalspenden.gif" name="submit" width="120" alt="{!! trans('spende.paypal.2') !!}" type="image">
				</form>
			</div>
		</div>
		<div>
			<div class="card-medium">
			<p>{!! trans('spende.lastschrift.10') !!}</p>
			</div>
		</div>
	</div>
@endsection
