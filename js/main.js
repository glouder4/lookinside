$( document ).ready(function() {
	$('#ShareWidget').click(function(){
      if($( window ).width() > 500){      
        $('#modal').show();  
        if(window.location.pathname != '/'){          
          $('#modal')[0].style="left:0;display:block;"
          $(document).bind('touchmove', false);
        }
      }
      else{
        window.location.href = "tel:+79178085003";
      }
    });  
    $('#closeModal').click(function(){
    	console.log(312);
      $('#modal').hide();
      $(document).bind('touchmove', true);
    }); 
    $("#main_page_slider").flipster({
        style: 'carousel',
        spacing: -0.5,
        buttons:   true,
        loop: true,
        touch: true,
   });

     const section = $('.col-xl-10>div'),
            nav = $('.menu'),
            navHeight = nav.outerHeight(); // получаем высоту навигации 

      // поворот экрана 
      window.addEventListener('orientationchange', function () {
          navHeight = nav.outerHeight();
      }, false);

      $(window).on('scroll', function () {
          const position = $(this).scrollTop();

          section.each(function () {
              const top = $(this).offset().top - navHeight - 5,
                    bottom = top + $(this).outerHeight();

              if (position >= top && position <= bottom) {
                  nav.find('a').removeClass('active');
                  section.removeClass('active');

                  $(this).addClass('active');
                  nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
              }
          });
      });

      nav.find('a').on('click', function () {
          const id = $(this).attr('href');

          $('html, body').animate({
              scrollTop: $(id).offset().top - navHeight
          }, 500);

          return false;
      });
});