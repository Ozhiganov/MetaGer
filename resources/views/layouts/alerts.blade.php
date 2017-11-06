@if (isset($success))
  <div class="alert alert-success" role="alert">{{ $success }}</div>
@endif
@if (isset($info))
  <div class="alert alert-info" role="alert">{{ $info }}</div>
@endif
@if (isset($warning))
  <div class="alert alert-warning" role="alert">{{ $warning }}</div>
@endif
@if (isset($error))
  <div class="alert alert-danger" role="alert">{{ $error }}</div>
@endif