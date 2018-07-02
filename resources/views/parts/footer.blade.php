@if ($type === 'startpage' || $type === 'subpage' || $type === 'resultpage')
<footer class="{{ $id }} noprint">
  <div>
    <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "kontakt") }}">{{ trans('sidebar.nav5') }}</a>
    <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "impressum") }}">{{ trans('sidebar.nav8') }}</a>
    <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "datenschutz") }}">{{ trans('sidebar.nav3') }}</a>
    @if(LaravelLocalization::getCurrentLocale() == "de")
      <a href="https://shop.spreadshirt.de/metager/" rel="noopener" target="_blank">{{ trans('sidebar.nav26') }}</a>
    @endif
  </div>
  <div>
    <span class="hidden-xs">{{ trans('footer.sumaev.1') }} <a href="https://www.suma-ev.de/">{{ trans('footer.sumaev.2') }}</a></span>
  </div>
</footer>
@endif