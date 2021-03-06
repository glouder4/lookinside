<button id="filters" data-effect="st-effect-6" class="d-none d-md-block">-></button>
<nav id="navigation" class="navbar st-menu st-effect-6 align-self-start navbar-light col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 row m-0 p-0">    
    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-auto p-0 navigationBar">
      <!-- <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
          <a class="col-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 p-0 mx-auto" href="#">Города</a>
      </div> -->
        <button id="townButton" class="navbar-toggler col-7 col-sm-4 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0" type="button" data-toggle="collapse" data-target="#navigation_cities" aria-controls="navigation_cities" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>      
    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-auto p-0 navigationBar">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
          <a class="col-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 p-0 mx-auto" href="#">Категории</a>
        </div>
        <button id="catsButton" class="navbar-toggler col-7 col-sm-4 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0" type="button" data-toggle="collapse" data-target="#navigation_bar" aria-controls="navigation_bar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="collapse navbar-collapse" id="navigation_cities">
      <ul class="navbar-nav" id="navigation_town">
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
    <div class="collapse navbar-collapse" id="navigation_bar">  	  
      <ul class="navbar-nav" id="navigation_departments">
        <li class="nav-item">
            <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a  data-number="1" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#landmark">Достопримечательности</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="landmarks">
            </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a  data-number="2" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Кафе</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="cafes">
            </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a  data-number="3" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Рестораны</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="restoraunts">
            </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a  data-number="4" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Бары</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="bars">
            </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a  data-number="5" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Караоке</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="karaokes">
            </div>
        </li>
        <li class="nav-item">
         <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a  data-number="6" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Дискотеки</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="discos">
            </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a  data-number="7" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Клубы</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="clubs">
            </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a  data-number="8" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Апартаменты</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="apartments">
            </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a  data-number="9" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Хостелы</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="hostels">
          </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a data-number="10" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Недвижимость</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="realtys">
            </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a data-number="11" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Детские учреждения</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="children_institutions">
          </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a data-number="12" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Медицинские учреждения</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="medical_institutions">
          </div>
        </li>
        <li class="nav-item">
          <div class="col-8 col-sm-10 col-md-12 col-lg-12 col-xl-12 row m-0 p-0 mx-auto">
                <a data-number="12" class="nav-link col-10 col-sm-6 col-md-11 col-lg-11 col-xl-10" href="#">Учебные учреждения</a><input type="checkbox" class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2 mr-auto" id="educational_institutions">
          </div>
        </li>
      </ul>
    </div>
  </nav>