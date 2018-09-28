@extends('layouts.subPages')

@section('title', $title )

@section('navbarFocus.datenschutz', 'class="active"')

@section('content')
<style>
main {
    font-size: 10pt;
    hyphens:auto;
    counter-reset: kontext 0 datum 0;
    text-align: justify;
}

h1 {
    font-size: 18pt;
}

.kontext > h1::before {
  counter-increment: kontext;
  content: "K" counter(kontext) " ";
  font-weight: normal;
}

.datum > h1::before {
  counter-increment: datum;
  content: "D" counter(datum) " ";
  font-weight: normal;
}

.kontext h1 {
   font-size: 16pt;
   margin-bottom: inherit;
}
.kontext h2 {
   font-size: 14pt;
   margin-bottom: inherit;
}
.datum h1 {
   font-size: 12pt;
   margin-bottom: inherit;
}
.datum h2 {
   font-size: 11pt;
   margin-bottom: inherit;
   margin-top: 5pt;
}

.kontext-list {
    list-style: none;
}
.datum-list {
    list-style: none;
}

samp {
    hyphens:none;
    font-size: 8pt;
}
</style>
    @if (LaravelLocalization::getCurrentLocale() == "de")
        @include('datenschutz.german')
	@else
        @include('datenschutz.english')
	@endif
@endsection
