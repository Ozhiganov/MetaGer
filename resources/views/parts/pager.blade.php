{{-- Show pagination --}}
<nav class="mg-pager" aria-label="...">
    <div @if($metager->getPage() === 1) class="disabled" @endif>
        <a @if($metager->getPage() !== 1) href="javascript:history.back()" @endif>{{ trans('results.zurueck') }}</a>
    </div>
    <div id="next-search-link" @if($metager->nextSearchLink() === "#") class="disabled" @endif>
        <a @if($metager->nextSearchLink() !== "#") href="{{ $metager->nextSearchLink() }}" @endif>{{ trans('results.weiter') }}</a>
    </div>
</nav>
