@if ($type === 'startpage' || $type === 'subpage')
<footer class="{{ $id }} noprint">
  <div id="info">
    <span><a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "kontakt") }}">{{ trans('staticPages.nav5') }}</a> - <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "impressum") }}">{{ trans('staticPages.nav8') }}</a></span>
    <span class="hidden-xs">{{ trans('staticPages.sumaev.1') }}<a href="https://www.suma-ev.de/">{{ trans('staticPages.sumaev.2') }}</a></span>
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