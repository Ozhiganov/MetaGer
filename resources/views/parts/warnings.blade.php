{{-- Show all warnings --}}
@if(sizeof($warnings) > 0)
	<div class="alert alert-warning">
		<ul>
			@foreach($warnings as $warning)
				<li>{{ $warning }}</li>
			@endforeach
		</ul>
	</div>
@endif