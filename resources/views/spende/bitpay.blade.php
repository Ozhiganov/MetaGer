<form class="bitpay-donate" action="https://bitpay.com/checkout" method="post" onsubmit="return bitpayCheckRequiredFields(this);" target="_blank">
	<input name="action" type="hidden" value="checkout">
	<fieldset>
		<ul>
        	<li class="bitpay-donate-field">
        		<label>{{ trans('bitpay.amount') }}</label>
        		<div class="field-input-wrapper">
        			<input class="bitpay-donate-field-price field-input" name="price" type="number" value="10.00" placeholder="{{ trans('bitpay.amount') }}" maxlength="10" min="1" step="0.01"/>
        			<select class="bitpay-donate-field-currency field-input" name="currency" value="">
						<option selected="selected" value="USD">USD</option>
						<option value="BTC">BTC</option>
						<option value="EUR">EUR</option>
						<option value="GBP">GBP</option>
						<option value="AUD">AUD</option>
						<option value="BGN">BGN</option>
						<option value="BRL">BRL</option>
						<option value="CAD">CAD</option>
						<option value="CHF">CHF</option>
						<option value="CNY">CNY</option>
						<option value="CZK">CZK</option>
						<option value="DKK">DKK</option>
						<option value="HKD">HKD</option>
						<option value="HRK">HRK</option>
						<option value="HUF">HUF</option>
						<option value="IDR">IDR</option>
						<option value="ILS">ILS</option>
						<option value="INR">INR</option>
						<option value="JPY">JPY</option>
						<option value="KRW">KRW</option>
						<option value="LTL">LTL</option>
						<option value="LVL">LVL</option>
						<option value="MXN">MXN</option>
						<option value="MYR">MYR</option>
						<option value="NOK">NOK</option>
						<option value="NZD">NZD</option>
						<option value="PHP">PHP</option>
						<option value="PLN">PLN</option>
						<option value="RON">RON</option>
						<option value="RUB">RUB</option>
						<option value="SEK">SEK</option>
						<option value="SGD">SGD</option>
						<option value="THB">THB</option>
						<option value="TRY">TRY</option>
						<option value="ZAR">ZAR</option>
					</select>
        		<div>
        	</li>
      	</ul>
    	<input type="hidden" name="data" value="7vfsM4tlJTE54JMpsAbG/vza+uhjCUlwTLyNfRIxcXxYZKp0AjWMJdRX/EiOkwvyysCmCtCJew937VQ3e+/NxT79NJMGmDwDFTXOA1P8NSMf2J4skBfMzOVYxEdM5CRiT9M9T+JOpZZUQGD8OVEJ5QbZavJKM/x+5TCagn/l6v9tEOIQrt4t0Qh4qs3GpZlqI0vmyNs+/fNnfdvrI512wBU0dTwM9Qi2+D18wUn2CfvjICMFhKF+j1N9nhow7tjs">
    	<div class="bitpay-donate-button-wrapper">
			<input class="bitpay-donate-button" name="submit" src="/meta/picture?url=https%3A%2F%2Fbitpay.com%2Fcdn%2Fen_US%2Fbp-btn-donate-currencies.svg" onerror="this.onerror=null; this.src='/meta/picture?url=https%3A%2F%2Fbitpay.com%2Fcdn%2Fen_US%2Fbp-btn-donate-currencies.svg'" type="image" alt="BitPay, the easy way to pay with bitcoins.">
		</div>
    </fieldset>
</form>
<script src="{{ mix('js/bitpay.js') }}"></script>
