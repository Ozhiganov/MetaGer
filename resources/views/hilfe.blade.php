@extends('layouts.subPages', ['page' => 'hilfe'])

@section('title', $title )

@section('content')
	<div class="alert alert-warning" role="alert">{!! trans('hilfe.achtung') !!}</div>
	<h1 class="page-title">{!! trans('hilfe.title') !!}</h1>
	<h2>{!! trans('hilfe.sucheingabe.title') !!}</h2>
	<p>{!! trans('hilfe.sucheingabe.hint') !!}</p>
	<section>
		<h3>{!! trans('hilfe.stopworte.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.stopworte.1') !!}</p>
			<ul class="dotlist">
				<li>{!! trans('hilfe.stopworte.2') !!}</li>
				<div class="search-example">{!! trans('hilfe.stopworte.3') !!}</div>
			</ul>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.mehrwortsuche.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.mehrwortsuche.1') !!}</p>
			<div class = "search-example">der runde tisch</div>
			<p>{!! trans('hilfe.mehrwortsuche.2') !!}</p>
			<ul class="dotlist">
				<li>{!! trans('hilfe.mehrwortsuche.3') !!}</li>
				<div class = "search-example">"der" "runde" "tisch"</div>
				<li>{!! trans('hilfe.mehrwortsuche.4') !!}</li>
				<div class = "search-example">"der runde tisch"</div>
			</ul>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.grossklein.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.grossklein.1') !!}</p>
			<ul class="dotlist">
				<li>{!! trans('hilfe.grossklein.2') !!}</li>
				<div class="search-example">{!! trans('hilfe.grossklein.3') !!}</div>
				<li>{!! trans('hilfe.grossklein.4') !!}</li>
				<div class="search-example">{!! trans('hilfe.grossklein.5') !!}</div>
			</ul>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.domains.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.domains.sitesearch.explanation') !!}</p>
			<ul class="dotlist">
				<li>{!! trans('hilfe.domains.sitesearch.example.1') !!}
				<div class="search-example">{!! trans('hilfe.domains.sitesearch.example.2') !!}</div></li>
				<li>{!! trans('hilfe.domains.sitesearch.example.3') !!}
				<div class="search-example">{!! trans('hilfe.domains.sitesearch.example.4') !!}</div></li>
			</ul>
			<p>{!! trans('hilfe.domains.blacklist.explanation') !!}</p>
			<ul class="dotlist">
				<li>{!! trans('hilfe.domains.blacklist.example.1') !!}</li>
				<li>{!! trans('hilfe.domains.blacklist.example.2') !!}
				<div class="search-example">{!! trans('hilfe.domains.blacklist.example.3') !!}</div>
				{!! trans('hilfe.domains.blacklist.example.4') !!}</li>
				<li>{!! trans('hilfe.domains.blacklist.example.5') !!}
				<div class="search-example">{!! trans('hilfe.domains.blacklist.example.6') !!}</div></li>
			</ul>
			<p>{!! trans('hilfe.domains.showcase.explanation.1') !!}</p>
			@include('parts/fake-result')
			<script>
				function setDummySearch(value) {
					document.getElementById("dummy-search").innerHTML = value
				}
			</script>
			<div>
				<p>{!! trans('hilfe.domains.showcase.menu.1') !!}</p>
				<ul class="dotlist">
					<li>{!! trans('hilfe.domains.showcase.menu.2') !!}</li>
					<li>{!! trans('hilfe.domains.showcase.menu.3') !!}</li>
					<li>{!! trans('hilfe.domains.showcase.menu.4') !!}</li>
					<li>{!! trans('hilfe.domains.showcase.menu.5') !!}</li>
				</ul>
				<p>{!! trans('hilfe.domains.showcase.menu.6') !!}</p>
			</div>
			<div>
				<div class="search-example"><i>meine suche</i> <i id="dummy-search"></span></i>
			</div>
		</div>
	</section>
	<section id="urls">
		<h3>{!! trans('hilfe.urls.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.urls.explanation') !!}</p>
			<ul class="dotlist">
				<li>{!! trans('hilfe.urls.example.1') !!}</li>
				<div class = "search-example">{!! trans('hilfe.urls.example.2') !!}</div>
			</ul>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.bang.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.bang.1') !!}</p>
		</div>
	</section>
	<section id="searchinsearch">
		<h3>{!! trans('hilfe.searchinsearch.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.searchinsearch.1') !!}</p>
		</div>
	</section>
	<h2 id="dienste">{!! trans('hilfe.dienste') !!}</h2>
	<section>
		<div id="mg-app" style="margin-top: -100px"></div>
		<div style="margin-top: 100px"></div>
		<h3>{!! trans('hilfe.app.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.app.1') !!}</p>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.plugin.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.plugin.1') !!}</p>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.suchwortassoziator.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.suchwortassoziator.1') !!}</p>
			<p>{!! trans('hilfe.suchwortassoziator.2') !!}</p>
			<p>{!! trans('hilfe.suchwortassoziator.3') !!}</p>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.widget.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.widget.1') !!}</p>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.urlshort.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.urlshort.1') !!}</p>
		</div>
	</section>
	<h3><i class="fa fa-angle-double-right"></i> {!! trans('hilfe.dienste.kostenlos') !!}</h3>
	<h2>{!! trans('hilfe.datenschutz.title') !!}</h2>
	<section>
		<h3>{!! trans('hilfe.datenschutz.faktencheck.heading') !!}</h3>
		<div>
			<p>@lang('hilfe.datenschutz.faktencheck.body.1')</p>
			<p>@lang('hilfe.datenschutz.faktencheck.body.2')</p>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.datenschutz.1') !!}</h3>
		<div>
			<p>{!! trans('hilfe.datenschutz.2') !!}</p>
			<p>{!! trans('hilfe.datenschutz.3') !!}</p>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.tor.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.tor.1') !!}</p>
			<p>{!! trans('hilfe.tor.2') !!}</p>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.proxy.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.proxy.1') !!}</p>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.infobutton.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.infobutton.1') !!}</p>
		</div>
	</section>
	<section>
		<h3>{!! trans('hilfe.maps.title') !!}</h3>
		<div>
			<p>{!! trans('hilfe.maps.1') !!}</p>
			<p>{!! trans('hilfe.maps.2') !!}</p>
			<p>{!! trans('hilfe.maps.3') !!}</p>
			<p>{!! trans('hilfe.maps.4') !!}</p>
		</div>
	</section>
@endsection
