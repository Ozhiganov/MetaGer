@extends('layouts.subPages')

@section('title', $title )

@section('content')
<div id="settings">
    <div class="card-light">
        <h2>@lang('settings.allSettings.header', ["root" => Request::root()])</h2>
        <p>@lang('settings.allSettings.text')</p>
        @if(sizeof(Cookie::get()) > 0)
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Cookie</th>
                        <th>@lang('settings.meaning')</th>
                        <th>@lang('settings.actions')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach(Cookie::get() as $key => $value)
                    <tr>
                        <td>{{ $key . "=" . $value }}</td>
                        <td>
                        @if(strpos($key, "_engine_") !== FALSE)
                        @lang('settings.engineDisabled', ["engine" => $sumaFile->sumas->{substr($key, strrpos($key, "_")+1)}->{"display-name"}, "focus" => trans('index.foki.' . substr($key, 0, strpos($key, "_")))])
                        @elseif(strpos($key, "_setting_") !== FALSE)
                            @foreach($sumaFile->filter->{"parameter-filter"} as $filterName => $filter)
                                @if($filter->{"get-parameter"} === substr($key, strrpos($key, "_")+1))
                                @lang($filter->name)=@lang($filter->values->$value) @lang('settings.inFocus') @lang('index.foki.' . substr($key, 0, strpos($key, "_")))
                                @endif
                            @endforeach
                        @elseif($key === "key")
                        @lang('settings.key')
                        @endif
                        </td>
                        <td>
                            <form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('removeOneSetting')) }}" method="post">
                                <input type="hidden" name="key" value="{{ $key }}">
                                <input type="hidden" name="url" value="{{ url()->full() }}">
                                <button type="submit" title="@lang('settings.removeCookie')">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            @else
            <p id="no-settings">@lang('settings.noSettings')</p>
            @endif
        </div>
        <div id="actions">
                <a href="{{ $url }}" class="btn btn-sm btn-default">@lang('settings.back')</a>
                @if(sizeof(Cookie::get()) > 0)
                <form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('removeAllSettings'))}}" method="post">
                    <input type="hidden" name="url" value="{{ url()->full() }}">
                    <button type="submit" class="btn btn-sm btn-danger">@lang('settings.reset')</button>
                </form>
                @endif
            </div>
    </div>
</div>
@endsection
