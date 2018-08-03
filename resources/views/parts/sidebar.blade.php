<input id="sideBarToggle" style="display: none;" type="checkbox">
<div class="sideBar">
  <label class="navigation-element" id="closeSidebar" for="sideBarToggle"></label>
  <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">
    <p>MetaGer</p>
  </a>
  <ul id="metager-static-nav-list" class="list-inline pull-right">
    <li @if ( !isset($navbarFocus) || $navbarFocus === 'suche') class="active" @endif >
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" tabindex="200" id="navigationSuche">
        <i class="fa fa-search" aria-hidden="true"></i>
        <span>&nbsp;{{ trans('sidebar.nav1') }}</span>
      </a>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'dienste') class="metager-dropdown active" @else class="metager-dropdown" @endif >
      <input id="servicesToggle" class="sideBarCheckbox" type="checkbox">
        <label for="servicesToggle" class="metager-dropdown-toggle navigation-element" aria-haspopup="true" tabindex="225">
          <i class="fa fa-wrench" aria-hidden="true"></i>
          <span>&nbsp;{{ trans('sidebar.nav15') }}</span>
          <span class="caret"></span>
        </label>
      <ul class="metager-dropdown-menu">
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/widget/") }}" tabindex="226">{{ trans('sidebar.nav10') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/zitat-suche/") }}" tabindex="227">{{ trans('sidebar.nav22') }}</a>
        </li>
        <li>
          <a class="inlink" href="https://metager.de/klassik/asso/" tabindex="228">{{ trans('sidebar.nav11') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/app/") }}" tabindex="229">@lang('sidebar.nav25')</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/tips/") }}" tabindex="230">{{ trans('sidebar.titles.tips') }}</a>
        </li>
        <li>
          <a class="inlink" href="https://maps.metager.de" target="_blank" tabindex="231">Maps.MetaGer.de</a>
        </li>
        <li>
          <a class="outlink" href="https://gitlab.metager3.de/open-source/MetaGer" tabindex="232">{{ trans('sidebar.nav24') }}</a>
        </li>
        <li>
          <a class="outlink" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/tor/") }}" tabindex="234">{{ trans('sidebar.nav14') }}</a>
        </li>
      </ul>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'datenschutz') class="active" @endif >
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/datenschutz/") }}" id="navigationPrivacy" tabindex="215">
        <i class="fa fa-user-secret" aria-hidden="true"></i>
        <span>&nbsp;{{ trans('sidebar.nav3') }}</span>
      </a>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'hilfe') class="metager-dropdown active" @else class="metager-dropdown" @endif >
      <input id="helpToggle" class="sideBarCheckbox" type="checkbox">
      <label for="helpToggle" class="metager-dropdown-toggle navigation-element" aria-haspopup="true" id="navigationHilfe" tabindex="216">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
        <span>&nbsp;{{ trans('sidebar.nav20') }}</span>
        <span class="caret"></span>
      </label>
      <ul class="metager-dropdown-menu">
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/hilfe/") }}" tabindex="217">{{ trans('sidebar.nav20') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/faq/") }}" tabindex="218">{{ trans('sidebar.nav21') }}</a>
        </li>
      </ul>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'foerdern') class="metager-dropdown active" @else class="metager-dropdown" @endif >
      <input id="donationToggle" class="sideBarCheckbox" type="checkbox">
      <label for="donationToggle" class="metager-dropdown-toggle navigation-element" tabindex="201">
        <i class="fa fa-money" aria-hidden="true"></i>
        <span>&nbsp;{{ trans('sidebar.nav16') }}</span>
        <span class="caret"></span>
      </label>
      <ul class="metager-dropdown-menu">
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/spende/") }}" tabindex="202">{{ trans('sidebar.nav2') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/beitritt/") }}" tabindex="203">{{ trans('sidebar.nav23') }}</a>
        </li>
        @if(LaravelLocalization::getCurrentLocale() == "de")
          <li>
            <a class="outlink" href="https://shop.spreadshirt.de/metager/" rel="noopener" target="_blank">{{ trans('sidebar.nav26') }}</a>
          </li>
        @endif
        <li>
          <a class="outlink" href="https://www.boost-project.com/de/shops?charity_id=1129&amp;tag=bl" tabindex="204">{{ trans('sidebar.nav17') }}</a>
        </li>
      </ul>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'kontakt') class="metager-dropdown active" @else class="metager-dropdown" @endif >
      <input id="contactToggle" class="sideBarCheckbox" type="checkbox">
      <label for="contactToggle" class="metager-dropdown-toggle navigation-element" aria-haspopup="true" id="navigationKontakt" tabindex="219">
        <i class="fa fa-comments-o" aria-hidden="true"></i>
        <span>&nbsp;{{ trans('sidebar.nav18') }}</span>
        <span class="caret"></span>
      </label>
      <ul class="metager-dropdown-menu">
        <li>
          <a class="outlink" href="http://forum.suma-ev.de/" tabindex="220">{{ trans('sidebar.nav4') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/kontakt/") }}" tabindex="221">{{ trans('sidebar.nav5') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/team/") }}" tabindex="222">{{ trans('sidebar.nav6') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/about/") }}" tabindex="223">{{ trans('sidebar.nav7') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/impressum/") }}" tabindex="224">{{ trans('sidebar.nav8') }}</a>
        </li>
      </ul>
    </li>
    <li class="metager-dropdown">
      <input id="languagesToggle" class="sideBarCheckbox" type="checkbox">
      <label for="languagesToggle" class="metager-dropdown-toggle navigation-element" aria-haspopup="true" id="navigationSprache" tabindex="235">
        <i class="fa fa-globe" aria-hidden="true"></i>
        <span>&nbsp;{{ trans('sidebar.nav19') }} ({{ LaravelLocalization::getSupportedLocales()[LaravelLocalization::getCurrentLocale()]['native'] }})</span>
        <span class="caret"></span>
      </label>
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
