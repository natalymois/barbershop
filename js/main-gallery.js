var controls = document.querySelectorAll('#block-gallery .btn');

var slides = document.querySelectorAll('.gallery-content .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
	goToSlide(currentSlide+1);
	goToDrop(currentDrop+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
	goToDrop(currentDrop-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length; // оператор % возвращает значение остатка при делении 1-го операнда на второй, т.е. "n"
	slides[currentSlide].className = 'slide showing';
	
}

// Ставим на паузу 
var playing = true;

function pauseSlideshow(){
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	playing = true;
	slideInterval = setInterval(nextSlide,3000);
}

// Остановка слайдера по ховеру
var ulSlides = document.getElementsByClassName('gallery-content')[0];
ulSlides.onmouseover = ulSlides.onmouseout = handler;
function handler(event) {
  if (event.type == 'mouseover') {
      pauseSlideshow();
  }
  if (event.type == 'mouseout') {
      playSlideshow();
  }
}

// боковая навигация
var next = document.getElementsByClassName('gallery-next')[0];
var prev = document.getElementsByClassName('gallery-prev')[0];

next.onclick = function(){
	pauseSlideshow();
	nextSlide();
};
prev.onclick = function(){
	pauseSlideshow();
	previousSlide();
};

