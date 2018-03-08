@if ($type === 'startpage' || $type === 'subpage' || $type === 'resultpage')
<footer class="{{ $id }} noprint">
  <div id="info">
    <span><a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "kontakt") }}">{{ trans('sidebar.nav5') }}</a> - <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "impressum") }}">{{ trans('sidebar.nav8') }}</a>@if(LaravelLocalization::getCurrentLocale() == "de") - <a href="https://shop.spreadshirt.de/metager/" rel="noopener" target="_blank">{{ trans('sidebar.nav26') }}</a>@endif</span>
    <span class="hidden-xs">{{ trans('footer.sumaev.1') }}<a href="https://www.suma-ev.de/">{{ trans('footer.sumaev.2') }}</a></span>
  </div>
</footer>
@endif