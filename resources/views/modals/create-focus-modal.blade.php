<input type="checkbox" id="show-create-focus">
<div id="create-focus-modal" tab-index="-1" role="dialog">
	<div id="foki-modal-dialog">
		<div id="foki-modal-content">
			<div id="foki-modal-header">
				<label type="button" id="close-create-focus" role= "button" for="show-create-focus"></label>
				<h4>
					@lang("index.focus-creator.head")
				</h4>
				<p class="text-muted">@lang("index.focus-creator.description")</p>
			</div>
			<div class="modal-body">
				<form id="customize-search" role="form" method="POST"> 
					@foreach( App\Http\Controllers\FokiLoader::loadFoki() as $fokus => $sumas )
						<div class="headingGroup {{ $fokus }}">
							<input type="checkbox" id="toggle-{{ $fokus }}-dropdown" class="focus-dropdown-toggle">
							<label for="toggle-{{ $fokus }}-dropdown" class="focus-category focus-dropdown-label h3">
								@lang("settings.foki." . $fokus)
							</label>
							<div class="row">
								@foreach( $sumas as $name => $data )
								<div class="col-sm-6 col-md-4 col-lg-3">
									<div class="checkbox settings-checkbox">
										<label>
											<input type="checkbox" name="engine_{{ strtolower($name) }}" class="focusCheckbox" @if ($fokus=='web' ) checked @endif>{{ $data['displayName'] }}
											<a class="settings-icon" target="_blank" rel="noopener" href="{{ $data['url'] }}">
												<i class="fa fa-link" aria-hidden="true"></i>
											</a>
										</label>
									</div>
								</div>
								@endforeach
							</div>
						</div>
					@endforeach
					<div class="clearfix">
						<div class="settings-modal-buttons pull-right">
							<button type="submit" class="save-focus-btn btn btn-primary">
								@lang('index.focus-creator.save')
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>