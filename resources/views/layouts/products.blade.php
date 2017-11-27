<div class="row lightSliderContainer hidden">
	<div class="col-sm-1 hidden-xs"></div>
	<div class="result-information col-xs-12 col-sm-11">
		<span id="mark">Produktanzeigen:</span>
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
</div>
