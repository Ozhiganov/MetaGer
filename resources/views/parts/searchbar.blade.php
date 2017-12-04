{{-- Don't forget to @include('modals.create-focus-modal') --}}
{{-- Don't forget <script type="text/javascript" src="{{ elixir('js/searchbar.js') }}"></script> --}}
<fieldset>
	<form id="searchForm" method={{ $request }} action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/meta/meta.ger3 ") }}" accept-charset="UTF-8">
		<div class="searchbar {{$class or ''}}">
			<div class="search-focus-selector">
				<button type="button" id="toggleOptBtn" class="js-only" data-mode="o">
					<i class="fa fa-chevron-down"></i>
				</button>
				<div class="no-js">
					<div class="search-settings">
						<a id="settings-btn" class="mutelink btn btn-default" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "settings ") }}">
							<i class="fa fa-cog" aria-hidden="true"></i>
						</a>
						<div class="searchbar-tooltip">
							<div class="searchbar-tooltip-arrow"></div>
							<div class="searchbar-tooltip-content">
								<p>{{{ trans('index.tooltips.settings') }}}</p>
							</div>
						</div>
					</div>
				</div>
				<select id="focus-select" name="focus" style="font-family: FontAwesome, sans-serif;">
					<option value="web" style="font-family: FontAwesome, sans-serif;" selected>&#xf0ac; Websuche</option>
					<option value="nachrichten" style="font-family: FontAwesome, sans-serif;">&#xf0a1; Nachrichtensuche</option>
					<option value="wissenschaft" style="font-family: FontAwesome, sans-serif;">&#xf15c; Wissenschaftssuche</option>
					<option value="produktsuche" style="font-family: FontAwesome, sans-serif;">&#xf07a; Produktsuche</option>
					<option value="maps" style="font-family: FontAwesome, sans-serif;">&#xf279; Kartensuche</option>
				</select>
				<div class="search-option-frame hide">
					<div class="searchbar-options-arrow"></div>
					<div class="search-button-container">
						<div class="search-add-focus js-only">
							<div class="search-option-descriptor">
								<label for="addFocusBtn">{{{ trans('index.tooltips.add-focus') }}}</label>
							</div>
							<button type="button" id="addFocusBtn">
								<i class="fa fa-plus"></i>
							</button>
							<div class="searchbar-tooltip">
								<div class="searchbar-tooltip-arrow"></div>
								<div class="searchbar-tooltip-content">
									<p>{{{ trans('index.tooltips.add-focus') }}}</p>
								</div>
							</div>
						</div>
						<div class="search-edit-focus js-only">
							<div class="search-option-descriptor">
								<label for="editFocusBtn">{{{ trans('index.tooltips.edit-focus') }}}</label>
							</div>
							<button type="button" id="editFocusBtn" title="@lang('index.edit-focus')">
								<i class="fa fa-wrench"></i>
							</button>
							<div class="searchbar-tooltip">
								<div class="searchbar-tooltip-arrow"></div>
								<div class="searchbar-tooltip-content">
									<p>{{{ trans('index.tooltips.edit-focus') }}}</p>
								</div>
							</div>
						</div>
						<div class="search-settings">
							<div class="search-option-descriptor">
								<label for="settings-btn">{{{ trans('index.tooltips.settings') }}}</label>
							</div>
							<a id="settings-btn" class="mutelink btn btn-default" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "settings ") }}">
								<i class="fa fa-cog" aria-hidden="true"></i>
							</a>
							<div class="searchbar-tooltip">
								<div class="searchbar-tooltip-arrow"></div>
								<div class="searchbar-tooltip-content">
									<p>{{{ trans('index.tooltips.settings') }}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="search-input-submit">
				<div class="search-input">
					<input type="text" name="eingabe" required="" autofocus="" autocomplete="{{$autocomplete or 'off'}}" class="form-control"placeholder="{{ trans('index.placeholder') }}">
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