<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
	$objectClasses = array(
	'object',
	'col-6',
	'col-sm-6',
	'col-md-4',
	'col-lg-3',
	'col-xl-3',
	'ml-0',
	'mr-auto',	
	'align-self-center'
	);
?>

<article id="post-<?php the_ID(); ?>" <?php post_class($objectClasses); ?>>
	<?php twentynineteen_post_thumbnail(); ?>
	<header class="entry-header">
		<?php
		if ( is_sticky() && is_home() && ! is_paged() ) {
			printf( '<span class="sticky-post">%s</span>', _x( 'Featured', 'post', 'twentynineteen' ) );
		}
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
		endif;
		?>
	</header><!-- .entry-header -->
	<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
		<div class="btn">
			<?php echo '<a href="'.get_permalink().'">Подробнее</a>' ?>	
		</div>				
	</div>

</article><!-- #post-<?php the_ID(); ?> -->
