@extends('layouts.indexPage')

@section('title', $title )

@section('content')
	<div class="modal fade" id="plugin-modal" tab-index="-1" role="dialog">
		<div class="modal-dialog ">
			<div class="content modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4>
						@if ($browser === 'Firefox' || $browser === 'Mozilla')
							{{ trans('index.plugin.head.1') }}
						@elseif ($browser === 'Chrome')
							{{ trans('index.plugin.head.2') }}
						@elseif ($browser === 'Opera')
							{{ trans('index.plugin.head.3') }}
						@elseif ($browser === 'IE')
							{{ trans('index.plugin.head.4') }}
						@elseif ($browser === 'Edge')
							{{ trans('index.plugin.head.5') }}
						@elseif ($browser === 'Safari')
							{{ trans('index.plugin.head.6') }}
						@elseif ($browser === 'Vivaldi')
							{{ trans('index.plugin.head.6') }}
						@else
							$(".seperator").addClass("hidden");
						@endif
					</h4>
					<p class="text-muted">{{ trans('index.plugin.head.info') }}</p>
				</div>
				<div class="modal-body">
					@if ($browser === 'Firefox' || $browser === 'Mozilla')
						<ol>
							<li>{{ trans('index.plugin.firefox.1') }}<img src="/img/Firefox.png" width="100%" /></li>
							<li>{{ trans('index.plugin.firefox.2') }}<img src="/img/Firefox_Standard.png" width="100%" /></li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.firefox.3', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.firefox.4') !!}</li>
							<li>{!! trans('index.plugin.firefox.5') !!}</li>
						</ol>
					@elseif ($browser === 'Chrome')
						<ol>
							<li>{!! trans('index.plugin.chrome.1') !!}</li>
							<li>{!! trans('index.plugin.chrome.2') !!}</li>
							<li>{{ trans('index.plugin.chrome.3') }}</li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.chrome.4', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.chrome.5') !!}</li>
							<li>{!! trans('index.plugin.chrome.6') !!}</li>
							<li>{!! trans('index.plugin.chrome.7') !!}</li>
							<li>{!! trans('index.plugin.chrome.8') !!}</li>
						</ol>
					@elseif ($browser === 'Opera')
						<ol>
							<li>{!! trans('index.plugin.opera.1') !!}</li>
							<li>{!! trans('index.plugin.opera.2') !!}</li>
							<li>{!! trans('index.plugin.opera.3') !!}</li>
							<li>{!! trans('index.plugin.opera.4') !!}</li>
							<li><small>{!! trans('index.plugin.opera.5') !!}</small>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.opera.6', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.opera.7') !!}</li>
							<li>{!! trans('index.plugin.opera.8') !!}</li>
							<li>{!! trans('index.plugin.opera.9') !!}</li>
							<li>{!! trans('index.plugin.opera.10') !!}</li>
						</ol>
					@elseif ($browser === 'IE')
						<ol>
							<li>{!! trans('index.plugin.IE.1') !!}</li>
							<li>{!! trans('index.plugin.IE.4') !!} (<i class="fa fa-cog" aria-hidden="true"></i>)</li>
							<li>{!! trans('index.plugin.IE.5') !!}</li>
							<li>{!! trans('index.plugin.IE.6') !!}</li>
							<li>{!! trans('index.plugin.IE.7') !!}</li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.IE.8', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.IE.9') !!}</li>
							<li>{!! trans('index.plugin.IE.10') !!}</li>
							<li>{!! trans('index.plugin.IE.11') !!}</li>
						</ol>
					@elseif ($browser === 'Edge')
						<ol>
							<li>{!! trans('index.plugin.edge.1') !!}<i class="fa fa-ellipsis-h" aria-hidden="true"></i>{!! trans('index.plugin.edge.2') !!}</li>
							<li>{!! trans('index.plugin.edge.3') !!}</li>
							<li>{!! trans('index.plugin.edge.4') !!}</li>
							<li>{!! trans('index.plugin.edge.5') !!}</li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.edge.6', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.edge.7') !!}</li>
							<li>{!! trans('index.plugin.edge.8') !!}</li>
							<li>{!! trans('index.plugin.edge.9') !!}</li>
							<li>{!! trans('index.plugin.edge.10') !!}</li>
							<li>{!! trans('index.plugin.edge.11') !!}</li>
						</ol>
					@elseif ($browser === 'Safari')
						<ol>
							<li>{!! trans('index.plugin.safari.1') !!}</li>
							<li>{!! trans('index.plugin.safari.2') !!}</li>
							<li>{!! trans('index.plugin.safari.3') !!}</li>
							<li>{!! trans('index.plugin.safari.4') !!}</li>
						</ol>
					@elseif ($browser === 'Vivaldi')
						<ol>
							<li>{!! trans('index.plugin.vivaldi.1') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.2') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.3') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.4') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.5') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.6') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.7') !!}</li>
						</ol>
						<hr />
						<h4>{!! trans('index.plugin.vivaldi.8', ['browser' => $browser]) !!}</h4>
						<ol>
							<li>{!! trans('index.plugin.vivaldi.9') !!}</li>
							<li>{!! trans('index.plugin.vivaldi.10') !!}</li>
						</ol>
					@endif
					<hr>
					<p>@lang('index.plugin.faq.1')<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/faq#mg-plugin") }}">@lang('index.plugin.faq.2')</a></p>
				</div>
			</div>
		</div>
	</div>
	<div id="create-focus-modal" class="modal fade" tab-index="-1" role="dialog">
		<div class="modal-dialog modal-lg">
			<div class="content modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4>
						@lang("index.focus-creator.head")
					</h4>
					<p class="text-muted">@lang("index.focus-creator.description")</p>
				</div>
				<div class="modal-body">
					<div class="clearfix">
						<div class="pull-left">
							<label for="focus-name">@lang('index.focus-creator.focusname')</label>
							<input id="focus-name" type="text" name="focus-name" placeholder="@lang('index.focus-creator.name-placeholder')">
							<input id="original-id" type="hidden" name="original-id" value="">
						</div>
						<div class="settings-modal-buttons pull-right">
							<button class="delete-focus-btn btn btn-danger">
								@lang('index.focus-creator.delete')
							</button>
							<button class="save-focus-btn btn btn-primary">
								@lang('index.focus-creator.save')
							</button>
						</div>
					</div>
					{{--
					<h2>{!! trans('settings.suchmaschinen.1') !!} <small><button type="button" class="btn btn-link allUnchecker hide">{!! trans('settings.suchmaschinen.2') !!}</button></small></h2>
					--}}
					@foreach( $foki as $fokus => $sumas )
						<div class="headingGroup {{ $fokus }}">
							<h3 class="focus-category">
								@lang("settings.foki." . $fokus)
								{{--
								<small>
									<button type="button" class="checker btn btn-link hide" data-type="{{ $fokus }}">{!! trans('settings.suchmaschinen.3') !!}</button>
								</small>
								--}}
							</h3>
							<div class="row">
								@foreach( $sumas as $name => $data )
									<div class="col-sm-6 col-md-4 col-lg-3">
										<div class="checkbox settings-checkbox">
											<label>
												<input type="checkbox" name="engine_{{ $name }}" class="focusCheckbox"  @if ($fokus == 'web') checked @endif >{{ $data['displayName'] }}
												<a class="settings-icon" target="_blank" rel="noopener" href="{{ $data['url'] }}"><i class="fa fa-link" aria-hidden="true"></i></a>
											</label>
										</div>
									</div>
								@endforeach
							</div>
						</div>
					@endforeach
					<div class="clearfix">
						<div class="settings-modal-buttons pull-right">
							<button class="delete-focus-btn btn btn-danger">
								@lang('index.focus-creator.delete')
							</button>
							<button class="save-focus-btn btn btn-primary">
								@lang('index.focus-creator.save')
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<h1 id="mglogo"><a class="hidden-xs" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">MetaGer</a></h1>
		<fieldset>
			<form id="searchForm" method={{ $request }} action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/meta/meta.ger3") }}" accept-charset="UTF-8">
				<div class="search-bar">
					<div class="search-focus-selector">
						<select id="focus-select" name="focus" style="font-family: FontAwesome, sans-serif;">
							<option value="web" style="font-family: FontAwesome, sans-serif;" selected >&#xf0ac; Websuche</option>
							<option value="nachrichten" style="font-family: FontAwesome, sans-serif;" >&#xf0a1; Nachrichtensuche</option>
							<option value="wissenschaft" style="font-family: FontAwesome, sans-serif;" >&#xf15c; Wissenschaftssuche</option>
							<option value="produktsuche" style="font-family: FontAwesome, sans-serif;" >&#xf07a; Produktsuche</option>
							<option value="maps" style="font-family: FontAwesome, sans-serif;" >&#xf279; Kartensuche</option>
						</select>
					</div>
					<div class="search-add-focus js-only">
						<button type="button" id="addFocusBtn"><i class="fa fa-plus"></i></button>
					</div>
					<div class="search-edit-focus js-only">
						<button type="button" id="editFocusBtn"><i class="fa fa-wrench"></i></button>
					</div>
					<div class="search-settings">
						<a id="settings-btn" class="mutelink btn btn-default" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "settings") }}">
							<i class="fa fa-cog" aria-hidden="true"></i>
						</a>
					</div>
					<div class="search-input-submit">
						<div class="search-input">
							<input type="text" name="eingabe" required="" autofocus="" autocomplete="{{$autocomplete}}" class="form-control" placeholder="{{ trans('index.placeholder') }}">
						</div>
						<div class="search-submit" id="submit-inputgroup">
							<button type="submit">
								<i class="fa fa-search" aria-hidden="true"></i>
							</button>
						</div>
					</div>
					<div class="search-hidden">
						<input type="hidden" name="encoding" value="utf8">
						@foreach($option_values as $option => $value)
							<input type="hidden" name={{ $option }} value={{ $value }}>
						@endforeach
						<input type="hidden" name="time" value={{ $time }}>
						@foreach ($focusPages as $fp)
							<input type="hidden" name={{ $fp }} value="on">
						@endforeach
						<input type="hidden" name="theme" value={{ $theme }}>
					</div>
				</div>
			</form>
		</fieldset>
		<ul class="list-inline searchform-bonus hidden">
			<li id="plug"
			@unless ($browser === 'Firefox' || $browser === 'Mozilla' || $browser === 'Chrome' || $browser === 'Opera' || $browser === 'IE' || $browser === 'Edge' || $browser === 'Safari' || $browser === 'Vivaldi')
				class="hidden"
			@endunless>
			<a href="#" data-toggle="modal" data-target="#plugin-modal" class="btn btn-default mutelink" title="{{ trans('index.plugintitle') }}"><i class="fa fa-plug" aria-hidden="true"></i> {{ trans('index.plugin') }}</a></li>
			@if (LaravelLocalization::getCurrentLocale() == "de")
			<li>
				<a href="https://suma-ev.de/presse/Werbefreie-Suche-mit-MetaGer.html" target="_blank" class="btn btn-default mutelink">
						Werbefreie Suche mit MetaGer
				</a>
			</li>
			@endif
		</ul>
	<script src="{{ elixir('js/scriptStartPage.js') }}"></script>
@endsection

@section('optionalContent')
	<section id="moreInformation" class="hidden-xs hidden">
		<h1 class="hidden">{{ trans('index.sponsors.head.1') }}</h1>
		<div class="row">
			<div id="sponsors" class="col-sm-6">
				<h2>{{ trans('index.sponsors.head.2') }}</h2>
				<ul class="startpage">
					<li>{!! trans('index.sponsors.woxikon') !!}</li>
					<li>{!! trans('index.sponsors.gutscheine') !!}</li>
					<li>{!! trans('index.sponsors.kredite') !!}</li>
				</ul>
			</div>
			<div id="about-us" class="col-sm-6">
				<h2>
					<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "about") }}">{{ trans('index.about.title') }}</a>
				</h2>
				<ul class="startpage">
					<li>{!! trans('index.about.1.1') !!}</li>
					<li>{!! trans('index.about.2.1') !!}</li>
					<li>@lang('index.about.3.1')</li>
				</ul>
			</div>
		</div>
	</section>
@endsection
