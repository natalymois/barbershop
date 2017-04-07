$(function(){

   /*-----При клике на блок входа всплывает модальное окно личного кабинета----*/
  
   $('.user-block').click(function(event){
	  $('.modal-content').slideToggle(1000);
   });
  
   $('.modal-content-close').click(function(e){
	  $('.modal-content').css('display','none');
   });
   
   /*---- Второе модальное окно: карта ----*/
   /*Клик на ссылку в футере*/
   $('.footer-contacts a').click(function(event){
	   event.preventDefault();
	  $('.modal-content-map').slideToggle(1000);
   });
   
   $('.modal-content-close').click(function(e){
	  $('.modal-content-map').css('display','none');
   });
   
   /*Клик в блоке "Контактная информация: как проехать"*/
   
   $('.main-content-left .btn-map').click(function(event){
	  event.preventDefault();
	  $('.modal-content-map').slideToggle(1000);
   });
   
   $('.modal-content-close').click(function(e){
	  $('.modal-content-map').css('display','none');
   });
   
  /* $('body').click(function(e) {

    if($(e.target).closest('.modal-content-map').length==0) {
	$('.modal-content-map').css('display','none');
   }
});*/
 
});
  
