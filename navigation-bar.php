<nav id="pageHeader" class="navbar navbar-expand-md navbar-light col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row m-0 p-0">
	  		<?php get_template_part( 'template-parts/header/site', 'branding' ); ?>	
	  	
	  	<button class="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  	  <span class="navbar-toggler-icon"></span>
	  	</button>
	  	
	  	<div class="collapse navbar-collapse col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9 mb-0" id="navbarSupportedContent">
	  	 <?php if ( has_nav_menu( 'menu-1' ) ) : ?>
			<nav id="site-navigation" class="main-navigation col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row m-0" aria-label="<?php esc_attr_e( 'Top Menu', 'twentynineteen' ); ?>">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => '',
						'menu' => 'lookinsideNav',
						'menu_class'     => 'main-menu',
						'container_class' => 'col p-0 float-md-right',
						'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					)
				);
				?>
				<div id="city_weather" class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 p-0 text-left text-md-right ml-auto">
			      <!-- <?php
			       //echo (new DateTime('now', new DateTimeZone('Asia/Yekaterinburg')))->format('H:i'); ?> -->
				</div>
			</nav><!-- #site-navigation -->				
		<?php endif; ?>
	  	</div>
</nav>