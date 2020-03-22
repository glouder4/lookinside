<?php
/*
Template Name: index
*/
get_header('Sevastopol');
?>
	<div id="main_content" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0 row">
	        <nav id="navigation" class="navbar align-self-start navbar-light bg-light col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 row">
	        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-auto">
	            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
	                <a class="col-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 p-0 mx-auto" href="#">Города</a>
	            </div>
                <button class="navbar-toggler col-7 col-sm-4 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0" type="button" data-toggle="collapse" data-target="#navigation_town" aria-controls="navigation_town" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navigation_town">
                <ul class="navbar-nav">
                  <li class="nav-item mx-auto">
                    <a class="nav-link col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto" href="/">Севастополь</a>
                  </li>
                  <li class="nav-item mx-auto">
                    <a class="nav-link col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto" href="/simferopol/">Симферополь</a>
                  </li>
                  <li class="nav-item mx-auto">
                     <a class="nav-link col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10" href="#">Ялта</a>
                  </li>
                </ul>
          </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-auto">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
	                <a class="col-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 p-0 mx-auto" href="#">Категории</a>
	            </div>
              <button class="navbar-toggler col-7 col-sm-4 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0" type="button" data-toggle="collapse" data-target="#navigation_bar" aria-controls="navigation_bar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          <div class="collapse navbar-collapse" id="navigation_bar">
            <ul class="navbar-nav">
              <li class="nav-item">
                  <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Достопримечательности</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="landmarks">
                  </div>
              </li>
              <li class="nav-item">
                <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Кафе</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="cafes">
                  </div>
              </li>
              <li class="nav-item">
                <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Рестораны</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="restoraunts">
                  </div>
              </li>
              <li class="nav-item">
                <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Бары</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="bars">
                  </div>
              </li>
              <li class="nav-item">
                <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Караоке</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="karaokes">
                  </div>
              </li>
              <li class="nav-item">
               <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Дискотеки</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="discos">
                  </div>
              </li>
              <li class="nav-item">
                <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Клубы</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="clubs">
                  </div>
              </li>
              <li class="nav-item">
                <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Апартаменты</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="apartments">
                  </div>
              </li>
              <li class="nav-item">
                <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Хостелы</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="hostels">
                  </div>
              </li>
              <li class="nav-item">
                <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Недвижимость</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="realtys">
                  </div>
              </li>
              <li class="nav-item">
                <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                      <a class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Детские учреждения</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="children_institutions">
                  </div>
              </li>
            </ul>
          </div>
        </nav>
	    
		<div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
			<div id="cityname" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<h2>Севастополь</h2>  <?php echo do_shortcode( '[awesome-weather location="Sevastopol, UA"]' ); ?> 
			</div>
			<div id="landmark" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 objects">
				<h3 class="object_name">Достопримечательности</h3>
				<div class="object_items col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
					<div class="row">
						<div id="NakhimovSquare" class="object col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-1">
							<div class="object_block col-12 col-sm-9 col-md-11 col-lg-11 col-xl-11 mx-auto">
								<div class="object_image col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" ></div>
								<h5 class="d-none d-lg-block d-xl-block m-0 mt-1 p-0">Площадь Нахимова</h5><h5 class="d-lg-none d-xl-none m-0 mt-1">Площадь Нахимова</h5>
								<a class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"  href="/nakhimovSquare/"><button class="object_button col-6 col-sm-6 col-md-12 col-lg-7 col-xl-7 mx-auto">Подробнее</button></a>
							</div>							
						</div>
						<div id="SunkenShips" class="object col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-1">
							<div class="object_block col-12 col-sm-9 col-md-11 col-lg-11 col-xl-11 mx-auto">
								<div class="object_image col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" ></div>
								<h5 class="d-none d-lg-block d-xl-block m-0 mt-1 p-0">Памятник затопленным кораблям</h5><h5 class="d-lg-none d-xl-none m-0 mt-1">Памятник затопленным кораблям</h5>
								<a class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"  href="/SunkenShips/"><button class="object_button col-6  col-sm-6 col-md-12 col-lg-7 col-xl-7 mx-auto">Подробнее</button></a>
							</div>							
						</div>
						<div id="Theater" class="object col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
							<div class="object_block col-12 col-sm-9 col-md-11 col-lg-11 col-xl-11 mx-auto">
								<div class="object_image col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" ></div>
								<h5 class="d-none d-lg-block d-xl-block m-0 mt-1 p-0">Севастопольский академический русский драматический театр имени Луначарского</h5><h5 class="d-lg-none d-xl-none m-0 mt-1">Севастопольский академический русский драматический театр имени Луначарского</h5>
								<a class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"  href="/theater-2/"><button class="object_button col-6  col-sm-6 col-md-12 col-lg-7 col-xl-7 mx-auto">Подробнее</button></a>
							</div>							
						</div>
						<div id="SoldierAndSailor" class="object col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
							<div class="object_block col-12 col-sm-9 col-md-11 col-lg-11 col-xl-11 mx-auto">
								<div class="object_image col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" ></div>
								<h5 class="d-none d-lg-block d-xl-block m-0 mt-1 p-0">Памятник солдату и матросу</h5><h5 class="d-lg-none d-xl-none m-0 mt-1">Памятник солдату и матросу</h5>
								<a class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"  href="/SoldierAndSailor/"><button class="object_button col-6  col-sm-6 col-md-12 col-lg-7 col-xl-7 mx-auto">Подробнее</button></a>
							</div>							
						</div>
						<div id="Bas" class="object col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-1 mb-md-0 mb-lg-0 mb-xl-0">
							<div class="object_block col-12 col-sm-9 col-md-11 col-lg-11 col-xl-11 mx-auto">
								<div class="object_image col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" ></div>
								<h5 class="d-none d-lg-block d-xl-block m-0 mt-1 p-0">Памятник обороне Севастополя</h5><h5 class="d-lg-none d-xl-none m-0 mt-1">Памятник обороне Севастополя</h5>
								<a class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"  href="/bas/"><button class="object_button col-6  col-sm-6 col-md-12 col-lg-7 col-xl-7 mx-auto">Подробнее</button></a>
							</div>							
						</div>
					</div>
				</div>
			</div>
			<div id="hostel" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  objects">
				<h3 class="object_name">Хостелы</h3>
				<div class="object_items col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
					<div class="row">
						<div id="Friendshousehostel" class="object col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-1">
							<div class="object_block col-12 col-sm-9 col-md-11 col-lg-11 col-xl-11 mx-auto">
								<div class="object_image col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" ></div>
								<h5 class="d-none d-lg-block d-xl-block m-0 mt-1 p-0">Friend's house hostel</h5><h5 class="d-lg-none d-xl-none m-0 mt-1">Friend's house hostel</h5>
								<a class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"  href="/friendhousehostel/"><button class="object_button col-6  col-sm-6 col-md-12 col-lg-7 col-xl-7 mx-auto">Подробнее</button></a>
							</div>							
						</div>
					</div>
				</div>
			</div>
			<div id="children_institution" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  objects">
				<h3 class="object_name">Детские учреждения</h3>
				<div class="object_items col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
					<div class="row">
						<div id="legoClass" class="object col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-1">
							<div class="object_block col-12 col-sm-9 col-md-11 col-lg-11 col-xl-11 mx-auto">
								<div class="object_image col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" ></div>
								<h5 class="d-none d-lg-block d-xl-block m-0 mt-1 p-0">ЛегоКласс</h5><h5 class="d-lg-none d-xl-none m-0 mt-1">ЛегоКласс</h5>
								<a class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"  href="/legoclasskesaeva/"><button class="object_button col-6  col-sm-6 col-md-12 col-lg-7 col-xl-7 mx-auto">Подробнее</button></a>
							</div>							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

<?php
get_footer();
