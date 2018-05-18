@if (sizeof($quicktip->details) > 0)
  <details>
    <summary class="quicktip-summary">
      <div class="quicktip-headline">
        @if ($quicktip->title != "")
          <h1 class="quicktip-title">
            @if ($quicktip->link != "")
              <a href="{{ $quicktip->link }}">{{ $quicktip->title }}</a>
            @else
              {{ $quicktip->title }}
            @endif
          </h1>
        @endif
        <div class="space-taker"></div>
        @if ($quicktip->gefVonLink != "")
          <a class="quicktip-hoster" href="{{ $quicktip->gefVonLink }}" target="_blank" rel="noopener">
            @if ($quicktip->gefVonTitle != "")
              {{ $quicktip->gefVonTitle }}
            @else
              {{ $quicktip->gefVonTitle }}
            @endif
          </a>
        @endif
        <i class="quicktip-extender fa fa-chevron-down"></i>
      </div>
      <p class="quicktip-description">{!! $quicktip->descr !!}</p>
    </summary>
    @foreach ($quicktip->details as $detail)
      <div class="quicktip-detail">
        <h2>
          @if (isset($detail->link))
            <a href="{{ $detail->link }}">{{ $detail->title }}</a>
          @else
            {{ $detail->title }}
          @endif
        </h2>
        <p>{!! $detail->descr !!}</p>
      </div>
    @endforeach
  </details>
@else
  <div class="quicktip-summary">
    <div class="quicktip-headline">
      @if ($quicktip->title != "")
        <h1 class="quicktip-title">
          @if ($quicktip->link != "")
            <a href="{{ $quicktip->link }}">{{ $quicktip->title }}</a>
          @else
            {{ $quicktip->title }}
          @endif
        </h1>
        <div class="space-taker"></div>
        @if ($quicktip->gefVonLink != "")
          <a class="quicktip-hoster" href="{{ $quicktip->gefVonLink }}" target="_blank" rel="noopener">
            @if ($quicktip->gefVonTitle != "")
              {{ $quicktip->gefVonTitle }}
            @else
              {{ $quicktip->gefVonTitle }}
            @endif
          </a>
        @endif
      @endif
    </div>
    <p>{!! $quicktip->descr !!}</p>
  </div>
@endif