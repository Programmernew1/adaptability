var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',  /* точки переключения */
      clickable:true,    /*нажимаешь на слайд - он переключается */ 
      hideOnClick:true,  /* переключение слайда при нажатии на точку*/ 
      
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
     
    },
    loop:true,  /* бесконечный слайдер*/ 
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    loop:true,
  })

document.querySelector('.burger-box').onclick =function(){
  document.querySelector('.burger-menu').classList.toggle('burger-menu-active')
}; 

document.querySelectorAll('span.swiper-pagination-bullet').forEach (function(ff){
  ff.style.background='none'
}); 
document.querySelectorAll('span.swiper-pagination-bullet').forEach(function(ff2){
ff2.style.background='white'
});

var a = document.querySelector(".swiper-button-prev");
a.setAttribute('aria-label',' предыдущий слайд');

var b = document.querySelector(".swiper-button-next");
b.setAttribute('aria-label','следующий слайд');

let element = document.querySelector('.swiper-wraper');
element.setAttribute('aria-hidden','true');

let element = document.querySelector('.s');
element.setAttribute('aria-hidden','true');




