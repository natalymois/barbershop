// Слайд-шоу данного товара

$(function(){

 $('.item-small a').click(function(event){
 //Отменяем действия с объектом по умолчанию (ссылки и т.д.)
 event.preventDefault();
  
  //Предупреждаем повторное обновление одной и той же большой картинки:
  if($('.item-big img').attr('src') != $(this).attr('href')){
  
  $('.item-big img').hide().attr('src',$(this).attr('href')); // $(this) соответствует '.item-small a', по которому кликнули
  $('.item-big img').fadeIn(1000);
  }
 });
 
$('.item-small a').click(function(){
   $('.item-small a').fadeTo(1000,1);
  $(this).fadeTo(1000, 0.6);
   
 });
   
});  // Конец ready

 