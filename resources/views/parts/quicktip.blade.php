@if (sizeof($quicktip->details) > 0)
  <details>
    <summary class="quicktip-summary">
      @if ($quicktip->title != "")
        <h1>
          @if ($quicktip->link != "")
            <a href="{{ $quicktip->link }}">{{ $quicktip->title }}</a>
          @else
            {{ $quicktip->title }}
          @endif
        </h1>
      @endif
      <p>{!! $quicktip->descr !!}</p>
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
    @if ($quicktip->title != "")
      <h1>
        @if ($quicktip->link != "")
          <a href="{{ $quicktip->link }}">{{ $quicktip->title }}</a>
        @else
          {{ $quicktip->title }}
        @endif
      </h1>
    @endif
    <p>{!! $quicktip->descr !!}</p>
  </div>
@endif