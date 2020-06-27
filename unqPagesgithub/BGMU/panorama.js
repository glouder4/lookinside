function FizzyText () {
		    this.message = 'hello world';
		    this.size = 1;
		    this.color = "#ff0000";
		    this._3d = false;
		    this._3dOptions = {
		        steps: 16,
		        amount: 1,
		        curveSegments: 12,
		        bevelEnabled: false,
		        bevelThickness: 1,
		        bevelSize: 1,
		        bevelSegments: 5
		    }
		};
		meshOption = new FizzyText(); 

		var viewer_side; 	
		viewer_side = new PANOLENS.Viewer({autoHideInfospot:false,enableReticle: false, viewIndicator: false, autoRotate: true, autoRotateSpeed: 0.3, autoRotateActivationDuration: 5000, dwellTime: 1000,output: 'none', container: document.querySelector( '#panolens-separate-container' ) });//output: 'overlay'
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
		viewer_side.addEventListener( 'mode-change',function(e){
			console.log(e)
		})


		var build1_entry = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010112.JPG' ); build1_entry.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_4989.JPG'; build1_entry.name_attrib = 'Вход в первый корпус'; build1_entry.id_attrib = 'build1_entry';
			var photo_2 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010133.JPG' ); photo_2.name_attrib = 'Первый корпус. Вахта'; photo_2.id_attrib = 'photo_2';
				var photo_9 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010114.JPG' ); photo_9.name_attrib = 'Первый корпус. Первый этаж'; photo_9.id_attrib = 'photo_9';
					var photo_3 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010115.JPG' ); photo_3.name_attrib = 'Первый корпус. Актовый зал'; photo_3.id_attrib = 'photo_3';
			var photo_4 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010118.JPG' ); photo_4.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_4997.JPG'; photo_4.name_attrib = 'Аллея'; photo_4.id_attrib = 'photo_4';
				var photo_5 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010116.JPG' ); photo_5.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_4999.JPG'; photo_5.name_attrib = 'Третий корпус. Вход'; photo_5.id_attrib = 'photo_5';	
					var photo_6 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010123.JPG' ); photo_6.name_attrib = 'Третий корпус. Вахта'; photo_6.id_attrib = 'photo_6';
						var photo_7 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010120.JPG' ); photo_7.name_attrib = 'Третий корпус. Лестница'; photo_7.id_attrib = 'photo_7';
							var photo_20 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010186.JPG' ); photo_20.name_attrib = 'Третий корпус. Лестница 3 этаж.';  photo_20.id_attrib = 'photo_20';
								var photo_21 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010187.JPG' ); photo_21.name_attrib = 'Третий корпус. Музей и деканат.';  photo_21.id_attrib = 'photo_21';
									var photo_8 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010119.JPG' ); photo_8.name_attrib = 'Третий корпус. Выставка';  photo_8.id_attrib = 'photo_8';
									var photo_22 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010188.JPG' ); photo_22.name_attrib = 'Третий корпус. Деканат';  photo_22.id_attrib = 'photo_22';
						var photo_11 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010122.JPG' ); photo_11.name_attrib = 'Третий корпус. Актовый зал'; photo_11.id_attrib = 'photo_11';
						var photo_10 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010124.JPG' ); photo_10.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5001.JPG'; photo_10.name_attrib = 'Проход к 2,4,5 корпусам'; photo_10.id_attrib = 'photo_10';
							var photo_12 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010146.JPG' ); photo_12.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5003.JPG'; photo_12.name_attrib = 'Пятый корпус. Вход'; photo_12.id_attrib = 'photo_12';
								var priemka_entrience = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010147.JPG' ); priemka_entrience.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5007.JPG'; priemka_entrience.name_attrib = 'Второй корпус. Вход'; priemka_entrience.id_attrib = 'priemka_entrience';
									var photo_13 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010183.JPG' ); photo_13.name_attrib = 'Второй корпус. Вахта'; photo_13.id_attrib = 'photo_13';
										var photo_14 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010151.JPG' ); photo_14.name_attrib = 'Второй корпус. Второй этаж'; photo_14.id_attrib = 'photo_14';
											var photo_15 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010182.JPG' ); photo_15.name_attrib = 'Второй корпус. Приемная комиссия'; photo_15.id_attrib = 'photo_15';
                                var anatomy = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010149.JPG' ); anatomy.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5008.JPG'; anatomy.name_attrib = 'Четвертый корпус. Вход.'; anatomy.id_attrib = 'anatomy';								
									var photo_16 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010184.JPG' ); photo_16.name_attrib = 'Четвертый корпус. Первый этаж.'; photo_16.id_attrib = 'photo_16';	
										var anatomy_classRoom  = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010154.JPG' ); anatomy_classRoom.name_attrib = 'Четвертый корпус. Учебная комната 1.'; anatomy_classRoom.id_attrib = 'anatomy_classRoom';	
										var anatomy_classRoom2  = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010155.JPG' ); anatomy_classRoom2.name_attrib = 'Четвертый корпус. Учебная комната 2.'; anatomy_classRoom2.id_attrib = 'anatomy_classRoom2';	
										var anatomy_museum  = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010157.JPG' ); anatomy_museum.name_attrib = 'Четвертый корпус. Музей 1.'; anatomy_museum.id_attrib = 'anatomy_museum';	
											var anatomy_museum2  = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010158.JPG' ); anatomy_museum2.name_attrib = 'Четвертый корпус. Музей 2.'; anatomy_museum2.id_attrib = 'anatomy_museum2';	
								var priemka_exit = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010159.JPG' ); priemka_exit.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5010.JPG'; priemka_exit.name_attrib = 'Улица'; priemka_exit.id_attrib = 'priemka_exit';	
                                    var love_med = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010126.JPG' ); love_med.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5020.JPG'; love_med.name_attrib = 'Десятый корпус.'; love_med.id_attrib = 'love_med';	
                                    	var photo_23 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010189.JPG' ); photo_23.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5019.JPG'; photo_23.name_attrib = 'Десятый корпус. Вход'; photo_23.id_attrib = 'photo_23';
                                    		var photo_24 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010193.JPG' ); photo_24.name_attrib = 'Десятый корпус. Спорт.зал'; photo_24.id_attrib = 'photo_24';
                                    			var photo_25 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010194.JPG' ); photo_25.name_attrib = 'Десятый корпус. Спорт.зал. Центр'; photo_25.id_attrib = 'photo_25';		
                                        var love_med2 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010127.JPG' ); love_med2.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5024.JPG'; love_med2.name_attrib = 'Общежития'; love_med2.id_attrib = 'love_med2';	
                                            var love_vorota = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010132.JPG' ); love_vorota.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5028.JPG'; love_vorota.name_attrib = 'Общежития. Двор 1.'; love_vorota.id_attrib = 'love_vorota';	
                                            	 var photo_17 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010130.JPG' ); photo_17.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5031.JPG'; photo_17.name_attrib = 'Общежития. Двор 2.'; photo_17.id_attrib = 'photo_17';	
                                            var build_1_angle = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010192.JPG' ); build_1_angle.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_4974.JPG'; build_1_angle.name_attrib = 'Проход к 1 и 7 корпусам'; build_1_angle.id_attrib = 'build_1_angle';	
                                            var stdom_aktera = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010131.JPG' ); stdom_aktera.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5079.JPG'; stdom_aktera.name_attrib = 'Седьмой корпус. Вход.'; stdom_aktera.id_attrib = 'stdom_aktera';	
                                            	var build7 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010190.JPG' ); build7.name_attrib = 'Седьмой корпус. Вахта.'; build7.id_attrib = 'build7';	
                                            	var foreign_entrience = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010191.JPG' ); foreign_entrience.name_attrib = 'Седьмой корпус. Иностранная библиотека. Вход.'; foreign_entrience.id_attrib = 'foreign_entrience';
                                            		var foreign = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010135.JPG' ); foreign.name_attrib = 'Седьмой корпус. Иностранная библиотека.'; foreign.id_attrib = 'foreign';
                                            		var russian = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010144.JPG' ); russian.name_attrib = 'Седьмой корпус. Русская библиотека. Вход'; russian.id_attrib = 'russian';
                                            			var russian_2 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010136.JPG' ); russian_2.name_attrib = 'Седьмой корпус. Русская библиотека. Корридор.'; russian_2.id_attrib = 'russian_2';
                                            				var russian_3 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010139.JPG' ); russian_3.name_attrib = 'Седьмой корпус. Русская библиотека. Проход'; russian_3.id_attrib = 'russian_3';
                                            				var biblioteka = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010138.JPG' ); biblioteka.name_attrib = 'Седьмой корпус. Русская библиотека. Библиотека.'; biblioteka.id_attrib = 'biblioteka';
                                            				var comp_room = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010140.JPG' ); comp_room.name_attrib = 'Седьмой корпус. Русская библиотека. Компьютерный зал.'; comp_room.id_attrib = 'comp_room';
                                            				var photo_18 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010143.JPG' ); photo_18.name_attrib = 'Седьмой корпус. Русская библиотека. Бибилиотека 2.'; photo_18.id_attrib = 'photo_18';
                                            					var photo_19 = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010141.JPG' ); photo_19.name_attrib = 'Седьмой корпус. Русская библиотека. Бибилиотека 3.'; photo_19.id_attrib = 'photo_19';
                                    var dinamo = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010160.JPG' ); dinamo.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5035.JPG'; dinamo.name_attrib = 'Шестой корпус. Вход.'; dinamo.id_attrib = 'dinamo';
                                        var build5_entrance = new PANOLENS.ImagePanorama( '../wp-content/themes/twentynineteen/uniqPages/BGMU/panoramas/R0010161.JPG' ); build5_entrance.preview_attrib = '../wp-content/themes/twentynineteen/uniqPages/BGMU/previews/IMG_5036.JPG'; build5_entrance.name_attrib = 'Диагностическая лаборатория.'; build5_entrance.id_attrib = 'build5_entrance';         
		function showPreloader(panoramaObjects){
			for(var i =0; i < panoramaObjects.length; i++){				
				panoramaObjects[i].addEventListener( 'progress',function(e){
					$('#panorama_preloader').show();
			    	let percent = Math.round( (e.progress.loaded / e.progress.total)*100 );
			        $('#panorama_loading_status>span')[0].innerText = percent+'%';
			    });
				panoramaObjects[i].addEventListener( 'load',function(e){
			        $('#panorama_preloader').fadeOut(700);
				        /*let infospotID = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
					    infospotID.position.set( 4739, 1116, 1108 );
					    infospotID.addHoverText('ID фото:'+ e.target.id);    
				    e.target.add( infospotID );*/
			    });
			    if(panoramaObjects[i].preview_attrib != undefined) $('#link-gallery')[0].innerHTML += '<div pano_id_attrib="'+panoramaObjects[i].id+'" class="panoramaGallery_link_object text-center"><img src="'+panoramaObjects[i].preview_attrib+'" alt="" /> <div class="panorama_paceTitle">'+panoramaObjects[i].name_attrib+'</div> <button class="btn">Перейти</button> </div>';
			    else $('#link-gallery')[0].innerHTML += '<div pano_id_attrib="'+panoramaObjects[i].id+'" class="panoramaGallery_link_object text-center"><img src="'+panoramaObjects[i].src+'" alt="" /> <div class="panorama_paceTitle">'+panoramaObjects[i].name_attrib+'</div> <button class="btn">Перейти</button> </div>';
			}
		}
		function findPanoramaObjectForView(watsSearch,panoramaObjects){
			for(var i =0; i < panoramaObjects.length; i++){	
				if(panoramaObjects[i].id == watsSearch) viewer_side.setPanorama( eval(panoramaObjects[i].id_attrib) );
			};
		}

		build1_entryText = new THREE.DText({text: 'First Building',size: meshOption.size,color: meshOption.color.replace('#','0x'),"3d": meshOption._3d,"extrudeSettings" : meshOption._3dOptions}); 
	    foreign_library = new THREE.DText({text: 'foreign library',size: meshOption.size,color: meshOption.color.replace('#','0x'),"3d": meshOption._3d,"extrudeSettings" : meshOption._3dOptions});
	    russian_library = new THREE.DText({text: 'russian library',size: meshOption.size,color: meshOption.color.replace('#','0x'),"3d": meshOption._3d,"extrudeSettings" : meshOption._3dOptions}); 
		$(document).ready(function(){						
			// Первый корпус
			build1_entry.link( photo_2, new THREE.Vector3( 4977, 435, 28.51 ) );
			
		    build1_entryText.position.x = -55;
		    build1_entryText.position.y = 2;
		    build1_entryText.position.z = 3.5;
		    build1_entryText.rotation.x = -1;
		    build1_entryText.rotation.y =  1.5;
		    build1_entryText.rotation.z =  1;

			build1_entry.addEventListener( 'load',function(e){
				viewer_side.OrbitControls.maxAzimuthAngle = 4;
		        viewer_side.OrbitControls.minAzimuthAngle = -4;
		        build1_entry.loaded = false;

		        viewer_side.tweenControlCenter( new THREE.Vector3(4943, 715, 49),0 );
		        build1_entry.add(build1_entryText);		       
		    });	    
				photo_2.link( build1_entry, new THREE.Vector3( -259, -615, 4944 ) );
				photo_2.link( photo_9, new THREE.Vector3( -4478, -225, -2188) );
				photo_2.link( photo_9, new THREE.Vector3( 4810, 49.32, -1332 ) );
					photo_9.link( photo_2, new THREE.Vector3( 1864, 247, 4622 ) );					
					photo_9.link( photo_2, new THREE.Vector3( 1964, 111, -4985 ) );
					photo_9.link( photo_3, new THREE.Vector3( 4153, 347, 2746 ) );
						photo_3.link( photo_2, new THREE.Vector3( 2768, -332, -4140 ) );
			build1_entry.link( photo_4, new THREE.Vector3( -1844, -276, 4628 ) );
			stdom_aktera.link( love_med2, new THREE.Vector3( 3225, 365, -3794 ) );        	
			build1_entry.link( build_1_angle, new THREE.Vector3( -1257, 86, -4828 ) );
				build_1_angle.link( build1_entry, new THREE.Vector3( -717, 140, -4936 ) );
				build_1_angle.link( stdom_aktera, new THREE.Vector3( -4914, 86, 870 ) );
					stdom_aktera.link( build_1_angle, new THREE.Vector3( 46, -149, 4991 ) );
					stdom_aktera.link( build7, new THREE.Vector3( 4154, 639, 2688 ) );									
						build7.link( stdom_aktera, new THREE.Vector3( 2275, -104, -4439 ) );
						stdom_aktera.addEventListener( 'load',function(e){
							viewer_side.tweenControlCenter( new THREE.Vector3(4632, 729, 1710),0 );
					        viewer_side.OrbitControls.maxAzimuthAngle = 3.141592653589793;
					        viewer_side.OrbitControls.minAzimuthAngle = -0.485;
					        stdom_aktera.loaded = false;
					    });	
						build7.addEventListener( 'load',function(e){
							viewer_side.tweenControlCenter( new THREE.Vector3(3859, 18, -3167),0 );
					        viewer_side.OrbitControls.maxAzimuthAngle = 4;
					        viewer_side.OrbitControls.minAzimuthAngle = -4;

					        foreign_library.position.x = -45;
						    foreign_library.position.y = -5;
						    foreign_library.position.z = -2;
					        foreign_library.rotation.x = 0;
			    			foreign_library.rotation.y =  1.5;
			    			foreign_library.rotation.z =  0;

					        build7.add(foreign_library);

					        russian_library.position.x = 45;
						    russian_library.position.y = -2;
						    russian_library.position.z = 2;
					        russian_library.rotation.x = 0;
			    			russian_library.rotation.y =  -1.5;
			    			russian_library.rotation.z =  0;

					        build7.add(russian_library);
					        build7.loaded = false;
					    });	
						build7.link( foreign_entrience, new THREE.Vector3( 4939, -157, -692 ) );//иностранная
							foreign_entrience.link( build7, new THREE.Vector3( 81, -53, 4993 ) );
							foreign_entrience.link( foreign, new THREE.Vector3( -2835, -200, -4103 ) );
								foreign.link( foreign_entrience, new THREE.Vector3( 4187, 80, -2714 ) );
								foreign.addEventListener( 'load',function(e){
									viewer_side.tweenControlCenter( new THREE.Vector3(4967, 463, 159),0 );							
									foreign.loaded = false;
							    });	
						build7.link( russian, new THREE.Vector3( -4955, 56, 614 ) );//русская
							russian.link( build7, new THREE.Vector3( -4958, -561, 124 ) );
							russian_infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
							    russian_infospot.position.set( 4709, 94, -1654 );
							    russian_infospot.addHoverText("Стоматологический деканат\nDental Dean's office");    
						    russian.add( russian_infospot );
							russian.link( russian_2, new THREE.Vector3( 4845, 106, 1191 ) );
								russian_2.addEventListener( 'load',function(e){
									viewer_side.tweenControlCenter( new THREE.Vector3(-4990, -188, -34),0 );
									russian_2.loaded = false;
							    });	
								russian_2.link( russian, new THREE.Vector3( 4981, -66, 299 ) );
								russian_2.link( russian_3, new THREE.Vector3( -4970, -507, 14 ) );
									russian_3.link( russian_2, new THREE.Vector3( -4972, -233, -358 ) );
									russian_3.link( biblioteka, new THREE.Vector3( 4410, -887, -2161 ) );
										biblioteka.addEventListener( 'load',function(e){
											viewer_side.tweenControlCenter( new THREE.Vector3(4510, 9, 2144),0 );
											biblioteka.loaded = false;
									    });
										biblioteka.link( russian_3, new THREE.Vector3( 4893, -136, -989 ) );
									russian_3.link( photo_19, new THREE.Vector3( -4986, -214, 99 ) );
								russian_2.link( photo_18, new THREE.Vector3( -4946, -192, -498 ) );									
								russian_2.link( comp_room, new THREE.Vector3( -4925, -256, 757 ) );	
									comp_room.link( russian_2, new THREE.Vector3( 656, 111, -4947 ) );		
								russian_2.link( photo_18, new THREE.Vector3( 3930, -158, -3070 ) );	
									photo_18.link( russian_2, new THREE.Vector3( -4772, -363, -1424 ) );	
									photo_18.link( photo_19, new THREE.Vector3( 3338, 529, -3678 ) );	
										photo_19.link( photo_18, new THREE.Vector3( 3216, 76, -3816 ) );	
										photo_19.link( russian_3, new THREE.Vector3( 4944, -24, -692 ) );		
			// /Первый корпус	
			
			photo_4.link( build1_entry, new THREE.Vector3( 4889, 93, 1023 ) );
			photo_4.link( photo_5, new THREE.Vector3( -3017, 190, 3972 ) );
				photo_5.link( photo_4, new THREE.Vector3( -487, -142, -4968 ) );
				// Второй корпус
				photo_5.link( photo_6, new THREE.Vector3( -4727, 18, -1616 ) );
					photo_6.link( photo_5, new THREE.Vector3( 4982, -104, 256 )  );
					photo_6.link( photo_7, new THREE.Vector3( -3283, -412, 3743 )  );
						photo_7.link( photo_6, new THREE.Vector3( 4515, -2117, 176 ) );
						photo_7.link( photo_11, new THREE.Vector3( -4995, -55, 53 ) );
							photo_7.link( photo_20, new THREE.Vector3( 4722, 680, -1475 ) );
								photo_20.addEventListener( 'load',function(e){
							        viewer_side.tweenControlCenter( new THREE.Vector3(-4536, -1530, -1433),0 );	
							        photo_20.loaded = false;       
							    });
								photo_20.link( photo_7, new THREE.Vector3( -4116, -2171, -1815 ) );
								photo_20.link( photo_21, new THREE.Vector3( -4931, 374, 687 ) );
									photo_21.link( photo_20, new THREE.Vector3( -1285, -959, 4724 ) );
									photo_21.addEventListener( 'load',function(e){
								        viewer_side.tweenControlCenter( new THREE.Vector3(621, 113, -4952),0 );	
								        photo_21.loaded = false;       
								    });
								    photo_21.link( photo_8, new THREE.Vector3( 645, 48, -4951 ) );
								    	photo_8.link( photo_21, new THREE.Vector3( -773, -31, 4931 ) );
								    	photo_8.link( photo_22, new THREE.Vector3( -2158, -165, 4497 ),300,'../wp-content/themes/twentynineteen/uniqPages/BGMU/arrows/ArrowLeft.png' );
								    photo_21.link( photo_22, new THREE.Vector3( 127, 113, -4988 ),300,'../wp-content/themes/twentynineteen/uniqPages/BGMU/arrows/ArrowRight.png' );
								    	photo_22.link( photo_21, new THREE.Vector3( -4794, -405, -1332 ) );
								    	photo_22.link( photo_8, new THREE.Vector3( -4748, -692, 1374 ) );
					photo_6.link( photo_11, new THREE.Vector3( -4558, -288, 2026 )  );
						photo_11.link( photo_6, new THREE.Vector3( 2082, -141, -4536 )  );
				// /Второй корпус
				photo_5.link( photo_10, new THREE.Vector3( -919	, 124, 4904 ) );
					photo_10.link( photo_5, new THREE.Vector3( 4965	, -22, -559 ) );
					photo_10.link( photo_12, new THREE.Vector3( -4998, -22, 20 ) );
						photo_12.link( photo_10, new THREE.Vector3( 4977, -55, -385 ) );
						photo_12.link( priemka_entrience, new THREE.Vector3( -1890, -1218, 4438 ) );
							priemka_entrience.link( photo_12, new THREE.Vector3( 1510, 65, -4762 ) );
							priemka_entrience.link( anatomy, new THREE.Vector3( 305, -84, 4980 ) );
								//Анатомичка
								anatomy.link( priemka_entrience, new THREE.Vector3( 466, -466, 4951 ) );
								anatomy.link( photo_16, new THREE.Vector3( 4727, -155, 1601 ) );
									photo_16.link( anatomy, new THREE.Vector3( -4898, -62, 972 ) );
									photo_16.link( anatomy_classRoom, new THREE.Vector3( -4595, -462, 1894 ) );
										anatomy_classRoom.link( photo_16, new THREE.Vector3( 4812, -124, -1313 ) );
									photo_16.link( anatomy_classRoom2, new THREE.Vector3( -3271, -297, 3760 ) );
										anatomy_classRoom2.link( photo_16, new THREE.Vector3( -1603, -394, 4716 ) );
									photo_16.link( anatomy_museum, new THREE.Vector3( 4732, -164, 1587 ) );
										anatomy_museum.link( photo_16, new THREE.Vector3( 636, -2622, -4202 ) );
										anatomy_museum.link( anatomy_museum2, new THREE.Vector3( -4918, -792, 339 ) );
											anatomy_museum2.link( anatomy_museum, new THREE.Vector3( -809, -384, -4918 ) );
								// /Анатомичка
							// Приемка
							priemka_entrience.link( photo_13, new THREE.Vector3( 4259, 84, 2602 ) );
								priemka_infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
							    priemka_infospot.position.set( 4196, 940, 2535 );
							    priemka_infospot.addHoverText('Применая комиссия\nSelection Committee');
								priemka_entrience.add(priemka_infospot);
								photo_13.link( priemka_entrience, new THREE.Vector3( 4999, 3, -7 ) );
								photo_13.link( photo_14, new THREE.Vector3( -4984, -268, 87 ) );
									photo_14.link( photo_13, new THREE.Vector3( 4149, -552, -2720 ) );
									photo_14.link( photo_15, new THREE.Vector3( -4909, -542, 711 ) );
										priemka2_infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
									    priemka2_infospot.position.set( 4118, -554, 2762 );
									    priemka2_infospot.addHoverElement(document.getElementById( 'priemka_dod' ), 200);
									    priemka2_infospot.addEventListener('click',function(){
									    	viewer_side = new PANOLENS.Viewer({enableReticle: false, viewIndicator: false, autoRotate: false, dwellTime: 1000,output: 'overlay', container: document.querySelector( '#panolens-separate-container' ) });
									    } )
										photo_15.add(priemka2_infospot);
										photo_15.link( photo_14, new THREE.Vector3( -4899, -183, 935 ) );
							// /Приемка
            
                            // Улица
                            // priemka
                            priemka_entrience.link( priemka_exit, new THREE.Vector3( -4968, -201, -451 ) );
                            priemka_exit.link( love_med, new THREE.Vector3( -4530, -219, 2087 ) );
                            priemka_exit.link( dinamo, new THREE.Vector3( -397, -17, -4978 ) );
                            // / priemka
            
                            // Я люблю БГМУ
                            love_med.link( love_med2, new THREE.Vector3( -3859, -139, -3159 ) );
                            love_med.link( priemka_exit, new THREE.Vector3( 2451, -1, 4359 ) );
                            	love_med.link( photo_23, new THREE.Vector3( -4977, 346, 176 ) );
                            		photo_23.link( love_med, new THREE.Vector3( -3774, -583, -3212 ) );
                            		photo_23.link( photo_24, new THREE.Vector3( 4424, -262, 2292 ) );
                            			photo_24.link( photo_23, new THREE.Vector3( 1747, -337, 4664 ) );
                            			photo_24.link( photo_25, new THREE.Vector3( -3721, -1592, 2922 ) );
                            				photo_25.link( photo_24, new THREE.Vector3( -1649, 1062, -4589 ) );
                            love_med2.link( love_med, new THREE.Vector3( -4975, -116, 384 ) );
                            // / Я люблю БГМУ
            
                            //Шлагбаум
                            love_med2.link( love_vorota, new THREE.Vector3( -317, -219, -4974 ) );
                            	love_vorota.link( love_med2, new THREE.Vector3( -4801, -350, -1321 ) );
                            	love_vorota.link( photo_17, new THREE.Vector3( -1603, -104, 4728 ) );
                            		photo_17.link( love_vorota, new THREE.Vector3( 4927, -14, 805 ) );
                            		photo_17.link( stdom_aktera, new THREE.Vector3( 659, 110, -4946 ) );
                            love_med2.link( stdom_aktera, new THREE.Vector3( 4974, 54, -440 ) );                              	
                            	love_med2.addEventListener( 'load',function(e){                            		
							        viewer_side.OrbitControls.maxAzimuthAngle = 4;
							        viewer_side.OrbitControls.minAzimuthAngle = -4;
							        love_med2.loaded = false;
							    });	                            		    
                            // / Шлагбаум
            
                            // Улица
                            dinamo.link( build5_entrance, new THREE.Vector3( -397, -17, -4978 ) );
                            build5_entrance.link( dinamo, new THREE.Vector3( -4265, -311, 2577 ) );
                            dinamo.link( priemka_exit, new THREE.Vector3( -230, -155, 4981 ) );
                            priemka_exit.link( priemka_entrience, new THREE.Vector3( -8, -342, 4986 ) );
                            // / Улица
            showPreloader([build1_entry,photo_2,photo_3,photo_4,photo_5,photo_6,photo_7,photo_8,photo_9,photo_10,photo_11,photo_12,priemka_entrience,photo_13,photo_14,photo_15,anatomy,photo_16, priemka_exit, love_med, dinamo, love_med2, build5_entrance, love_vorota, stdom_aktera,anatomy_classRoom,anatomy_classRoom2,anatomy_museum,anatomy_museum2,photo_17,build7,foreign,russian,russian_2,russian_3,biblioteka,comp_room,photo_18,photo_19,build_1_angle,foreign_entrience,photo_20,photo_21,photo_22,photo_23,photo_24,photo_25]);
			viewer_side.add( build1_entry,photo_2,photo_3,photo_4,photo_5,photo_6,photo_7,photo_8,photo_9,photo_10,photo_11,photo_12,priemka_entrience,photo_13,photo_14,photo_15,anatomy,photo_16, priemka_exit, love_med, dinamo, love_med2, build5_entrance, love_vorota, stdom_aktera,anatomy_classRoom,anatomy_classRoom2,anatomy_museum,anatomy_museum2,photo_17,build7,foreign,russian,russian_2,russian_3,biblioteka,comp_room,photo_18,photo_19,build_1_angle,foreign_entrience,photo_20,photo_21,photo_22,photo_23,photo_24,photo_25 );
		$('#link-gallery>.panoramaGallery_link_object>.btn').click(function(){
			let id_attrib = $(this)[0].parentElement.attributes[0].value;
			findPanoramaObjectForView(id_attrib,[build1_entry,photo_2,photo_3,photo_4,photo_5,photo_6,photo_7,photo_8,photo_9,photo_10,photo_11,photo_12,priemka_entrience,photo_13,photo_14,photo_15,anatomy,photo_16, priemka_exit, love_med, dinamo, love_med2, build5_entrance, love_vorota, stdom_aktera,anatomy_classRoom,anatomy_classRoom2,anatomy_museum,anatomy_museum2,photo_17,build7,foreign,russian,russian_2,russian_3,biblioteka,comp_room,photo_18,photo_19,build_1_angle,foreign_entrience,photo_20,photo_21,photo_22,photo_23,photo_24,photo_25]);
		})	
		setTimeout(function(){
			var slider = tns({
			    container: '#link-gallery',
			    items: 1,
			    slideBy: 'page',
			    touch: true,
			    mouseDrag: true,
					swipeAngle: false,
			    autoplay: false,
			    nav: false,
			    controls: false,
			    loop: false,
			    responsive: {
			      700: {
			        items: 2
			      },
			      900: {
			        items: 3
			      },
			    }
			});
		},2000)		 
		})	