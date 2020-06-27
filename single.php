<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
?>
<style>
	#menu-lookinsidenav{
	    margin-top: 0;
	}
</style>
	<section id="primary" class="content-area col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
		<main id="main" class="site-main">
			<?php
				
				/* Start the Loop */
				while ( have_posts() ) :
					the_post();
				
					get_template_part( 'template-parts/content/content', 'single' );
				
					
				
				endwhile; // End of the loop.
				?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_footer();
