{{-- Don't forget @include('modals.create-focus-modal') --}}
{{-- Don't forget <script type="text/javascript" src="{{ mix('js/searchbar.js') }}"></script> --}}
<fieldset>
	<form id="searchForm" method={{ $request }} action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/meta/meta.ger3 ") }}" accept-charset="UTF-8">
		<div class="searchbar {{$class or ''}}">
			<div class="search-input-submit">
				<div class="search-key">
					<input id="input-key" type="text" name="key" placeholder="{{ trans ('index.key.placeholder') }}">
					<label id="key-label" for="input-key">
						<i class="fa fa-key" aria-hidden="true"></i>
					</label>
				</div>
				<div class="search-input">
					<input type="text" name="eingabe" value="@if(isset($eingabe)){{$eingabe}}@endif" required=""  autocomplete="{{$autocomplete or 'off'}}" class="form-control" placeholder="{{ trans('index.placeholder') }}" tabindex="1">
					<button class="hidden" id="search-delete-btn" type="button">
						&#xd7;
					</button>
				</div>
				<div class="search-submit" id="submit-inputgroup">
					<button type="submit">
						<i class="fa fa-search" aria-hidden="true"></i>
					</button>
				</div>
			</div>
			<div class="search-hidden">
				<input type="hidden" name="encoding" value="utf8">
				@if (isset($option_values))
					@foreach($option_values as $option => $value)
						<input type="hidden" name={{ $option }} value={{ $value }}>
					@endforeach
				@endif
				@if (isset($option_values))
					<input type="hidden" name="time" value={{ $time }}>
				@endif
				@if (isset($focusPages) && !empty($focusPages))
					<input type="hidden" name="focus" value="focus_custom">	
					@foreach ($focusPages as $fp)
						<input type="hidden" name={{ $fp }} value="on">
					@endforeach
				@endif
				@if (isset($theme))
					<input type="hidden" name="theme" value={{ $theme }}>
					@endif
			</div>
			<div class="search-custom-hidden"></div>
		</div>
	</form>
</fieldset>