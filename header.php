<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
?><!doctype html>
<html class="m-0">
<head>
    <!-- Yandex.Metrika counter -->
            <script type="text/javascript" >
               (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
               m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
               ym(56231965, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
               });
            </script>
            <noscript><div><img src="https://mc.yandex.ru/watch/56231965" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
            <!-- /Yandex.Metrika counter -->
    <meta name="publisher-url" content="">
    <meta name="ROBOTS" content="all">
    <meta http-equiv="pragma" content="no-cache">
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="copyright" сontent="lookinside" />
	<meta name="keywords" content="lookinside,lookinside.ru,3dlookinside.ru,3dlookinside, 3dpanorama, панорама, лукинсайд, жильё, хостел, рестораны, заказать панораму, куда сходить?, обзоры, панорама, панорамы, 3d-туры туры 3d-тур 3д">
	<meta name="publisher-email" content="egorov.2001@bk.ru">
	<?php wp_head(); ?>
</head>

<body>
  <nav class="navbar pr-0 pt-1 pl-0 pr-md-2 pl-md-2 pr-lg-2 pl-g-2 pr-xl-2 pl-xl-2 row m-0">
  <a class="navbar-brand pl-0 col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 text-left" href="/"><div id="logo_brand"><h1>LOOKINSIDE</h1><h2>3D ТУРЫ ПО ГОРОДУ</h2></div></a>
  <div id="city_weather" class="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5 text-right" style="font-size:15px;font-weight:100;">
      <?php echo (new DateTime('now', new DateTimeZone('Europe/Moscow')))->format('H:i'); ?>
  </div>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <a href="/contacts" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">Контакты</a>
      <a href="/com-request" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0" style="margin-left:15px">Владельцам заведений</a>
      </div>
</nav>


	
