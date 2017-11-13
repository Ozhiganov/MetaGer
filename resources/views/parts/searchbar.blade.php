<fieldset>
	<form id="searchForm" method={{ $request }} action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/meta/meta.ger3") }}" accept-charset="UTF-8">
		<div class="searchbar {{$class or ''}}">
			<div class="search-focus-selector">
				<select id="focus-select" name="focus" style="font-family: FontAwesome, sans-serif;">
					<option value="web" style="font-family: FontAwesome, sans-serif;" selected>&#xf0ac; Websuche</option>
					<option value="nachrichten" style="font-family: FontAwesome, sans-serif;">&#xf0a1; Nachrichtensuche</option>
					<option value="wissenschaft" style="font-family: FontAwesome, sans-serif;">&#xf15c; Wissenschaftssuche</option>
					<option value="produktsuche" style="font-family: FontAwesome, sans-serif;">&#xf07a; Produktsuche</option>
					<option value="maps" style="font-family: FontAwesome, sans-serif;">&#xf279; Kartensuche</option>
				</select>
			</div>
			<div class="search-add-focus js-only">
				<button type="button" id="addFocusBtn">
					<i class="fa fa-plus"></i>
				</button>
			</div>
			<div class="search-edit-focus js-only">
				<button type="button" id="editFocusBtn" title="@lang('index.edit-focus')">
					<i class="fa fa-wrench"></i>
				</button>
			</div>
			<div class="search-settings">
				<a id="settings-btn" class="mutelink btn btn-default" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "settings") }}">
					<i class="fa fa-cog" aria-hidden="true"></i>
				</a>
			</div>
			<div class="search-input-submit">
				<div class="search-input">
					<input type="text" name="eingabe" required="" autofocus="" autocomplete="{{$autocomplete or 'off'}}" class="form-control" placeholder="{{ trans('index.placeholder') }}">
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
		</div>
	</form>
</fieldset>