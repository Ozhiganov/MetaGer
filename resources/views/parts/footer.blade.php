@if ($type === 'startpage' || $type === 'subpage')
<footer class="{{ $id }} noprint">
  <div class="imagebox">
    <a href="https://www.suma-ev.de/"  >
      <img src="/img/suma_ev_logo-m1-greyscale.png" alt="SUMA-EV Logo">
    </a>
  </div>
  <div id="info">
    <span><a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "kontakt") }}">{{ trans('staticPages.nav5') }}</a> - <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "impressum") }}">{{ trans('staticPages.nav8') }}</a></span>
    <span class="hidden-xs">{{ trans('staticPages.sumaev.1') }}<a href="https://www.suma-ev.de/">{{ trans('staticPages.sumaev.2') }}</a></span>
  </div>
  <div class="imagebox">
    <a href="https://www.uni-hannover.de/">
      <img src="/img/luh_metager.png" alt="LUH Logo">
    </a>
  </div>
</footer>
@elseif ($type === 'resultpage')
<footer class="footer-resultpage">
  <div>
    <a class="btn btn-default" href="/">{!! trans('resultPage.startseite') !!}</a>
  </div>
  <div>
    <a class="btn btn-default" href="/impressum/">{!! trans('resultPage.impressum') !!}</a>
  </div>
</footer>
@endif