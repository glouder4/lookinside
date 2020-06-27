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

var photo_1 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/Sevastopol/FriendsHouseHostel/R0010086.JPG' );
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
	

	showPreloader([photo_1,photo_2,photo_3,photo_4,photo_5,photo_6,photo_7,photo_8,photo_9,photo_10])
	viewer_side.add( photo_1,photo_2,photo_3,photo_4,photo_5,photo_6,photo_7,photo_8,photo_9,photo_10 );
})		