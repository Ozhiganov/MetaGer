<div class="result product">
	<h2 class="result-title">
		<span id="mark">@lang('produktanzeigen')</span>
	</h2>
	<ul id="products" class="lightSlider" >
		@foreach($products as $product)
			<li>
				<div class="product">
					<a href="{{$product["link"]}}" title="{{$product["titel"]}}" target="_blank" rel="noopener">
						<div class="price">{!!$product["price"]!!}</div>
						<img src="{{ $metager->getImageProxyLink($product["image"]) }}" />
						<p class="title">{{$product["titel"]}}</p>
						<p class="shop">{{$product["gefVon"]}}</p>
						<p class="shipping">{{$product["additionalInformation"]["shipping"]}}</p>
					</a>
				</div>
			</li>
		@endforeach
	</ul>
</div>