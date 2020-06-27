var viewer_side; 	
viewer_side = new PANOLENS.Viewer({autoHideInfospot:false,enableReticle: false, viewIndicator: false, autoRotate: true, autoRotateSpeed: 0.3, autoRotateActivationDuration: 5000,output: 'none', dwellTime: 1000, container: document.querySelector( '#panolens-separate-container' ) });//output: 'overlay'
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

var photo_1 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010178.JPG' );
var photo_2 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010177.JPG' );
var photo_3 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010176.JPG' );
var photo_4 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010174.JPG' );
var photo_5 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010173.JPG' );
var photo_6 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010169.JPG' );
var photo_7 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010168.JPG' );
var photo_8 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010170.JPG' );
	var photo_9 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010171.JPG' );
	var photo_10 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/PapaJohns/R0010172.JPG' );

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
	photo_1.link( photo_2, new THREE.Vector3( 4968, 305, -368 ) );
			photo_9.link( photo_1, new THREE.Vector3( 1835, 225, 4634 ) );
			photo_9.link( photo_10, new THREE.Vector3( -4990, 0, 189 ) );
				photo_10.link( photo_9, new THREE.Vector3( 876, 139, 4911 ) );

	photo_1.addEventListener( 'load',function(e){
        viewer_side.tweenControlCenter( new THREE.Vector3(4696, 742, -1540),0 );	  
        photo_1.loaded = false;	     
    });	

	photo_2.link( photo_1, new THREE.Vector3( -4891, -166, 995 ) );
		photo_2.addEventListener( 'load',function(e){
	        viewer_side.tweenControlCenter( new THREE.Vector3(3489, -449, -3540),0 );	  
	        photo_2.loaded = false;	     
	    });
	photo_2.link( photo_3, new THREE.Vector3( 4162, -369, -2731 ) );
		photo_3.addEventListener( 'load',function(e){
	        viewer_side.tweenControlCenter( new THREE.Vector3(-4077, -1049, 2678),0 );	  
	        photo_3.loaded = false;	     
	    });	
	
	photo_3.link( photo_2, new THREE.Vector3( -3044, 96, 3954 ) );
	photo_3.link( photo_4, new THREE.Vector3( 2475, -2848, -3271 ) );
		photo_4.addEventListener( 'load',function(e){
	        viewer_side.tweenControlCenter( new THREE.Vector3(-4675, 57, 1747),0 );	  
	        photo_4.loaded = false;	     
	    });
	
	photo_4.link( photo_3, new THREE.Vector3( -3588, -2627, -2272 ) );
	photo_4.link( photo_5, new THREE.Vector3( -3673, -2999, 1568 ) );
		photo_5.addEventListener( 'load',function(e){
	        viewer_side.tweenControlCenter( new THREE.Vector3(-4016, -247, 2958),0 );	  
	        photo_5.loaded = false;	     
	    });
	
	photo_5.link( photo_4, new THREE.Vector3( 4694, -1577, -641 ) );
	photo_5.link( photo_6, new THREE.Vector3( -4202, -1663, 2117 )  );
		photo_6.addEventListener( 'load',function(e){
	        viewer_side.tweenControlCenter( new THREE.Vector3(-3659, 37, 3364),0 );	  
	        photo_6.loaded = false;	     
	    });
		photo_6.link( photo_5, new THREE.Vector3( 1962, -824, 4520 )  );
	photo_5.link( photo_7, new THREE.Vector3( -4012, -1780, -2380 ) );	
		photo_7.addEventListener( 'load',function(e){
	        viewer_side.tweenControlCenter( new THREE.Vector3(2585, 417, 4252),0 );	  
	        photo_7.loaded = false;	     
	    });
		photo_7.link( photo_5, new THREE.Vector3( -1040, -974, 4787 )  );
	photo_5.link( photo_8, new THREE.Vector3( -2606, -799, 4183 )  );
		photo_8.link( photo_5, new THREE.Vector3( 3790, -969, 3097 )  );
	photo_5.link( photo_9, new THREE.Vector3( 1046, -838, 4813 )  );
		photo_9.addEventListener( 'load',function(e){
	        viewer_side.tweenControlCenter( new THREE.Vector3(4975, 371, -185),0 );
	        photo_9.loaded = false;	       
	    });	
		photo_9.link( photo_5, new THREE.Vector3( 4903, -940, -71 )  );
	photo_5.link( photo_10, new THREE.Vector3( 3050, -581, 3906 )  );
		photo_10.addEventListener( 'load',function(e){
	        viewer_side.tweenControlCenter( new THREE.Vector3(4132, 135, -2794),0 );
	        photo_10.loaded = false;	       
	    });	
		photo_10.link( photo_5, new THREE.Vector3( 3993, -841, -2884 )  );

	showPreloader([photo_1,photo_2,photo_3,photo_4,photo_5,photo_6,photo_7,photo_8,photo_9,photo_10])
	viewer_side.add( photo_1,photo_2,photo_3,photo_4,photo_5,photo_6,photo_7,photo_8,photo_9,photo_10 );
})		