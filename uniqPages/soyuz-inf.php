<?php
/*
Template Name: soyuz-inf
Template Post Type: post, page, product
*/
get_header();
?>

<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 row ml-0 mr-0">
	<div class="col-12 col-sm-12 order-2 order-md-1 col-md-3 col-lg-2 col-xl-2">
		123
	</div>
	<div class="col-12 col-sm-12 order-1 order-md-2 col-md-9 col-lg-10 col-xl-10" id="panoramaBlock">
		<div id="panolens-separate-container"></div>

    <script>	
	console.log(123);
		var viewer_side,viewer; 	
			viewer_side = new PANOLENS.Viewer({enableReticle: false, viewIndicator: false, autoRotate: true, autoRotateSpeed: 0.3, autoRotateActivationDuration: 5000, dwellTime: 1000, container: document.querySelector( '#panolens-separate-container' ) });//output: 'overlay'
			var photo_1 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/soyuz-inf/photo_5.jpg' );
			var photo_2 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/soyuz-inf/photo_4.jpeg' );
			
			photo_1.link( photo_2, new THREE.Vector3( -3260.34, -700.96, -3017.16 ) );
			photo_2.link( photo_1, new THREE.Vector3( -3260.34, -700.96, -3017.16 ) );
			viewer_side.add( photo_1,photo_2 );
			
			

    </script>
	</div>
</div>


<?php
get_footer();
?>