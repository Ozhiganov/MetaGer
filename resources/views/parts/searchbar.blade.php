<fieldset>
	<form id="searchForm" method={{ $request }} action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/meta/meta.ger3 ") }}" accept-charset="UTF-8">
		<div class="searchbar {{$class ?? ''}}">
			<div class="search-input-submit">
				<div id="search-key">
					<a id="key-link" @if(isset($apiAuthorized) && $apiAuthorized)class="authorized" @else class="unauthorized"@endif href="{{ action('KeyController@index', ['redirUrl' => url()->full() ]) }}" data-tooltip="{{ trans ('index.key.tooltip') }}" tabindex="0">
						<i class="fa fa-key" aria-hidden="true"></i>
					</a>
				</div>
				<div class="search-input">
					<input type="search" name="eingabe" value="@if(isset($eingabe)){{$eingabe}}@endif" required=""  @if(\Request::is('/')) autofocus @endif autocomplete="off" class="form-control" placeholder="{{ trans('index.placeholder') }}" tabindex="0">
					<button id="search-delete-btn" type="button" tabindex="-1">
						&#xd7;
					</button>
				</div>
				<div class="search-submit" id="submit-inputgroup">
					<button type="submit" tabindex="-1">
						<i class="fa fa-search" aria-hidden="true"></i>
					</button>
				</div>
			</div>
			<div class="search-hidden">
				@if (isset($option_values))
					@foreach($option_values as $option => $value)
						<input type="hidden" name={{ $option }} value={{ $value }}>
					@endforeach
				@endif
				@if (isset($focus) && !empty($focus))
					<input type="hidden" name="focus" value={{ $focus }}>
				@endif
			</div>
			<div class="search-custom-hidden"></div>
		</div>
	</form>
</fieldset>
