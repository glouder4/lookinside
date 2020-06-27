<?php
/*
Template Name: Объекты
Template Post Type: page
*/
get_header();
?>	
	<div id="panorama_preloader" class="text-center">
		<div class="wrapper">
		    <div class="circle circle-1"></div>
		    <div class="circle circle-1a"></div>
		    <div class="circle circle-2"></div>
		    <div class="circle circle-3"></div>
		</div>
		<h5 id="panorama_loading_status">Загрузка<br>Пожалуйста подождите...<br></h5>
	</div>
	<script>
		$(window).on('load',function(){
			$('#panorama_preloader').fadeOut(700);
		})
	</script>
	<main id="main" class="site-main col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 st-container p-0">	
		<div class="row m-0 st-pusher">		
			<? get_sidebar() ?>	
			<div class="st-content col-md-9 col-lg-9 col-xl-12 text-center text-md-left">
				<div class="st-content-inner col-xl-11 mx-auto">
					<h2>Уфа</h2>
					<div id="landmark" class="st-content-inner object-section col-md-12 col-lg-12 col-xl-12 p-0">
						<h3 class="object_name">Достопримечательности</h3>
						<div class="row m-0">
							<?php
							if ( have_posts() ) {
								query_posts('category_name=Достопримечательности');
								// Load posts loop.
								while ( have_posts() ) {
									the_post();
									get_template_part( 'template-parts/content/content' );
								}
							
								// Previous/next page navigation.
								twentynineteen_the_posts_navigation();
							
							} else {
							
								// If no content, include the "No posts found" template.
								get_template_part( 'template-parts/content/content', 'none' );
							
							}
							?>					
						</div>
					</div>
					<!-- <div id="medical_institution" class="st-content-inner col-md-12 col-lg-12 col-xl-12 ml-auto p-0">
						<h3 class="object_name">Медицинские учреждения</h3>
						<div class="row m-0">
							<?php /*
							if ( have_posts() ) {
								query_posts('category_name=медицинские-учреждения');
								// Load posts loop.
								while ( have_posts() ) {
									the_post();
									get_template_part( 'template-parts/content/content' );
								}
							
								// Previous/next page navigation.
								twentynineteen_the_posts_navigation();
							
							} else {
							
								// If no content, include the "No posts found" template.
								get_template_part( 'template-parts/content/content', 'none' );
							
							}
							*/?>					
						</div>
					</div> -->
					<div id="educational_institution" class="st-content-inner col-md-12 col-lg-12 col-xl-12 ml-auto p-0">
						<h3 class="object_name">Учебные учреждения</h3>
						<div class="row m-0">
							<?php
							if ( have_posts() ) {
								query_posts('category_name=учебные-учреждения');
								// Load posts loop.
								while ( have_posts() ) {
									the_post();
									get_template_part( 'template-parts/content/content' );
								}
							
								// Previous/next page navigation.
								twentynineteen_the_posts_navigation();
							
							} else {
							
								// If no content, include the "No posts found" template.
								get_template_part( 'template-parts/content/content', 'none' );
							
							}
							?>					
						</div>
					</div>
					<div id="educational_institution" class="st-content-inner col-md-12 col-lg-12 col-xl-12 ml-auto p-0">
						<h3 class="object_name">Общественное питание</h3>
						<div class="row m-0">
							<?php
							if ( have_posts() ) {
								query_posts('category_name=общественное-питание');
								// Load posts loop.
								while ( have_posts() ) {
									the_post();
									get_template_part( 'template-parts/content/content' );
								}
							
								// Previous/next page navigation.
								twentynineteen_the_posts_navigation();
							
							} else {
							
								// If no content, include the "No posts found" template.
								get_template_part( 'template-parts/content/content', 'none' );
							
							}
							?>					
						</div>
					</div>
				</div>
				<div class="st-content-inner col-xl-11 mx-auto">
					<h2>Севастополь</h2>
					<div id="hostels" class="st-content-inner object-section col-md-12 col-lg-12 col-xl-12 p-0">
						<h3 class="object_name">Хостелы</h3>
						<div class="row m-0">
							<?php
							if ( have_posts() ) {
								query_posts('category_name=хостелы');
								// Load posts loop.
								while ( have_posts() ) {
									the_post();
									get_template_part( 'template-parts/content/content' );
								}
							
								// Previous/next page navigation.
								twentynineteen_the_posts_navigation();
							
							} else {
							
								// If no content, include the "No posts found" template.
								get_template_part( 'template-parts/content/content', 'none' );
							
							}
							?>					
						</div>
					</div>
				</div>
			</div>			
		</div>
	</main>
<?php
get_footer();
?>