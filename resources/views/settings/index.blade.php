@extends('layouts.subPages')

@section('title', $title )

@section('content')
<div class="card-heavy">
    <h2>Sucheinstellungen ({{ $fokus }})</h2>
    <p>Hier können Sie Sucheinstellungen für Ihre MetaGer Suche im Fokus {{ $fokus }} vornehmen. Diese bleiben solange gespeichert, wie Sie Cookies im Browser speichern.</p>
</div>

@endsection
