  var swiper = new Swiper('.intro-slider-container', {
    loop: true,
	  allowTouchMove: false,
    pagination: {
      el: '.swiper-pagination',
		clickable:true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 breakpoints: {
      740 : {
		  allowTouchMove: true
	  }
 }
    });
  var swiper = new Swiper('.outer-container', {
	  spaceBetween: 20,
	  allowTouchMove: false,
	  loop:true,
	  slidesPerView: 2,
	  slidesPerGroup: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	   breakpoints: {
      740 : {
        slidesPerView: 1,
		  slidesPerGroup: 1,
		  allowTouchMove: true
      }
	   }
    });

   var swiper = new Swiper('.mob-slider', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
$( ".header__nav-menu-button" ).click(function() {
  $( this ).toggleClass( "active" );
	 $( ".mob__nav" ).slideToggle( "fast", function() {
    // Animation complete.
  });
});