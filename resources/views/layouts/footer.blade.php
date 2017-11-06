@if ($type === 'startpage' || $type === 'subpage')
  <div>
    <a class="image-box" href="https://www.suma-ev.de/">
      <img src="/img/suma_ev_logo-m1-greyscale.png" alt="SUMA-EV Logo">
    </a>
  </div>
  <div id="info">
    <p>
      <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "kontakt") }}">{{ trans('staticPages.nav5') }}</a> - <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "impressum") }}">{{ trans('staticPages.nav8') }}</a>
    </p>
    <p>
      {{ trans('staticPages.sumaev.1') }}<a href="https://www.suma-ev.de/">{{ trans('staticPages.sumaev.2') }}</a>
    </p>
  </div>
  <div>
    <a class="image-box" href="https://www.uni-hannover.de/">
      <img src="/img/luh_metager.png" alt="LUH Logo">
    </a>
  </div>
@elseif ($type === 'resultpage')
  <div>
    <a class="btn btn-default" href="/">{!! trans('resultPage.startseite') !!}</a>
  </div>
  <div>
    <a class="btn btn-default" href="/impressum/">{!! trans('resultPage.impressum') !!}</a>
  </div>
@endif