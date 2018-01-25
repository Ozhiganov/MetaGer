{{-- Don't forget to @include('modals.create-focus-modal') --}}
{{-- Don't forget <script type="text/javascript" src="{{ elixir('js/searchbar.js') }}"></script> --}}
<fieldset>
	<form id="searchForm" method={{ $request }} action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/meta/meta.ger3 ") }}" accept-charset="UTF-8">
		<div class="searchbar {{$class or ''}}">
			<div class="search-input-submit">
				<div class="search-input">
					<input type="text" name="eingabe" value="@if(isset($eingabe)){{$eingabe}}@endif" required="" @if($class=='startpage-searchbar') autofocus="" @endif autocomplete="{{$autocomplete or 'off'}}" class="form-control" placeholder="{{ trans('index.placeholder') }}">
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
				@if (isset($focusPages))
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