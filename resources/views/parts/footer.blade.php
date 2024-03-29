@if ($type === 'startpage' || $type === 'subpage' || $type === 'resultpage')
<footer class="{{ $id }} noprint">
  <div>
    <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "kontakt") }}">{{ trans('sidebar.nav5') }}</a>
    <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "impressum") }}">{{ trans('sidebar.nav8') }}</a>
    <a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "datenschutz") }}">{{ trans('sidebar.nav3') }}</a>
  </div>
  @if($type !== 'startpage')
  <div>
    <span class="hidden-xs">{{ trans('footer.sumaev.1') }} <a href="{{ trans('footer.sumaev.link') }}">{{ trans('footer.sumaev.2') }}</a></span>
  </div>
  @endif
</footer>
@endif
