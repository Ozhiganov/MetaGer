<input id="sidebarToggle" class="hidden" type="checkbox">
<div class="sidebar">
  <a class="sidebar-logo" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}">
    <p>MetaGer</p>
  </a>
  <ul class="sidebar-list">
    <li>
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}" tabindex="200" id="navigationSuche">
        <i class="fa fa-search" aria-hidden="true"></i>
        <span>{{ trans('sidebar.nav1') }}</span>
      </a>
    </li>
    <hr>
    <li>
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/datenschutz/") }}" id="navigationPrivacy" tabindex="215">
        <i class="fa fa-user-secret" aria-hidden="true"></i>
        <span>{{ trans('sidebar.nav3') }}</span>
      </a>
    </li>
    <hr>
    <li>
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/hilfe/") }}" tabindex="217">
        <i class="fa fa-info" aria-hidden="true"></i>
        <span>{{ trans('sidebar.nav20') }}</span>
      </a>
    </li>
    <li>
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/faq/") }}" tabindex="218">
        <i class="fa fa-question" aria-hidden="true"></i>
        <span>{{ trans('sidebar.nav21') }}</span>
      </a>
    </li>
    <hr>
    <li>
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/spende/") }}" tabindex="202">
        <i class="fa fa-donate" aria-hidden="true"></i>
        <span>{{ trans('sidebar.nav2') }}</span>
      </a>
    </li>
    <li>
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/beitritt/") }}" tabindex="203">
        <i class="fa fa-users" aria-hidden="true"></i>
        <span>{{ trans('sidebar.nav23') }}</span>
      </a>
    </li>
    <hr>
    <li>
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/app/") }}" tabindex="229">
        <i class="fa fa-mobile-alt" aria-hidden="true"></i>
        <span>@lang('sidebar.nav25')</span>
      </a>
    </li>
    <li>
      <a class="inlink" href="https://maps.metager.de" target="_blank" tabindex="231">
        <i class="fa fa-map" aria-hidden="true"></i>
        <span>Maps.MetaGer.de</span>
      </a>
    </li>
    <hr>
    <li class="metager-dropdown">
      <input id="contactToggle" class="sidebarCheckbox" type="checkbox">
      <label for="contactToggle" class="metager-dropdown-toggle navigation-element" aria-haspopup="true" id="navigationKontakt" tabindex="219">
        <i class="fa fa-comments" aria-hidden="true"></i>
        <span>{{ trans('sidebar.nav18') }}</span>
        <span class="caret"></span>
      </label>
      <ul class="metager-dropdown-content">
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
      <input id="servicesToggle" class="sidebarCheckbox" type="checkbox">
        <label for="servicesToggle" class="metager-dropdown-toggle navigation-element" aria-haspopup="true" tabindex="225">
          <i class="fa fa-wrench" aria-hidden="true"></i>
          <span>{{ trans('sidebar.nav15') }}</span>
          <span class="caret"></span>
        </label>
      <ul class="metager-dropdown-content">
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/widget/") }}" tabindex="226">{{ trans('sidebar.nav10') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/zitat-suche/") }}" tabindex="227">{{ trans('sidebar.nav22') }}</a>
        </li>
        <li>
          <a href="{{ action('Assoziator@asso') }}" tabindex="228">{{ trans('sidebar.nav11') }}</a>
        </li>
        <li>
          <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/tips/") }}" tabindex="230">{{ trans('sidebar.titles.tips') }}</a>
        </li>
        <li>
          <a class="outlink" href="https://gitlab.metager3.de/open-source/MetaGer" tabindex="232">{{ trans('sidebar.nav24') }}</a>
        </li>
        <li>
          <a class="outlink" href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/tor/") }}" tabindex="234">{{ trans('sidebar.nav14') }}</a>
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
    <li class="metager-dropdown">
      <input id="languagesToggle" class="sidebarCheckbox" type="checkbox">
      <label for="languagesToggle" class="metager-dropdown-toggle navigation-element" aria-haspopup="true" id="navigationSprache" tabindex="235">
        <i class="fa fa-globe" aria-hidden="true"></i>
        <span>{{ trans('sidebar.nav19') }} ({{ LaravelLocalization::getSupportedLocales()[LaravelLocalization::getCurrentLocale()]['native'] }})</span>
        <span class="caret"></span>
      </label>
      <ul class="metager-dropdown-content">
        @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
          <li>
            <a rel="alternate" hreflang="{{$localeCode}}" href="{{LaravelLocalization::getLocalizedURL($localeCode) }}" tabindex="{{235 + $loop->index}}">{{{ $properties['native'] }}}</a>
          </li>
        @endforeach
      </ul>
    </li>
  </ul>
</div>
