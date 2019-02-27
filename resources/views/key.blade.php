@extends('layouts.subPages', ['page' => 'key'])

@section('title', $title )

@section('content')
<link type="text/css" rel="stylesheet" href="{{ mix('/css/key.css') }}" />
<div id="key-site">
    <div class="section">
        <h1>Schlüssel für Ihre Werbefreie Suche</h1>
        <p>MetaGer bietet seinen <a href="{{LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), '/beitritt')}}">Mitgliedern</a> und großzügigen <a href="{{LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), '/spende')}}">Spendern</a> einen Schlüssel an, mit dem die Suchmaschine komplett werbefrei verwendet werden kann.</p>
        <p>Auf dieser Seite können Sie Ihren Schlüssel (sofern bekannt) eingeben. Wir speichern diesen mit Hilfe eines Cookies auf Ihrem PC. Auf diese Weise sendet Ihr Browser den Schlüssel automatisch bei jeder durchgeführten Suche an uns, sodass wir die Werbung für Sie entfernen können. Der Schlüssel wird natürlich zu keinem Zeitpunkt so verwendet, dass wir die durchgeführten Suchen Ihnen persönlich zuordnen könnten. Er wird von uns auch nicht gespeichert, oder geloggt.</p>
        <p>Wichtig: Um diese Funktion nutzen zu können, müssen Sie Cookies in Ihrem Browser zugelassen haben. Die Einstellung bleibt dann solange gespeichert, wie Ihr Browser Cookies speichert.</p>
    </div>
    <div class="section">
        <form method="post">
            <input type="hidden" name="redirUrl" value="{{ Request::input('redirUrl', '') }}" />
            <input type="text" name="key" placeholder="Schlüssel eingeben...">
            <button type="submit" class="btn btn-success">OK</button>
        </form>
    </div>
</div>
@endsection
