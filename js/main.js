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
});