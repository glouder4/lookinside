$(document).ready(function(){
   for(var i=0; i < $('#navigation_bar>ul>li>.col-8>input').length ;i++){
       $('#navigation_bar>ul>li>.col-8>input')[i].checked =false;
   }
   var id ; var newid='#'; var countofids = $('#navigation_bar>ul>li>.col-8>input').length; checker =0;
   $('#navigation_bar>ul>li>.col-8>input').click(function(){
       checker =0;
       for(var i=0; i < $('#navigation_bar>ul>li>.col-8>input').length ;i++){
           if($('#navigation_bar>ul>li>.col-8>input')[i].checked === true){
               checker =0;
               id = $('#navigation_bar>ul>li>.col-8>input')[i].id;
               for(var j = 0 ; j < id.length-1; j++) newid += id[j];
               if($(newid)[0]){
                   if($(newid).hasClass("d-none")) $(newid).removeClass("d-none");
               }
               newid = '#';
           }
           else{
               checker++;
               id = $('#navigation_bar>ul>li>.col-8>input')[i].id;
               for(var j = 0 ; j < id.length-1; j++) newid += id[j];
               if($(newid)[0]) $(newid).addClass("d-none");
               newid = '#';
           }
       }
       if(checker == countofids){
           for(var i=0; i < $('#navigation_bar>ul>li>.col-8>input').length ;i++){
               id = $('#navigation_bar>ul>li>.col-8>input')[i].id;
               for(var j = 0 ; j < id.length-1; j++) newid += id[j];
               if($(newid)[0]){
                   if($(newid).hasClass("d-none")) $(newid).removeClass("d-none");
               }
               newid = '#';
           }
           checker =0;
       }
   });
});