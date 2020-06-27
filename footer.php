<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

?>

	</div><!-- #content -->
	<?php get_template_part( 'template-parts/footer/footer', 'widgets' ); ?>
	<footer class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
		<div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 p-0">
			<div id="small_brandname" class="col-12 col-sm-3 col-md-12 col-lg-12 col-xl-12 p-0"><h6>LOOKINSIDE, <?php echo date ( 'Y' ) ; ?></h6></div>
			<a href="/contacts">Контакты</a>
			<a href="/about-us">О нас</a>
			<a href="/com-request">Владельцам заведений</a>
			<a href="/rieltor">Риелторам</a>
			<a href="/vakansii">Вакансии</a>	
		</div>			 
	</footer>
	<div id="ShareWidget" class="socialWidget pulse" data-target="html"><a href="#"><i class="fas fa-phone-alt"></i></a></div>
	<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="modal">	  
	   <div class="col-md-5 mx-auto text-center">	   	
	   	<?php echo do_shortcode( '[contact-form-7 id="6" title="Новая заявка"]'); ?> 
	   </div>
	</div>
</div><!-- #page -->

<?php wp_footer(); ?>
<script type="text/javascript" src="https://vk.com/js/api/openapi.js?168"></script>

<!— VK Widget —>
<div id="vk_community_messages"></div>
<script type="text/javascript">
//VK.Widgets.CommunityMessages("vk_community_messages", 127607773, {expanded: "1",tooltipButtonText: "Есть вопрос?"});
</script>
</body>
</html>
