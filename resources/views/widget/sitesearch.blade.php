@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<h1>{{ trans('sitesearch.head.1') }}</h1>
	<p>{{ trans('sitesearch.head.2') }}</p>
	<h2>{{ trans('sitesearch.head.3') }}</h2>
	<form method="GET" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/sitesearch/") }}" accept-charset="UTF-8">
		<div class="input-group">
			<input type="text"  class="form-control" name="site" placeholder="{{ trans('sitesearch.head.4') }}" required="" value="{{ $site }}">
			<span class="input-group-btn">
				<button class="btn btn-default" type="submit">{{ trans('sitesearch.head.5') }}</button>
			</span>
		</div>
	</form>
	@if ($site !== '')
		<h2>{{ trans('sitesearch.generated.1') }}</h2>
		<form class="metager-searchform" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}/meta/meta.ger3" method="GET">
			<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"><img class="metager-logo" title="{{ trans('sitesearch.generated.2') }}" alt="MetaGer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAABGAgMAAAAx/qk0AAAADFBMVEX/wmn/3KL/6Mj+/vtPnQnhAAAC10lEQVRIx+2XMa7TQBCG1zaJkYwUGp5E5RbR+AJI9g2gQLQ0vDpHsMUJKB49DRIKBRdAco6wN8AFB7CQkfzEZod/Zu3ENgSkbRBStnDkt/uNZ/6ZnX2r6KvyGFujyIdTkVG9F6g+q9YPfKL2fuA9VfmBd1XhB95Rl3EZl/Evxur62dm5gAg7uqSxA613pw2+JqI358CQCD2EqBneEzr1ohLg4WyfJKwMT+CGqonNP4NaxfwYwaOrm7+DGzo6mJ5AeLojcw6M2ctMwNU13jM+GYIXzxUHrtWawQc3TsdXUzAhCJqzQkFNnbjXc3AavljMPxJxNdTvtrOvY2UH2wBhwgrYxUzjfThdMn4L6Rv1c/BTF9AXRMbiVykeLUyIjWbMNN5C+oEvzMCXfURbknnS2QgSPrQfVUCRROzKFEzpqUlsTgipj6l9THb3bnODzxf5oC++nNKewdn5ltHGpCZnz3QIm7Xhc4WzUg4nLwwkpGO4e38K5pQc8g5gCn1Yp36sg9qy+50qLbzRydxRgDa2dVseYEHNQVGE/2Ic2CxBrh04CMOgAjG8ZTlQbZhqA5iKqNnQ4iAuD5itANYsHjLTSlFA1QGUUic9KX43ahPyIqNkvgsZLEcw/EhN5MBJDY9ggBVwx4ERQMmoVVxx0QRcFDkjEpnMt1iJ1bcqhzHi5GsH7rPfgW14lDOS3akROoIuuB9ETs6cli0HOdccmQMZ4u6BoEv8TEC7bDmtKiuOjEtmXQxgCDCXXVaJXA/Z919A0YCrc1UDtB+Qa95SGTcAqli7qwP7vugc7eBgLjnAVjCSxs5lE3Hy04hDc7CRNqBda+KUY5eRBegyr8SiUcvmE0t7YzkiSZ6SIqDv7AjX0q1rdr2ixT+biYBSiLW07Yz3A70eKs8W0l7xs9wc08wcD4qV62rq6r2U2eptcTlGL+O/HN4XFu8rkvelzPsa6H3x9L7q+l6ufwK7PWV5kEbECQAAAABJRU5ErkJggg=="></a>
			<input class="metager-searchinput" name="eingabe" placeholder="{{ trans('sitesearch.generated.3') }}" required="">
			<button class="metager-searchbutton" type="submit">{{ trans('sitesearch.generated.4') }}</button>
			<input type="hidden" name="lang" value="{{ trans('sitesearch.generated.6') }}">
			<input type="hidden" name="encoding" value="utf8">
			<input type="hidden" name="site" value="{{ $site }}">
		</form>
		<h2>{{ trans('sitesearch.generated.5') }} <button id="copyButton" class="btn btn-default" type="button"><i class="fa fa-paperclip" aria-hidden="true"></i> {{ trans('websearch.head.copy') }}</button></h2>
		<textarea id="codesnippet" readonly style="width:100%;height:500px">
			<form class="metager-searchform" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}/meta/meta.ger3" method="get" accept-charset="UTF-8">
				<style type="text/css" scoped>
					.metager-searchinput {
					height: 30px;
					padding: 6px 12px;
					font-size: 14px;
					line-height: 1.42857;
					color: #555;
					background-color: #FFF;
					background-image: none;
					border: 1px solid #CCC;
					border-right: 0px none;
					border-radius: 4px;
					border-top-right-radius: 0px;
					border-bottom-right-radius: 0px;
					margin:0px;
					}
					.metager-searchbutton {
					height: 30px;
					border-left: 0px none;
					border-top-right-radius: 4px;
					border-bottom-right-radius: 4px;
					border-top-left-radius: 0px;
					border-bottom-left-radius: 0px;
					border: 1px solid #CCC;
					padding: 6px 12px;
					margin:0px;
					font-size: 14px;
					font-weight: normal;
					line-height: 1;
					white-space: nowrap;
					color: #555;
					text-align: center;
					background-color: #EEE;
					}
					.metager-logo {
					height: 30px;
					float: left;
					top:-2px;
					margin-right: 3px;
					}
				</style>
				<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"><img class="metager-logo" title="{{ trans('sitesearch.generated.2') }}" alt="MetaGer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAABGAgMAAAAx/qk0AAAADFBMVEX/wmn/3KL/6Mj+/vtPnQnhAAAC10lEQVRIx+2XMa7TQBCG1zaJkYwUGp5E5RbR+AJI9g2gQLQ0vDpHsMUJKB49DRIKBRdAco6wN8AFB7CQkfzEZod/Zu3ENgSkbRBStnDkt/uNZ/6ZnX2r6KvyGFujyIdTkVG9F6g+q9YPfKL2fuA9VfmBd1XhB95Rl3EZl/Evxur62dm5gAg7uqSxA613pw2+JqI358CQCD2EqBneEzr1ohLg4WyfJKwMT+CGqonNP4NaxfwYwaOrm7+DGzo6mJ5AeLojcw6M2ctMwNU13jM+GYIXzxUHrtWawQc3TsdXUzAhCJqzQkFNnbjXc3AavljMPxJxNdTvtrOvY2UH2wBhwgrYxUzjfThdMn4L6Rv1c/BTF9AXRMbiVykeLUyIjWbMNN5C+oEvzMCXfURbknnS2QgSPrQfVUCRROzKFEzpqUlsTgipj6l9THb3bnODzxf5oC++nNKewdn5ltHGpCZnz3QIm7Xhc4WzUg4nLwwkpGO4e38K5pQc8g5gCn1Yp36sg9qy+50qLbzRydxRgDa2dVseYEHNQVGE/2Ic2CxBrh04CMOgAjG8ZTlQbZhqA5iKqNnQ4iAuD5itANYsHjLTSlFA1QGUUic9KX43ahPyIqNkvgsZLEcw/EhN5MBJDY9ggBVwx4ERQMmoVVxx0QRcFDkjEpnMt1iJ1bcqhzHi5GsH7rPfgW14lDOS3akROoIuuB9ETs6cli0HOdccmQMZ4u6BoEv8TEC7bDmtKiuOjEtmXQxgCDCXXVaJXA/Z919A0YCrc1UDtB+Qa95SGTcAqli7qwP7vugc7eBgLjnAVjCSxs5lE3Hy04hDc7CRNqBda+KUY5eRBegyr8SiUcvmE0t7YzkiSZ6SIqDv7AjX0q1rdr2ixT+biYBSiLW07Yz3A70eKs8W0l7xs9wc08wcD4qV62rq6r2U2eptcTlGL+O/HN4XFu8rkvelzPsa6H3x9L7q+l6ufwK7PWV5kEbECQAAAABJRU5ErkJggg=="></a>
				<input class="metager-searchinput" name="eingabe" placeholder="{{ trans('sitesearch.generated.3') }}" required>
				<button class="metager-searchbutton" type="submit">{{ trans('sitesearch.generated.4') }}</button>
				<input type="hidden" name="encoding" value="utf8"&gt;&lt;/input&gt;&lt;input type="hidden" name="site" value="{{ $site }}">
				<input type="hidden" name="lang" value="{{ trans('sitesearch.generated.6') }}">
				<input type="hidden" name="wdgt-version" value="1">
			</form>;
		</textarea>
	@endif
	<script src="{{ mix('js/widgets.js') }}"></script>
@endsection
