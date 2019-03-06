{{-- Show all errors --}}
@if(sizeof($errors) > 0)
	<div class="alert alert-danger">
		<ul>
			@foreach($errors as $error)
				<li @if($error === trans('metaGer.results.failed')) class="no-results-error" @endif>{!! $error !!}</li>
			@endforeach
		</ul>
	</div>
@endif
