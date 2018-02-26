@if ($type === 'startpage' || $type === 'subpage' || $type === 'resultpage')
<footer class="{{ $id }} noprint">
  <div id="info">
    <span><a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "kontakt") }}">{{ trans('staticPages.nav5') }}</a> - <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "impressum") }}">{{ trans('staticPages.nav8') }}</a>@if(LaravelLocalization::getCurrentLocale() == "de") - <a href="https://shop.spreadshirt.de/metager/" rel="noopener" target="_blank">Fanshop</a>@endif</span>
    <span class="hidden-xs">{{ trans('staticPages.sumaev.1') }}<a href="https://www.suma-ev.de/">{{ trans('staticPages.sumaev.2') }}</a></span>
  </div>
</footer>
@endif