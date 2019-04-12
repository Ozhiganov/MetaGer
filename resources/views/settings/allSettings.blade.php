@extends('layouts.subPages')

@section('title', $title )

@section('content')
<div id="all-settings">
    <div class="card-light">
        <h2>Auf {{ Request::root() }} gesetzte Einstellungen</h2>
        <p>Hier finden Sie eine Übersicht aller von Ihnen gesetzten Einstellungen und Cookies. Sie können einzelne Einträge löschen, oder alle entfernen. Bedenken Sie, dass die zugehörigen Einstellungen dann nicht mehr verwendet werden.</p>

        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Cookie</th>
                        <th>Bedeutung</th>
                        <th>Aktionen</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach(Cookie::get() as $key => $value)
                    <tr>
                        <td>{{ $key . "=" . $value }}</td>
                        <td>
                        @if(strpos($key, "_engine_") !== FALSE)
                        Die Suchmaschine {{ $sumaFile->sumas->{substr($key, strrpos($key, "_")+1)}->{"display-name"} }} wird im Fokus @lang('index.foki.' . substr($key, 0, strpos($key, "_"))) nicht abgefragt.
                        @elseif(strpos($key, "_setting_") !== FALSE)
                            @foreach($sumaFile->filter->{"parameter-filter"} as $filterName => $filter)
                                @if($filter->{"get-parameter"} === substr($key, strrpos($key, "_")+1))
                                @lang($filter->name)=@lang($filter->values->$value) im Fokus @lang('index.foki.' . substr($key, 0, strpos($key, "_")))
                                @endif
                            @endforeach
                        @elseif($key === "key")
                        Ihr Schlüssel für die werbefreie Suche
                        @endif
                        </td>
                        <td>
                            <form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('removeOneSetting')) }}" method="post">
                                <input type="hidden" name="key" value="{{ $key }}">
                                <input type="hidden" name="url" value="{{ url()->full() }}">
                                <button type="submit" title="Diesen Cookie entfernen">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>

            <div id="actions">
                <a href="{{ $url }}" class="btn btn-sm btn-default">Zurück zur letzten Seite</a>
                <form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('removeAllSettings'))}}" method="post">
                    <input type="hidden" name="url" value="{{ url()->full() }}">
                    <button type="submit" class="btn btn-sm btn-danger">Alle Einstellungen entfernen</button>
                </form>
            </div>
        </div>
    </div>
</div>
<style>
#actions {
    display: flex;
    margin-left: -8px;
    align-items: center;
    justify-content: center;
}
#actions > a, #actions > form {
    margin-left: 8px;
}
</style>
@endsection
