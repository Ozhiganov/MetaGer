<!DOCTYPE html>
<html>

<head>
    <title>{{ $metager->getQ() }} - MetaGer</title>
    <link href="/css/bootstrap.css" rel="stylesheet" />
    <link href="/css/styleResultPage.css" rel="stylesheet" />
    @if( isset($mobile) )
    <link href="/css/styleResultPageMobile.css" rel="stylesheet" />
    @endif
    <link href="/css/theme.css.php" rel="stylesheet" />
    <link href="/favicon.ico" rel="icon" type="image/x-icon" />
    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <meta content="width=device-width, initial-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="{{ getmypid() }}" name="p" />
    <meta content="{{ $eingabe }}" name="q" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body id="resultBody">
    <div class="content-wrapper">
        <header id="research">
            <nav>
                <ul class="list-inline">
                    <li class="hidden-xs hidden-sm pull-left">
                        <div class="logo"><a href="/"><h1>MetaGer</h1></a>
                        </div>
                    </li>
                    <li class="visible-xs visible-sm pull-left">
                        <div class="logo"><a href="/"><h1>MG</h1></a>
                        </div>
                    </li>
                    <li class="pull-right">
                        <form method="get" accept-charset="UTF-8" class="form" id="submitForm">
                            <div class="input-group">
                                <input autocomplete="off" class="form-control" form="submitForm" id="eingabeTop" name="eingabe" placeholder="Suchbegriffe erweitern/verändern, oder völlig neue Suche:" tabindex="1" type="text" value="{{ $eingabe }}" />
                                <div class="input-group-addon">
                                    <button type='submit' form="submitForm" id='search'><span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                            </div>

                            @foreach( $metager->request->all() as $key => $value)
                                @if($key !== "eingabe")
                                <input type='hidden' name='{{ $key }}' value='{{ $value }}' form='submitForm' />
                                @endif
                            @endforeach

                        </form>
                    </li>
                </ul>
            </nav>
        </header>
        <ul class="nav nav-tabs" id="foki" role="tablist">
        @if( $metager->getFokus() === "web" )
        <li id="webTabSelector" role="presentation" data-loaded="1" class="active">
            <a aria-controls="web" data-href="#web" href="#web">
                <span class='glyphicon glyphicon-globe'></span> 
                <span class="hidden-xs">Web</span>
            </a>
        </li>
        @else
            <li data-loaded="0" id="webTabSelector" role="presentation">
                <a aria-controls="web" data-href="{{ $metager->generateSearchLink('web') }}" href="{{ $metager->generateSearchLink('web') }}">
                    <span class='glyphicon glyphicon-globe'></span> 
                    <span class="hidden-xs">Web</span>
                </a>
            </li>
        @endif

        @if( $metager->getFokus() === "bilder" )
        <li id="bilderTabSelector" role="presentation" data-loaded="1" class="active">
            <a aria-controls="bilder" data-href="#bilder" href="#bilder">
                <span class='glyphicon glyphicon-picture'></span> 
                <span class="hidden-xs">Bilder</span>
            </a>
        </li>
        @else
        <li data-loaded="0" id="bilderTabSelector" role="presentation">
            <a aria-controls="bilder" data-href="{{ $metager->generateSearchLink('bilder') }}" href="{{ $metager->generateSearchLink('bilder') }}">
                <span class='glyphicon glyphicon-picture'></span> 
                <span class="hidden-xs">Bilder</span>
            </a>
        </li>
        @endif

        @if( $metager->getFokus() === "nachrichten" )
        <li id="nachrichtenTabSelector" role="presentation" data-loaded="1" class="active">
            <a aria-controls="nachrichten" data-href="#nachrichten" href="#nachrichten">
                <span class='glyphicon glyphicon-bullhorn'></span> 
                <span class="hidden-xs">Nachrichten</span>
            </a>
        </li>
        @else
        <li data-loaded="0" id="nachrichtenTabSelector" role="presentation" >
            <a aria-controls="nachrichten" data-href="{{ $metager->generateSearchLink('nachrichten') }}" href="{{ $metager->generateSearchLink('nachrichten') }}">
                <span class='glyphicon glyphicon-bullhorn'></span> 
                <span class="hidden-xs">Nachrichten</span>
            </a>
        </li>
        @endif

        @if( $metager->getFokus() === "wissenschaft" )
        <li id="wissenschaftTabSelector" role="presentation" data-loaded="1" class="active">
            <a aria-controls="wissenschaft" data-href="#wissenschaft" href="#wissenschaft">
                <span class='glyphicon glyphicon-file'></span> 
                <span class="hidden-xs">Wissenschaft</span>
            </a>
        </li>
        @else
        <li data-loaded="0" id="wissenschaftTabSelector" role="presentation">
            <a aria-controls="wissenschaft" data-href="{{ $metager->generateSearchLink('wissenschaft') }}" href="{{ $metager->generateSearchLink('wissenschaft') }}">
                <span class='glyphicon glyphicon-file'></span> 
                <span class="hidden-xs">Wissenschaft</span>
            </a>
        </li>
        @endif

        @if( $metager->getFokus() === "produktsuche" )
        <li id="produktsucheTabSelector" role="presentation" data-loaded="1" class="active">
            <a aria-controls="produktsuche" data-href="#produktsuche" href="#produktsuche">
                <span class='glyphicon glyphicon-shopping-cart'></span> 
                <span class="hidden-xs">Produktsuche</span>
            </a>
        </li>
        @else
        <li data-loaded="0" id="produktsucheTabSelector" role="presentation" >
            <a aria-controls="produktsuche" data-href="{{ $metager->generateSearchLink('produktsuche') }}" href="{{ $metager->generateSearchLink('produktsuche') }}">
                <span class='glyphicon glyphicon-shopping-cart'></span> 
                <span class="hidden-xs">Produktsuche</span>
            </a>
        </li>
        @endif

        @if( $metager->getFokus() === "angepasst" )
        <li id="angepasstTabSelector" role="presentation" data-loaded="1" class="active">
            <a aria-controls="angepasst" data-href="#angepasst" href="#angepasst">
                <span class='glyphicon glyphicon-cog'></span> 
                <span class="hidden-xs">angepasst</span>
            </a>
        </li>
        @endif
        </ul>

        <div class="tab-content container-fluid">
            @if( sizeof($errors) > 0 )
                <div class="alert alert-danger">
                    <ul>
                        @foreach($errors as $error)
                        <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            @if( sizeof($warnings) > 0)
                <div class="alert alert-warning">
                    <ul>
                        @foreach($warnings as $warning)
                        <li>{{ $warning }}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
            
            @if( $metager->getFokus() === "web" )
            <div role="tabpanel" class="tab-pane active" id="web">
                <div class="row">
                    @yield('results')
                </div>
            </div>
            @else
            <div role="tabpanel" class="tab-pane" id="web">
                <div class="loader">
                    <img src="/img/ajax-loader.gif" alt="" />
                </div>
            </div>
            @endif
            

            
            @if( $metager->getFokus() === "bilder" )
            <div role="tabpanel" class="tab-pane active" id="bilder">
                <div class="row">
                    @yield('results')
                </div>
            </div>
            @else
            <div role="tabpanel" class="tab-pane" id="bilder">
                <div class="loader">
                    <img src="/img/ajax-loader.gif" alt="" />
                </div>
            </div>
            @endif
            

            
            @if( $metager->getFokus() === "nachrichten" )
            <div role="tabpanel" class="tab-pane active" id="nachrichten">
                <div class="row">
                    @yield('results')
                </div>
            </div>
            @else
            <div role="tabpanel" class="tab-pane" id="nachrichten">
                <div class="loader">
                    <img src="/img/ajax-loader.gif" alt="" />
                </div>
            </div>
            @endif
            
            @if( $metager->getFokus() === "wissenschaft" )
            <div role="tabpanel" class="tab-pane active" id="wissenschaft">
                <div class="row">
                    @yield('results')
                </div>
             </div>
            @else
            <div role="tabpanel" class="tab-pane" id="wissenschaft">
                <div class="loader">
                    <img src="/img/ajax-loader.gif" alt="" />
                </div>
            </div>
            @endif
            
            @if( $metager->getFokus() === "produktsuche" )
            <div role="tabpanel" class="tab-pane active" id="produktsuche">
                <div class="row">
                        @yield('results')
                </div>
             </div>
            @else
            <div role="tabpanel" class="tab-pane" id="produktsuche">
                <div class="loader">
                    <img src="/img/ajax-loader.gif" alt="" />
                </div>
            </div>
            @endif
           

            
            @if( $metager->getFokus() === "angepasst" )
            <div role="tabpanel" class="tab-pane active" id="angepasst">
                <div class="row">
                        @yield('results')
                </div>
            </div>
            @endif
        </div>
    </div>

        
    <footer>
        <ul class="list-unstyled list-inline footer">
            <li class="left"><a class="btn btn-default" href="/">MetaGer-Startseite</a>
            </li>
            <li class="right"><a class="btn btn-default" href="/impressum/">Impressum</a>
            </li>
        </ul>
    </footer>
    <script src="/js/jquery.js" type="text/javascript"></script>
    <script src="/js/bootstrap.js" type="text/javascript"></script>
    <script src="/js/masonry.js" type="text/javascript"></script>
    <script src="/js/imagesloaded.js" type="text/javascript"></script>
    <script src="/js/scriptResultPage.js" type="text/javascript"></script>
    <!--[if lte IE 8]><script type="text/javascript" src="/js/html5shiv.min.js"></script><![endif]-->
</body>

</html>