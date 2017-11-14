<div id="create-focus-modal" class="modal fade" tab-index="-1" role="dialog">
	<div class="modal-dialog modal-lg">
		<div class="content modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<h4>
					@lang("index.focus-creator.head")
				</h4>
				<p class="text-muted">@lang("index.focus-creator.description")</p>
			</div>
			<div class="modal-body">
				<div class="clearfix">
					<div class="pull-left">
						<label for="focus-name">@lang('index.focus-creator.focusname')</label>
						<input id="focus-name" type="text" name="focus-name" placeholder="@lang('index.focus-creator.name-placeholder')">
						<input id="original-id" type="hidden" name="original-id" value="">
					</div>
					<div class="settings-modal-buttons pull-right">
						<button class="delete-focus-btn btn btn-danger">
							@lang('index.focus-creator.delete')
						</button>
						<button class="save-focus-btn btn btn-primary">
							@lang('index.focus-creator.save')
						</button>
					</div>
				</div>
				@foreach( App\Http\Controllers\FokiLoader::loadFoki() as $fokus => $sumas )
					<div class="headingGroup {{ $fokus }}">
						<h3 class="focus-category">
							@lang("settings.foki." . $fokus)
						</h3>
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
						<button class="delete-focus-btn btn btn-danger">
							@lang('index.focus-creator.delete')
						</button>
						<button class="save-focus-btn btn btn-primary">
							@lang('index.focus-creator.save')
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>