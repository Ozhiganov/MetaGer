@extends('layouts.subPages', ['page' => 'faq'])

@section('title', $title )

@section('content')
	<div class="alert alert-warning" role="alert">{!! trans('faq.achtung') !!}</div>
	<h1 class="page-title">{!! trans('faq.title') !!}</h1>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.1.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.1.b') !!}</p>
			<p>{!! trans('faq.faq.1.b2') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.2.1.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.2.1.b') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.4.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.4.b') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.6.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.6.b.1') !!}</p>
		<p>{!! trans('faq.faq.6.b.2') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.7.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.7.b', ["widget-link" => LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "widget") ]) !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.8.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.8.b') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.9.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.9.b') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.10.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.10.b') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.11.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.11.b') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.12.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.12.b') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.13.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.13.b.1') !!}</p>
			<p>{!! trans('faq.faq.13.b.2') !!}</p>
			<p>{!! trans('faq.faq.13.b.3') !!}</p>
			<p>{!! trans('faq.faq.13.b.4') !!}</p>
			<p>{!! trans('faq.faq.13.b.5') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.14.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.14.b.1') !!}</p>
			<p>{!! trans('faq.faq.14.b.2') !!}</p>
			<p>{!! trans('faq.faq.14.b.3') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.15.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.15.b') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.16.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.16.b') !!}</p>
		</div>
	</section>
	<section id="bangs">
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.18.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.18.b') !!}</p>
		</div>
	</section>
	<section>
		<div class="panel-heading">
			<h3>{!! trans('faq.faq.21.h') !!}</h3>
		</div>
		<div class="panel-body">
			<p>{!! trans('faq.faq.21.b') !!}</p>
		</div>
	</section>
@endsection
