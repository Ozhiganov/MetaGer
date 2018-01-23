@foreach($quicktips as $quicktip)
  <div class="quicktip" type="{{ $quicktip->type }}">
    @include('layouts.quicktip', ['quicktip' => $quicktip])
  </div>
@endforeach