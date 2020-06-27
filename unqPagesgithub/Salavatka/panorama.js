var viewer_side,viewer; 	
viewer_side = new PANOLENS.Viewer({autoHideInfospot:false,enableReticle: false, viewIndicator: false, autoRotate: true, autoRotateSpeed: 0.3, autoRotateActivationDuration: 5000,output: 'overlay', dwellTime: 1000, container: document.querySelector( '#panolens-separate-container' ) });//output: 'overlay'
var controlItemPoster = {
  style: {
    backgroundImage: 'url(../wp-content/themes/twentynineteen/images/lookinside_logo.png)',
    float: 'left'
  },
  
  onTap: function(){
    posterInfospot.focus();
  }
};
viewer_side.appendControlItem(controlItemPoster);
viewer_side.OrbitControls.minPolarAngle = 1;

var photo_1 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010093.JPG' );
var photo_2 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010095.JPG' );
var photo_3 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010099.JPG' );
var photo_4 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010101.JPG' );
var photo_5 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010103.JPG' );
var photo_6 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010104.JPG' );
var photo_7 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010105.JPG' );
var photo_8 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010108.JPG' );
	var photo_9 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010196.JPG' );
	var photo_10 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010110.JPG' );
		var photo_11 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010195.JPG' );
			var photo_12 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010111.JPG' );
	var photo_15 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010198.JPG' );
		var photo_13 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010199.JPG' );
			var photo_14 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010200.JPG' );
		var photo_16 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Salavatka/R0010197.JPG' );

function showPreloader(panoramaObjects){			
	for(var i =0; i < panoramaObjects.length; i++){		
		panoramaObjects[i].addEventListener( 'progress',function(e){
			$('#panorama_preloader').show();
	    	let percent = Math.round( (e.progress.loaded / e.progress.total)*100 );
	        $('#panorama_loading_status>span')[0].innerText = percent+'%';
	    });
		panoramaObjects[i].addEventListener( 'load',function(e){
	        $('#panorama_preloader').fadeOut(700);
		        let infospotID = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
			    infospotID.position.set( 4739, 1116, 1108 );
			    infospotID.addHoverText('ID фото:'+ e.target.id);    
		    e.target.add( infospotID );
	    });
	}
}

$(document).ready(function(){
	photo_1.link( photo_2, new THREE.Vector3( -4720, 233, -1678 ) );
		photo_1.link( photo_9, new THREE.Vector3( 266, 72, -4983 ) );
			photo_9.link( photo_1, new THREE.Vector3( 1835, 225, 4634 ) );
				photo_9.link( photo_16, new THREE.Vector3( -4945, -578, -328 ) );
					photo_16.link( photo_9, new THREE.Vector3( 4963, 358, -436 ) );
					photo_16.link( photo_15, new THREE.Vector3( -4939, -639, 307 ) );
			photo_9.link( photo_10, new THREE.Vector3( 593, -304, -4949 ) );
				photo_10.link( photo_9, new THREE.Vector3( 1777, 45, 4664 ) );
				photo_10.link( photo_14, new THREE.Vector3( -3964, -981, 2878 ) );
				photo_10.link( photo_11, new THREE.Vector3( -1890, -64, -4620 ) );
					photo_11.link( photo_10, new THREE.Vector3( -1662, 247, 4700 ) );						
					photo_11.link( photo_12, new THREE.Vector3( -4985, -302, 44 ) );
						photo_12.link( photo_11, new THREE.Vector3( 2644, -84, 4232 ) );
							photo_12.link( photo_14, new THREE.Vector3( -3367, -1355, 3423 ) );
						photo_12.link( photo_13, new THREE.Vector3( -4427, -921, -2111 ) );
				photo_13.link( photo_12,new THREE.Vector3( 216, 407, -4971 ) );
				photo_13.link( photo_14,new THREE.Vector3( 2309, 19, -4426 ) );
					photo_14.link( photo_13,new THREE.Vector3( -4941, -291, 647 ) );
					photo_14.link( photo_12,new THREE.Vector3( -1508, 839, -4689 ) );
					photo_14.link( photo_11,new THREE.Vector3( 4934, 751, 136 ) );
				photo_13.link( photo_15,new THREE.Vector3( 3732, 246, -3309 ) );
					photo_15.link( photo_13,new THREE.Vector3( -4681, -1471, -932 ) );
					photo_15.link( photo_16,new THREE.Vector3( 4816, 1127, 674 ) );

	photo_1.addEventListener( 'load',function(e){
        viewer_side.tweenControlCenter( new THREE.Vector3(-4388, 157, -2372),0 );	       
    });	

	photo_2.link( photo_1, new THREE.Vector3( 4985, -122, 85 ) );
	photo_2.link( photo_3, new THREE.Vector3( -4985, 37, -50 ) );
	
	photo_3.link( photo_2, new THREE.Vector3( -4985, 37, -50 ) );
	photo_3.link( photo_4, new THREE.Vector3( 4985, -122, 85 ) );
	
	photo_4.link( photo_2, new THREE.Vector3( 4985, -122, 85 ) );
	photo_4.link( photo_5, new THREE.Vector3( -4985, 37, -50 ) );
	
	photo_5.link( photo_4, new THREE.Vector3( -4985, 37, -50 ) );
	photo_5.link( photo_6, new THREE.Vector3( 4985, -122, 85 ) );
	
	photo_6.link( photo_5, new THREE.Vector3( -4985, 37, -50 )  );
	photo_6.link( photo_7, new THREE.Vector3( 4015, -134, 2967 )  );
	photo_6.link( photo_8, new THREE.Vector3( 3159, 151, -3859 )  );		
	
	photo_7.link( photo_6, new THREE.Vector3( 280, 145, -4979 ) );
	photo_8.link( photo_6, new THREE.Vector3( -24, 145, -4993 ) );

	showPreloader([photo_1,photo_2,photo_3,photo_4,photo_5,photo_6,photo_7,photo_8,photo_9,photo_10,photo_11,photo_12,photo_13,photo_14,photo_15,photo_16])
	viewer_side.add( photo_1,photo_2,photo_3,photo_4,photo_5,photo_6,photo_7,photo_8,photo_9,photo_10,photo_11,photo_12,photo_13,photo_14,photo_15,photo_16 );
})