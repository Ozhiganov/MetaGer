<?php
header("Content-type: text/css");
$color = "@metager-orange";
$colorRGBA = "rgba(255, 128, 0, 1)";
if (isset($_GET['r']) && isset($_GET['g']) && isset($_GET['b']) && isset($_GET['a'])) {
    $color = "rgb(" . $_GET['r'] . "," . $_GET['g'] . "," . $_GET['b'] . ")";
    $colorRGBA = "rgba(" . $_GET['r'] . "," . $_GET['g'] . "," . $_GET['b'] . "," . $_GET['a'] . ")";
}
?>

@CHARSET "UTF-8";

input[type=text]:focus, textarea:focus, input[type=email]:focus, input[type=tel]:focus {
	outline-color: <?=$color?>;
	-webkit-box-shadow: 0px 0px 2px 2px <?=$colorRGBA?>;
	-moz-box-shadow: 0px 0px 2px 2px <?=$colorRGBA?>;
	box-shadow: 0px 0px 2px 2px <?=$colorRGBA?>;
  border-color: <?=$colorRGBA?>;
}

.logo h1{
	color: <?=$color?>;
}

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
	background-color: <?=$color?>;
	border-color: <?=$color?>;
}

.pagination > li > a, .pagination > li > span{
	color: <?=$color?>;
}

.pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus{
	color: <?=$color?>;
}

.navbar, #navbar-static-pages {
	border-bottom: 3px solid <?=$color?>;
}

.lSPrev > i, .lSNext > i {
	color: <?=$color?>;
}