<?php
/*
Template Name: Объекты
Template Post Type: page
*/
get_header();
?>
	<? get_sidebar() ?>	
	<main id="main" class="site-main col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">	
		<div class="row m-0">			
			<div class="col-md-9 col-lg-9 col-xl-9">
				<div id="landmark" class="col-md-12 col-lg-12 col-xl-12">
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
				<div id="medical_institution" class="col-md-12 col-lg-12 col-xl-12 ml-auto">
					<h3 class="object_name">Медицинские учреждения</h3>
					<div class="row m-0">
						<?php
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
						?>					
					</div>
				</div>
			</div>			
		</div>
	</main>
<?php
get_footer();
?>