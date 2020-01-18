<?php
/*
Template Name: Simferopol
*/
get_header();
?>
	<div id="main_content" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 row">
	    <?php get_navmenu('navmenu') ?>
	    
		<div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
			<div id="cityname" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<h3>Симферополь</h3>  <?php echo do_shortcode( '[awesome-weather location="Sevastopol, UA"]' ); ?> 
			</div>
			<div id="landmark" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<h3 class="object_name">Достопримечательности</h3>
				<div class="object_items col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
					<div class="row">
						Здесь пока пусто
					</div>
				</div>
			</div>
		</div>
	</div>

<?php
get_footer();
