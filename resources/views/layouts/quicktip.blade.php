@if (sizeof($quicktip->details) > 0)
  <details>
    <summary class="quicktip-summary">
      <h1>
        @if (isset($quicktip->link))
          <a href="{{ $quicktip->link }}">{{ $quicktip->title }}</a>
        @else
          {{ $quicktip->title }}
        @endif
      </h1>
      <p>{{ $quicktip->descr }}</p>
      @if
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
        <p>{{ $detail->descr }}</p>
      </div>
    @endforeach
  </details>
@else
  <summary class="quicktip-summary">
    <h1>
      @if (isset($quicktip->link))
        <a href="{{ $quicktip->link }}">{{ $quicktip->title }}</a>
      @else
        {{ $quicktip->title }}
      @endif
    </h1>
    @if
  </summary>
@endif