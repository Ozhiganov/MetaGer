{{-- Don't forget <script src="{{ mix('js/searchbar.js') }}"></script> --}}
<fieldset>
	<form id="searchForm" method={{ $request }} action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/meta/meta.ger3 ") }}" accept-charset="UTF-8">
		<div class="searchbar {{$class ?? ''}}">
			<div class="search-input-submit">
				<div id="search-lang">
					<select id="input-lang" name="lang">
						<option value="all">Alle Sprachen</option>
						<option value="de">Deutsch</option>
						<option value="en">English</option>
					</select>
					<label id="lang-label" for="input-lang" data-tooltip="{{ trans ('index.lang.tooltip') }}">
						<i class="fa fa-globe" aria-hidden="true"></i>
						<span id="lang-label-code"></span>
					</label>
				</div>
				<div id="search-key">
					<input id="input-key" type="text" name="key" placeholder="{{ trans ('index.key.placeholder') }}" tabindex="1">
					<label id="key-label" for="input-key" data-tooltip="{{ trans ('index.key.tooltip') }}">
						<i class="fa fa-key" aria-hidden="true"></i>
					</label>
				</div>
				<div class="search-input">
					<input type="text" name="eingabe" value="@if(isset($eingabe)){{$eingabe}}@endif" required=""  @if(\Request::is('/')) autofocus @endif autocomplete="{{$autocomplete ?? 'off'}}" class="form-control" placeholder="{{ trans('index.placeholder') }}" tabindex="2">
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
					@foreach ($focusPages as $fp)
						<input type="hidden" name={{ $fp }} value="on">
					@endforeach
				@endif
				@if (isset($focus) && !empty($focus))
					<input type="hidden" name="focus" value={{ $focus }}>
				@endif
				@if (isset($theme))
					<input type="hidden" name="theme" value={{ $theme }}>
					@endif
			</div>
			<div class="search-custom-hidden"></div>
		</div>
	</form>
</fieldset>
