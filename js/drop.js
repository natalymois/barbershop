 /*---открываем меню на мобильных устройствах---*/
 
 var mobiHover = document.getElementsByClassName('mobi-hover');
 
 for (var i = 0; i < mobiHover.length; i++) {
			
	mobiHover[i].onclick = function(){
				
			this.classList.toggle('open');
								
	}
}