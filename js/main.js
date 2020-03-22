$( document ).ready(function() {
  new WOW().init();

  var header = $('#header'),
	scrollPrev = 0;
	if($( window ).width() >575 ){	  
		$(window).scroll(function() {
			var scrolled = $(window).scrollTop();
		 
			if ( scrolled > 100 && scrolled > scrollPrev ) {
				header.addClass('out');
			} else {
				header.removeClass('out');
			}
			scrollPrev = scrolled;
		});

		$('#goUp').click(function(){
		 	$('html, body').animate({
		      scrollTop: $('#element_1').offset().top-90
		    }, 1500);
		 } )
	}
	else{
		header.removeClass('fixed-top');
		$('#goUp').click(function(){
	 	$('html, body').animate({
	      scrollTop: $('header').offset().top
	    }, 1500);
	 } )
	}

	$('#set_program_1').hide();
	$('#set_program_3').hide();
	$('#set_program_4').hide();
	$('#program_1').click(function(){
		$('#set_program_1').fadeIn(1000);
		$('#set_program_2').hide();
		$('#set_program_3').hide();
		$('#set_program_4').hide();
		$("#"+$('#element_3>div>div>.active')[0].id).removeClass('active');
		$('#program_1').addClass('active');
	})
	$('#program_2').click(function(){
		$('#set_program_2').fadeIn(1000);
		$('#set_program_1').hide();
		$('#set_program_3').hide();
		$('#set_program_4').hide();
		$("#"+$('#element_3>div>div>.active')[0].id).removeClass('active');
		$('#program_2').addClass('active');
	})
	$('#program_3').click(function(){
		$('#set_program_3').fadeIn(1000);
		$('#set_program_2').hide();
		$('#set_program_1').hide();
		$('#set_program_4').hide();
		$("#"+$('#element_3>div>div>.active')[0].id).removeClass('active');
		$('#program_3').addClass('active');
	})
	$('#program_4').click(function(){
		$('#set_program_4').fadeIn(1000);
		$('#set_program_2').hide();
		$('#set_program_3').hide();
		$('#set_program_1').hide();
		$("#"+$('#element_3>div>div>.active')[0].id).removeClass('active');
		$('#program_4').addClass('active');
	})
});