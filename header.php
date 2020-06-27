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
	<meta charset="utf-8" />
	<meta lang="ru" />
	<meta name="yandex-verification" content="dff619970d77ba47" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta description="Lookinside - 3D-туры по городу. Информационная площадка для размещения 3D-туров по объектам города. Новый способ рекламы. Лендинг с панорамой, описанием, видеообзором и фотогаллереей для привлечения клиентов." />
	<meta keywords="Лукинсайд,Lookinside,3D-туры,Панорамы,Видеообзор,Фото,Отзывы" />
	<meta generator="WordPress" />
	<meta author="https://vk.com/makebattlerapgreatagain" />
	<?php wp_head(); ?>
</head>

<body class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
<?php wp_body_open(); ?>
<div id="page" class="site">
	<?php get_template_part( 'navigation', 'bar' ); ?>	

	<div id="content" class="site-content row m-0">
