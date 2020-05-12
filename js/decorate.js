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
        $('#navigationToggleButton').click(function(){
            if(flag == 0){
                flag = 1;
                $('#navigationToggleButton>i').removeClass('fa-arrow-right');
                $('#navigationToggleButton>i').addClass('fa-arrow-left');
                $('#navigation').animate({
                    marginLeft:0
                },600)
            } 
            else{
                flag = 0; 
                $('#navigation').animate({
                    marginLeft:'-310px'
                },600)
                $('#navigationToggleButton>i').removeClass('fa-arrow-left');
                $('#navigationToggleButton>i').addClass('fa-arrow-right');              
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
        $('.pano-wrap')[0].style.width = 100+'%';
        $('.pano-wrap')[0].style.height = 450+'px';
        $('#city_weather')[0].classList += ' d-none';
        var Raiting_1; var Raiting_2;var Raiting_3;var Raiting_4;var Raiting_5;var count_of_votes;
    
    if($('#get_results .basic-answers-results>li>.progress>.progress-bar')[0]) Raiting_1 = parseInt($('#get_results .basic-answers-results>li>.progress>.progress-bar')[0].attributes[2].value);
    else Raiting_1 = 0;
    if($('#get_results .basic-answers-results>li>.progress>.progress-bar')[1]) Raiting_2 = parseInt($('#get_results .basic-answers-results>li>.progress>.progress-bar')[1].attributes[2].value);
     else Raiting_2 = 0;
    if($('#get_results .basic-answers-results>li>.progress>.progress-bar')[2]) Raiting_3 = parseInt($('#get_results .basic-answers-results>li>.progress>.progress-bar')[2].attributes[2].value);
     else Raiting_3 = 0;
    if($('#get_results .basic-answers-results>li>.progress>.progress-bar')[3]) Raiting_4 = parseInt($('#get_results .basic-answers-results>li>.progress>.progress-bar')[3].attributes[2].value);
     else Raiting_4 = 0;
    if($('#get_results .basic-answers-results>li>.progress>.progress-bar')[4]) Raiting_5 = parseInt($('#get_results .basic-answers-results>li>.progress>.progress-bar')[4].attributes[2].value);
    else Raiting_5 = 0;
    if($('.basic-stats-votes-number')[0])  count_of_votes = parseInt($('.basic-stats-votes-number')[0].innerText);
     else count_of_votes = 0;
    var Raiting = Math.round((Raiting_1*1 + Raiting_2*2 + Raiting_3*3 + Raiting_4*4 + Raiting_5*5)/count_of_votes);
    $('.basic-yop-poll-container')[0].classList += ' d-none';
    $('#get_results')[0].classList += ' d-none';
    $('.rate1').raty({
        score: Raiting,
        click: function(score, evt) {
            $('.basic-answer-content>input')[score-1].checked = true;
            $('.basic-vote-button')[0].click();
            
        }
    });
    for(var i =0 ; i<$('.rate1>img').length;i++){
        $('.rate1>img')[i].style.height = 16+'px';
    }
    $('.rate1')[0].style.height = 16+'px';
    
   $('#count_of_votes')[0].innerHTML += ' <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left p-0"><h6>Голосов: '+$('.basic-stats-votes-number')[0].innerText +'</h6></div>';
   $('#count_of_votes_m')[0].innerHTML += ' <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 textleft p-0"><h6>Голосов: '+$('.basic-stats-votes-number')[0].innerText +'</h6></div>';
   
   //$('#panorama>.pano-wrap>.pnlm-render-container')[0].innerHTML += ' <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left p-0><img src="../123.png"></div>';
    }
});