@extends('layouts.subPages')

@section('title', $title )

@section('content')
<div id="settings">
    <div class="card-light">
        <h2>@lang('settings.header.1') ({{ $fokusName }})</h2>
        <p>@lang('settings.text.1', ["fokusName" => $fokusName])</p>
    </div>
    <div class="card-light">
        <h2>@lang('settings.hint.header')</h2>
        <p>@lang('settings.hint.text')</p>
    </div>
    <div class="card-light">
        <h2>@lang('settings.header.2')</h2>
        <p>@lang('settings.text.2')</p>
        <p></p>
        <div class="sumas enabled-engines">
            @foreach($sumas as $suma => $sumaInfo)
            @if(! $sumaInfo["filtered"] && $sumaInfo["enabled"])
                <div class="suma">
                    <form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('disableEngine')) }}" method="post">
                        <input type="hidden" name="suma" value="{{ $suma }}">
                        <input type="hidden" name="fokus" value="{{ $fokus }}">
                        <input type="hidden" name="url" value="{{ $url }}">
                        <button type="submit">{{ $sumaInfo["display-name"] }}</button>
                    </form>
                </div>
            @endif
            @endforeach
        </div>
        <div class="sumas disabled-engines">
            @foreach($sumas as $suma => $sumaInfo)
            @if( !$sumaInfo["filtered"] && !$sumaInfo["enabled"])
                <div class="suma">
                    <form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('enableEngine')) }}" method="post">
                        <input type="hidden" name="suma" value="{{ $suma }}">
                        <input type="hidden" name="fokus" value="{{ $fokus }}">
                        <input type="hidden" name="url" value="{{ $url }}">
                        <button type="submit">{{ $sumaInfo["display-name"] }}</button>
                    </form>
                </div>
            @endif
            @endforeach
        </div>
        @if($filteredSumas)
        <h4>Durch Suchfilter deaktiviert:</h4>
        <div class="sumas filtered-engines">
            @foreach($sumas as $suma => $sumaInfo)
            @if($sumaInfo["filtered"])
                <div class="suma">
                    {{ $sumaInfo["display-name"] }}
                </div>
            @endif
            @endforeach
        </div>
        @endif
    </div>
    <div class="card-light">
        <h2>@lang('settings.header.3')</h2>
        <p>@lang('settings.text.3')</p>
        <form id="filter-form" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('enableFilter')) }}" method="post" class="form">
            <input type="hidden" name="fokus" value="{{ $fokus }}">
            <input type="hidden" name="url" value="{{ $url }}">
            <div id="filter-options">
                @foreach($filter as $name => $filterInfo)
                <div class="form-group">
                    <label for="{{ $filterInfo->{"get-parameter"} }}">@lang($filterInfo->name)</label>
                    <select name="{{ $filterInfo->{"get-parameter"} }}" id="{{ $filterInfo->{"get-parameter"} }}" class="form-control">
                        <option value="" @if(Cookie::get($fokus . "_setting_" . $filterInfo->{"get-parameter"}) === null)disabled selected @endif>@lang('metaGer.filter.noFilter')</option>
                        @foreach($filterInfo->values as $key => $value)
                        @if(!empty($key))
                        <option value="{{ $key }}" {{ Cookie::get($fokus . "_setting_" . $filterInfo->{"get-parameter"}) === $key ? "disabled selected" : "" }}>@lang($value)</option>
                        @endif
                        @endforeach
                    </select>
                </div>
                @endforeach
            </div>
            <button type="submit" class="btn btn-default">@lang('settings.save')</button>
        </form>

    </div>
    <div class="card-light" id="actions">
        @if($settingActive)
        <div id="reset">
            <form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('deleteSettings', ["fokus" => $fokus, "url" => $url])) }}" method="post">
                <input type="hidden" name="url" value="{{ $url }}">
                <input type="hidden" name="fokus" value="{{ $fokus }}">
                <button type="submit" class="btn btn-sm btn-danger">@lang('settings.reset')</button>
            </form>
        </div>
        @endif
        <div id="back">
            <a href="{{ $url }}" class="btn btn-sm btn-default">@lang('settings.back')</a>
        </div>
    </div>

    <script src="{{ mix('js/scriptSettings.js') }}"></script>
</div>
@endsection
