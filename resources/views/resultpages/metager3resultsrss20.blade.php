<?xmlversion = "1.0"encoding = "UTF-8"?>
 <rss version="2.0"
      xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/"
      xmlns:mg="http://metager.de/opensearch/"
      xmlns:atom="http://www.w3.org/2005/Atom">
   <channel>
     <title>{!! htmlspecialchars($eingabe, ENT_XML1, 'UTF-8'); !!} - MetaGer</title>
     <opensearch:totalResults>{{ $resultcount }}</opensearch:totalResults>
     <opensearch:Query role="request" searchTerms="{{ htmlspecialchars($eingabe, ENT_QUOTES) }}"/>
     <mg:nextSearchResults url="{{htmlspecialchars($metager->nextSearchLink() ,ENT_QUOTES)}}" />
      @if($apiAuthorized)
        @foreach($metager->getResults() as $result)
          <item>
            <title>{!! htmlspecialchars($result->titel, ENT_XML1, 'UTF-8'); !!}</title>
            <link>{!! htmlspecialchars($result->link, ENT_XML1, 'UTF-8'); !!}</link>
            <mg:anzeigeLink>{!! htmlspecialchars($result->anzeigeLink, ENT_XML1, 'UTF-8'); !!}</mg:anzeigeLink>
            <description>
              {!! htmlspecialchars($result->longDescr, ENT_XML1, 'UTF-8'); !!}
            </description>
          </item>
        @endforeach
      @endif
    </channel>
 </rss>
