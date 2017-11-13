<input id="sideBarToggle" style="display: none;" type="checkbox">
  <label id="openSidebar" role="button" for="sideBarToggle"></label>
  <div class="sideBar">
  <label id="closeSidebar" role="button" for="sideBarToggle"></label>
  <p> MetaGer </p>
  <ul id="metager-static-nav-list" class="list-inline pull-right">
    <li @if ( !isset($navbarFocus) || $navbarFocus === 'suche') class="active" @endif >
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"  tabindex="200" id="navigationSuche"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;
{{ trans('staticPages.nav1') }}</a>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'dienste') class="metager-dropdown active" @else class="metager-dropdown" @endif >
    <input id="servicesToggle" class="sideBarCheckbox" type="checkbox">
      <label for="servicesToggle" class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" tabindex="225"><i class="fa fa-wrench" aria-hidden="true"></i>
&nbsp;{{ trans('staticPages.nav15') }}
      <span class="caret"></span></label>
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
    <li @if (isset($navbarFocus) && $navbarFocus === 'datenschutz') class="active" @endif >
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/datenschutz/") }}" id="navigationPrivacy" tabindex="215"><i class="fa fa-user-secret" aria-hidden="true"></i>&nbsp;
{{ trans('staticPages.nav3') }}</a>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'hilfe') class="metager-dropdown active" @else class="metager-dropdown" @endif >
    <input id="helpToggle" class="sideBarCheckbox" type="checkbox">
      <label for="helpToggle" class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" id="navigationHilfe" tabindex="216"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;
{{ trans('staticPages.nav20') }}
      <span class="caret"></span></label>
      <ul class="metager-dropdown-menu">
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/hilfe/") }}" tabindex="217">{{ trans('staticPages.nav20') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/faq/") }}" tabindex="218">{{ trans('staticPages.nav21') }}</a>
        </li>
      </ul>
    </li>
    <li @if (isset($navbarFocus) && $navbarFocus === 'foerdern') class="metager-dropdown active" @else class="metager-dropdown" @endif >
      <input id="donationToggle" class="sideBarCheckbox" type="checkbox">
      <label for="donationToggle" class="metager-dropdown-toggle" role="button" aria-expanded="false" tabindex="201"><i class="fa fa-money" aria-hidden="true"></i>
&nbsp;{{ trans('staticPages.nav16') }}
      <span class="caret"></span></label>
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
    
    <li @if (isset($navbarFocus) && $navbarFocus === 'kontakt') class="metager-dropdown active" @else class="metager-dropdown" @endif >
    <input id="contactToggle" class="sideBarCheckbox" type="checkbox">
      <label for="contactToggle" class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" id="navigationKontakt" tabindex="219"><i class="fa fa-comments-o" aria-hidden="true"></i>&nbsp;
{{ trans('staticPages.nav18') }}
      <span class="caret"></span></label>
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
    <li class="metager-dropdown">
    <input id="languagesToggle" class="sideBarCheckbox" type="checkbox">
      <label for="languagesToggle" class="metager-dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" id="navigationSprache" tabindex="235"><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;
{{ trans('staticPages.nav19') }} ({{ LaravelLocalization::getSupportedLocales()[LaravelLocalization::getCurrentLocale()]['native'] }})
      <span class="caret"></span></label>
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
