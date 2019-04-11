@extends('layouts.subPages')

@section('title', $title )

@section('content')
<div id="settings">
    <div class="card-light">
        <h2>Sucheinstellungen ({{ $fokusName }})</h2>
        <p>Hier können Sie Sucheinstellungen für Ihre MetaGer Suche im Fokus {{ $fokusName }} vornehmen. Diese bleiben solange gespeichert, wie Sie Cookies im Browser speichern.</p>
    </div>
    <div class="card-light">
        <h2>Verwendete Suchmaschinen</h2>
        <p>Nachfolgend sehen Sie alle für diesen Fokus verfügbaren Suchmaschinen. Mit einem Klick auf den Namen können Sie Ein-/Ausgeschaltet werden. Eingeschaltete Suchmaschinen sind in grün dargestellt. Ausgeschaltete in rot oder grau.</p>
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
        <h2>Suchfilter</h2>
        <p>An dieser Stelle können Sie Suchfilter dauerhaft setzen. Mit der Auswahl eines Suchfilters stehen nur noch Suchmaschinen zur Verfügung, welche diesen Filter unterstützen. Umgekehrt werden auch nur Suchfilter angezeigt, welche von der aktuellen Suchmaschinenauswahl unterstützt werden.</p>
        <form id="filter-form" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('enableFilter')) }}" method="post" class="form">
            <input type="hidden" name="fokus" value="{{ $fokus }}">
            <input type="hidden" name="url" value="{{ $url }}">
            <div id="filter-options">
                @foreach($filter as $name => $filterInfo)
                <div class="form-group">
                    <label for="{{ $filterInfo->{"get-parameter"} }}">@lang($filterInfo->name)</label>
                    <select name="{{ $filterInfo->{"get-parameter"} }}" id="{{ $filterInfo->{"get-parameter"} }}" class="form-control">
                        <option value="" @if(Cookie::get($fokus . "_setting_" . $filterInfo->{"get-parameter"}) === null)disabled selected @endif>Beliebig</option>
                        @foreach($filterInfo->values as $key => $value)
                        @if(!empty($key))
                        <option value="{{ $key }}" {{ Cookie::get($fokus . "_setting_" . $filterInfo->{"get-parameter"}) === $key ? "disabled selected" : "" }}>@lang($value)</option>
                        @endif
                        @endforeach
                    </select>
                </div>
                @endforeach
            </div>
            <button type="submit" class="btn btn-default">Speichern</button>
        </form>

    </div>
    <div class="card-light" id="actions">
        @if($settingActive)
        <div id="reset">
            <form action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), route('deleteSettings', ["fokus" => $fokus, "url" => $url])) }}" method="post">
                <input type="hidden" name="url" value="{{ $url }}">
                <input type="hidden" name="fokus" value="{{ $fokus }}">
                <button type="submit" class="btn btn-sm btn-danger">Alle Einstellungen löschen</button>
            </form>
        </div>
        @endif
        <div id="back">
            <a href="{{ $url }}" class="btn btn-sm btn-default">Zurück zur letzten Seite</a>
        </div>
    </div>

    <script src="{{ mix('js/scriptSettings.js') }}"></script>
</div>
@endsection
