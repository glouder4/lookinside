$(document).ready(function(){
    if (window.location.pathname == '/'||window.location.pathname == '/simferopol/')
    {           
        var temp ='';
        var icon ='';
        moment.locale('ru'); 
        var time = moment().tz("Asia/Yekaterinburg").format("DD.MM.YYYY HH:MM");
        function getTimeNow(){
            setTimeout(function(){     
                $('#city_weather')[0].innerHTML = icon;
                $('#city_weather')[0].innerHTML += '<p class="m-0 text-center">'+time+'</p>';
                //$('#city_weather')[0].innerHTML += '<p class="m-0">температура: '+temp+'</p>';
                //$('#city_weather')[0].innerHTML += '<p class="m-0">'+$('.awe_wind')[0].innerText+'</p>';
                //$('#city_weather')[0].innerHTML += '<p class="m-0">'+$('.awe_humidty')[0].innerText+'</p>';
                getTimeNow();
            },2000) 
        } 
        function getWeather(){
            setTimeout(function(){
                temp= '<p class="ml-0 text-center">'+$('.awesome-weather-current-temp>strong')[0].innerText+'</p>';
                icon= '<p class="ml-0 text-center">'+$('.awesome-weather-current-temp>strong>i')[0].outerHTML+'</p>';
            },1200000)
        }
        setTimeout(function(){                
            temp= '<p class="ml-0 text-center">'+$('.awesome-weather-current-temp>strong')[0].innerText+'</p>';
            icon= '<p class="ml-0 text-center">'+$('.awesome-weather-current-temp>strong>i')[0].outerHTML+'</p>';           
            getTimeNow();
            getWeather();
        },3000)         
    }
    else if((window.location.pathname == '/%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82%d1%8b/')||(window.location.pathname == '/%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/')){
        var flag = 0;
		$('#navigation_town')[0].style.display = 'none';
		$('#townButton').click(function(){
			if($('#navigation_town')[0].style.display == 'none'){
				$('#navigation_town').show();
				console.log('1312');
			}else{
				$('#navigation_town').hide();
				console.log('123');
			}			
		})
    }
    else if(window.location.pathname == '/about-us/' || window.location.pathname == '/com-request/'|| window.location.pathname == '/contacts/' ||window.location.pathname == '/vakansii/'){
        $('#city_weather')[0].classList += ' d-none';
        
        var data = [
        	{
        		date: 'Q1 - 2018',
        		content: 'Lorem ipsum dolor sit amet'
        	},
        	{
        		date: 'Q2 - 2018',
        		content: 'Lorem ipsum dolor sit amet'
        	},
        	{
        		date: 'Q3 - 2018',
        		content: 'Lorem ipsum dolor sit amet'
        	},
        	{
        		date: 'Q4 - 2018',
        		content: 'Lorem ipsum dolor sit amet'
        	}
        ];
        
        $("#roadmap").roadmap(data, {
        	eventsPerSlide: 6,
        	slide: 1,
        	rootClass: 'roadmap',
        	prevArrow: 'prev',
        	nextArrow: 'next',
        	orientation: 'vertical',
        	eventTemplate: '<div class="event">' +
        			'<div class="event__date">####DATE###</div>' +
        			'<div class="event__content">####CONTENT###</div>' +
        		'</div>'
        });
        
        
        
    }
    else{
        $('#city_weather')[0].classList += ' d-none';
   //$('#panorama>.pano-wrap>.pnlm-render-container')[0].innerHTML += ' <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left p-0><img src="../123.png"></div>';
    }
});