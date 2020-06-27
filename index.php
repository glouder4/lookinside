<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
?>	
	<div id="panorama_preloader" class="text-center">
		<div class="wrapper">
		    <div class="circle circle-1"></div>
		    <div class="circle circle-1a"></div>
		    <div class="circle circle-2"></div>
		    <div class="circle circle-3"></div>
		</div>
		<h5 id="panorama_loading_status">Загрузка<br>Пожалуйста подождите...<br></h5>
	</div>
	<script>
		$(window).on('load',function(){
			$('#panorama_preloader').fadeOut(700);
		})
	</script>
	<div class="row m-0">
		<? get_sidebar('mainpage') ?>	
		<div class="col-12 col-md-9 col-lg-9 col-xl-10 p-0">
			<div id="main_page_slider" class="col-xl-12">
			    <ul class="flip-items">
			      	<li class="slide"><img src="/wp-content/themes/twentynineteen/uniqPages/mainPage/IMG_4985.JPG" alt=""></li>
					<li class="slide"><img src="/wp-content/themes/twentynineteen/uniqPages/mainPage/IMG_4991.JPG" alt=""></li>
					<li class="slide"><img src="/wp-content/themes/twentynineteen/uniqPages/mainPage/IMG_4995.JPG" alt=""></li>
					<li class="slide"><img src="/wp-content/themes/twentynineteen/uniqPages/mainPage/IMG_5010.JPG" alt=""></li>
					<li class="slide"><img src="/wp-content/themes/twentynineteen/uniqPages/mainPage/IMG_5022.JPG" alt=""></li>
			    </ul>
			</div>
			<div id="whoIsNeed" class="row ml-0 mr-0">
				<div class="col-12 col-md-12 text-center">
					<h2>Выбери 3D-тур для своего бизнеса</h2>
				</div>
				<div class="col-12 col-md-4 col-lg-3 text-center text-md-left">
					<h5><i class="fas fa-business-time"></i>	БАНКЕТНЫЙ ЗАЛ</h5>
					<ul class="p-0">
						<li>Клиент может оценить реальные размеры помещения</li>
						<li>Осмотреть интерьер зала</li>
						<li>Оценить уют и комфорт, не выходя из дома</li>
					</ul>
				</div>
				<div class="col-12 col-md-4 col-lg-3 text-center text-md-left">
					<h5><i class="fas fa-utensils"></i>	РЕСТОРАН</h5>
					<ul class="p-0">
						<li>Клиент может оценить интерьер со своего смартфона</li>
						<li>Увидеть расположение столов и выделенных зон</li>
						<li>Возможность интегрировать актуальное меню ресторана в 3D-тур</li>
					</ul>
				</div>
				<div class="col-12 col-md-4 col-lg-3 text-center text-md-left">
					<h5><i class="fas fa-running"></i>	ФИТНЕС-ЗАЛ</h5>
					<ul class="p-0">
						<li>Клиент может увидеть реальное количество тренажеров без первого посещения</li>
						<li>Оценить дополнительные возможности фитнес-зала</li>
						<li>Интегрируйте акции в 3D-тура</li>
					</ul>
				</div>
				<div class="col-12 col-md-4 col-lg-3 text-center text-md-left">
					<h5><i class="fas fa-car-side"></i>	АВТОСЕРВИС</h5>
					<ul class="p-0">
						<li>Клиент может увидеть оснащение вашего автосервиса</li>
						<li>Осмотреть комнату ожидания</li>
						<li>Интегрируйте акции в 3D-тур</li>
					</ul>
				</div>
				<div class="col-12 col-md-4 col-lg-3 text-center text-md-left">
					<h5><i class="fas fa-hotel"></i>	ОТЕЛЬ, ГОСТИНИЦА</h5>
					<ul class="p-0">
						<li>Выгодно представить свой номерной фонд клиенту</li>
						<li>Дать клиенту возможность УЖЕ почувствовать себя в номере</li>
						<li>Покажите клиенту ваши дополнительные услуги</li>
					</ul>
				</div>
				<div class="col-12 col-md-4 col-lg-3 text-center text-md-left">
					<h5><i class="fas fa-cogs"></i>	ЗАВОД, ПРОИЗВОДСТВО</h5>
					<ul class="p-0">
						<li>Дать возможность инвесторам убедиться в реальности вашего производства</li>
						<li>Потенциальным соискателям показать новые рабочие места</li>
						<li>Интегрируйте в 3D-тур ссылку на вакансии</li>
					</ul>
				</div>
				<div class="col-12 col-md-4 col-lg-3 mx-auto p-0 text-center text-md-left">
					<h5><i class="fas fa-female"></i>	САЛОН КРАСОТЫ</h5>
					<ul class="p-0">
						<li>Позволить увидеть оборудование и почувствовать атмосферу салона клиентам</li>
						<li>Оценить интерьер</li>
						<li>Укажите ваши социальные сети в 3D-туре</li>
					</ul>
				</div>
				<div class="col-12 col-md-4 col-lg-3 mx-auto p-0 text-center text-md-left">
					<h5><i class="fas fa-store-alt"></i>	МАГАЗИНЫ</h5>
					<ul class="p-0">
						<li>Увидеть широкий ассортимент</li>
						<li>Возможность перейти по интегрированной ссылке в меню сайта или посмотреть изображение товара не выходя из 3D-тура</li>
					</ul>
				</div>
			</div>	
			<div id="feedbacklBlock" class="col-12 p-0">
			<div class="col-12 text-center">
				<div class="container">
					<h4>Наши контакты</h4>
					<p>закажите создание виртуального 3D-тура в <font class="lookstyle">LOOKINSIDE</font></p>
				</div>			
			</div>
			<div class="col-12 text-center row m-0">
				<div class="col-12 col-md-4">
					<div class="container">
						<i class="fas fa-3x fa-mobile-alt"></i>
						<h6>Позвоните нам</h6>
						<p>
							<a class="lookstyleReverse" href="tel:+79178085003">+7(917)-808-50-03</a>
						</p>
					</div>
				</div>
				<div class="col-12 col-md-4">
					<i class="far fa-3x fa-map"></i>
					<div class="container">
						<h6>Работаем по всей Уфе и ближайших городах</h6>
					</div>
				</div>
				<div class="col-12 col-md-4">
					<div class="container">
						<i class="fas fa-3x fa-pencil-alt"></i>
						<h6>
							Напишите нам
						</h6>
						<p>
							<a class="lookstyleReverse" href="mailto:3dlookinside@mail.ru">3dlookinside@mail.ru</a>
						</p>
					</div>
				</div>
			</div>
			<div class="col-12 text-center p-0">
				<div style="height: 300px;" class="shadowblock col-12 p-0">
					<div class="container p-0">
						<div class="row ml-0 mr-0" style="margin-top: 30px;">
							<div class="lookstyle social col-6 col-md-3">
								<i class="fab fa-3x fa-youtube"></i>
								<h6>Youtube</h6>
							</div>
							<div class="lookstyle social col-6 col-md-3">
								<a href="https://www.instagram.com/3d_lookinside/">
									<i class="fab fa-3x fa-instagram" style="padding-left: 15px; padding-right: 15px;"></i>
									<h6>instagram</h6>
								</a>								
							</div>
							<div class="lookstyle social col-6 col-md-3">
								<i class="fab fa-3x fa-vk"></i>
								<h6>Вконтакте</h6>
							</div>
							<div class="lookstyle social col-6 col-md-3">
								<i class="fab fa-3x fa-twitter"></i>
								<h6>Twitter</h6>
							</div>
						</div>
					</div>
				</div>
				<?php echo do_shortcode( '[wpvr id="19"]'); ?> 	
			</div>
		</div>
		</div>
<?php
get_footer();
