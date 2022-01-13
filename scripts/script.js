$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["WEB DEVELOPER", "BACKEND DEVELOPER", "GAME ARTIST"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      768:{
        items:3
      },
      938:{
        items:4
      }
    }
  });

  var skillTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function() {
    if(window.pageYOffset > skillTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
    }
  });

  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

});



/* const texts = ['websites', 'illustrations', 'pancakes'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(async function type(){
  
  if(count === texts.length){
    count = 0;
    await sleep(500);
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type, 300);

}());

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} */
