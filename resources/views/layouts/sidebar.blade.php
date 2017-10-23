<input name="nav" id="nav0" style="display: none;" type="checkbox">
<div class="sideBar"@if (isset($id)) id={{ $id }}@endif>	
  <label role="button" for="nav0"></label>
  <ul id="metager-static-nav-list" class="list-inline pull-right">
    <li @if ( !isset($navbarFocus) || $navbarFocus === 'suche') class="active" @endif >
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"  tabindex="200" id="navigationSuche">{{ trans('staticPages.nav1') }}</a>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'foerdern') class="metager-dropdown active" @else class="metager-dropdown" @endif >
      <a class="metager-dropdown-toggle" role="button" aria-expanded="false" tabindex="201">{{ trans('staticPages.nav16') }}
      <span class="caret"></span></a>
      <ul class="metager-dropdown-menu">
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/spende/") }}" tabindex="202">{{ trans('staticPages.nav2') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/beitritt/") }}" tabindex="203">{{ trans('staticPages.nav23') }}</a>
        </li>
        <li>
          <a href="https://www.boost-project.com/de/shops?charity_id=1129&amp;tag=bl" tabindex="204">{{ trans('staticPages.nav17') }}</a>
        </li>
      </ul>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'datenschutz') class="active" @endif >
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/datenschutz/") }}" id="navigationPrivacy" tabindex="215">{{ trans('staticPages.nav3') }}</a>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'hilfe') class="metager-dropdown active" @else class="metager-dropdown" @endif >
      <a class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" id="navigationHilfe" tabindex="216">{{ trans('staticPages.nav20') }}
      <span class="caret"></span></a>
      <ul class="metager-dropdown-menu">
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/hilfe/") }}" tabindex="217">{{ trans('staticPages.nav20') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/faq/") }}" tabindex="218">{{ trans('staticPages.nav21') }}</a>
        </li>
      </ul>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'kontakt') class="metager-dropdown active" @else class="metager-dropdown" @endif >
      <a class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" id="navigationKontakt" tabindex="219">{{ trans('staticPages.nav18') }}
      <span class="caret"></span></a>
      <ul class="metager-dropdown-menu">
        <li>
          <a href="http://forum.suma-ev.de/" tabindex="220">{{ trans('staticPages.nav4') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/kontakt/") }}" tabindex="221">{{ trans('staticPages.nav5') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/team/") }}" tabindex="222">{{ trans('staticPages.nav6') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/about/") }}" tabindex="223">{{ trans('staticPages.nav7') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/impressum/") }}" tabindex="224">{{ trans('staticPages.nav8') }}</a>
        </li>
      </ul>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'dienste') class="metager-dropdown active" @else class="metager-dropdown" @endif >
      <a class="metager-dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" tabindex="225">{{ trans('staticPages.nav15') }}
      <span class="caret"></span></a>
      <ul class="metager-dropdown-menu">
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/widget/") }}" tabindex="226">{{ trans('staticPages.nav10') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/zitat-suche/") }}" tabindex="227">{{ trans('staticPages.nav22') }}</a>
        </li>
        <li>
          <a href="https://metager.de/klassik/asso/" tabindex="228">{{ trans('staticPages.nav11') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/app/") }}" tabindex="230">@lang('staticPages.nav25')</a>
        </li>
        <li>
          <a href="https://metager.to/" tabindex="231">{{ trans('staticPages.nav13') }}</a>
        </li>
        <li>
          <a href="https://maps.metager.de" target="_blank" tabindex="232">Maps.MetaGer.de</a>
        </li>
        <li>
          <a href="https://gitlab.metager3.de/open-source/MetaGer" tabindex="233">{{ trans('staticPages.nav24') }}</a>
        </li>
        <li>
          <a href="http://forum.suma-ev.de/viewtopic.php?f=3&amp;t=43" tabindex="234">{{ trans('staticPages.nav14') }}</a>
        </li>
      </ul>
    </li>
    <li class="metager-dropdown">
      <a class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" id="navigationSprache" tabindex="235">{{ trans('staticPages.nav19') }} ({{ LaravelLocalization::getSupportedLocales()[LaravelLocalization::getCurrentLocale()]['native'] }})
      <span class="caret"></span></a>
      <ul class="metager-dropdown-menu">
        @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
          <li>
            <a rel="alternate" hreflang="{{$localeCode}}" href="{{LaravelLocalization::getLocalizedURL($localeCode) }}" tabindex="{{235 + $loop->index}}">{{{ $properties['native'] }}}</a>
          </li>
        @endforeach
      </ul>
    </li>
  </ul>
</div>
