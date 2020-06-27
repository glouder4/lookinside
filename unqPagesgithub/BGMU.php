<?php
/*
Template Name: BGMU
Template Post Type: post, page, product
*/
get_header();
?>

<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 row ml-0 mr-0">
	<div class="col-12 col-sm-12 order-1 order-md-2 col-md-12 col-lg-12 col-xl-12" id="panoramaBlock">
		<div id="priemka_dod" style="display: none;">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/RiSJi-XMW-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			
		</div>
		<div id="panorama_preloader" class="text-center">
			<div class="wrapper">
			    <div class="circle circle-1"></div>
			    <div class="circle circle-1a"></div>
			    <div class="circle circle-2"></div>
			    <div class="circle circle-3"></div>
			</div>
			<h5 id="panorama_loading_status">Панорамные фото имеют большой вес<br>Пожалуйста подождите...<br><span>0%</span></h5>
		</div>
		<div id="panolens-separate-container"></div>
		<div id="link-gallery"></div>
	</div>
</div>


<?php
get_footer();
?>