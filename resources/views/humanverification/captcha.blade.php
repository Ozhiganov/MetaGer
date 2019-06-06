@extends('layouts.subPages')

@section('title', $title )

@section('content')
    <h1>@lang('captcha.1')</h1>
    <p>@lang('captcha.2')</p>
    <p>@lang('captcha.3')</p>
    <p>@lang('captcha.4')</p>
    <form method="post" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('verification', ['id' => $id])) }}">
        <input type="hidden" name="url" value="{!! $url !!}">
        <input type="hidden" name="id" value="{{ $id }}">
        <p><img src="{{ $image }}" /></p>
        @if(isset($errorMessage))
        <p><font color="red">{{$errorMessage}}</font></p>
        @endif
        <p><input type="text" class="form-control" name="captcha" placeholder="@lang('captcha.5')" autofocus></p>
        <p><input type="text" class="form-control" name="dw" placeholder="@lang('captcha.6')"></p>
        <p><button type="submit" class="btn btn-success" name="check">OK</button></p>
    </form>
    <p>@lang('captcha.7', ['url' => LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), 'kontakt')])</p>
    <p>@lang('captcha.8') {{ $id }}
@endsection
