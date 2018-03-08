@foreach($quicktips as $quicktip)
  <div class="quicktip" type="{{ $quicktip->type }}">
    @include('parts.quicktip', ['quicktip' => $quicktip])
  </div>
@endforeach