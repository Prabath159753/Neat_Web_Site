(function ($) {
    "use strict";

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:35,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:4
	      }
	    }
		});

	};
	carousel();

	// Experience counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

	// Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });


	var activeFilter = 'all';

	$('.product-filter-button').on('click', function(e) {
		// remove btn-primary from all buttons first
		$('.product-filter-button').removeClass('btn-primary');
		$('.product-filter-button').addClass('btn-outline-primary');
	  
		// add btn-primary to active button
		var button = $(this);
		button.removeClass('btn-outline-primary');
		button.addClass('btn-primary');
		filterItems(button.data("filter"));
		e.preventDefault();
		console.log(button.data("filter"));
	})

	function filterItems(filter) {
		if(filter === activeFilter) {
		  return;
		}
	  
		activeFilter = filter;
		$('.product-grid .product-item').each(function () {
		  var card = $(this);
		  var groups = card.data("groups");
	  
		  console.log(groups);
		  console.log(card);
	  
		//   var show = false;
		//   if(filter === 'all') {
		// 	show = true;
		//   }
		  
		//   else {
		// 	for(var i = 0; i < groups.length; i ++) {
		// 	  if(groups[i] === filter) {
		// 		show = true;
		// 		// console.log(filter);
		// 		console.log(groups[i]);
		// 	  }
		// 	}
		//   }
		//   // hide everything first
		//   card.fadeOut(400);
	  
		//   setTimeout(function() {
		// 	if(show && !card.is(":visible")) {
		// 		card.fadeIn(400)
		// 	  }
		// 	}, 500);
		});
	}

    
})(jQuery);

