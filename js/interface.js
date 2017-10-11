( function($) {
  'use strict';  
$(function(e) {
/*-------------------------------------------------------------------------------
	Background slider
	-------------------------------------------------------------------------------*/
	$('#slideshow .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	autoplay:true,
    autoplayTimeout:5000,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{items:1},
        1000:{items:1}
    }
	})
	
/*------------------------------------------------------------------
	Intro-Slider
	-------------------------------------------------------------------*/
	$('#intro_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        1000:{items:1}
    }
	})
	
/*------------------------------------------------------------------
	Latest-Projects
	-------------------------------------------------------------------*/
	$('#portfolio_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:2},
		800:{items:3},
        1000:{items:4}
    }
	})
	
/*------------------------------------------------------------------
	Testimonials-Slider
	-------------------------------------------------------------------*/
	$('#testimonial_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:3}
    }
	})
	
/*------------------------------------------------------------------
	Testimonials-Slider-2
	-------------------------------------------------------------------*/
	$('#testimonial_slider2 .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:3}
    }
	})
	
/*------------------------------------------------------------------
	Testimonials-Slider-3
	-------------------------------------------------------------------*/
	$('#testimonial_slider3 .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	})
/*------------------------------------------------------------------
	Testimonials-Slider-4
	-------------------------------------------------------------------*/
	$('#testimonial_slider4 .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:2}
    }
	})
	
/*------------------------------------------------------------------
	Event-Slider
	-------------------------------------------------------------------*/
	$('#event_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	})
	
/*------------------------------------------------------------------
	Event-Schudule-Slider
	-------------------------------------------------------------------*/
	$('#event-schudule-slider .owl-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{items:1},
		600:{items:1},
		1000:{items:1}
	}
	})	
	
/*------------------------------------------------------------------
	Memories-Slider
	-------------------------------------------------------------------*/
	$('#memories_slider .owl-carousel').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	dots:false,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
	autoplayTimeout:2000,
	responsive:{
		0:{items:1},
		600:{items:2},
		1000:{items:3}
	}
	})	
	
/*------------------------------------------------------------------
	Chef Slider
	-------------------------------------------------------------------*/
	$('#chefs_slider .owl-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{items:1},
		600:{items:2},
		1000:{items:3}
	}
	})
	
/*------------------------------------------------------------------
	Office Gallery
	-------------------------------------------------------------------*/
	$('#office_gallery_slider .owl-carousel').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{items:1},
		600:{items:2},
		1000:{items:5}
	}
	})
	
/*------------------------------------------------------------------
	App Screen Slider
	-------------------------------------------------------------------*/
	$('#app_screen_slider .owl-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:false,
	dots:true,	
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{items:1},
		600:{items:2},
		1000:{items:4}
	}
	})
	
/*------------------------------------------------------------------
	Feature Product Slider
	-------------------------------------------------------------------*/
	$('#feature-products_slider .owl-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{items:1},
		600:{items:2},
		1000:{items:3}
	}
	})
	
/*------------------------------------------------------------------
	Special Product Slider
	-------------------------------------------------------------------*/
	$('#special-offer_slider .owl-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{items:1},
		600:{items:2},
		1000:{items:4}
	}
	})
	
/*------------------------------------------------------------------
	Similar Product Slider
	-------------------------------------------------------------------*/
	$('#similar-products_slider .owl-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{items:1},
		600:{items:2},
		1000:{items:3}
	}
	})
/*------------------------------------------------------------------
	Related Portfolio Slider
	-------------------------------------------------------------------*/
	$('#related-portfolio_slider .owl-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{items:1},
		600:{items:2},
		1000:{items:3}
	}
	})	
	
/*------------------------------------------------------------------
	Portfolio Single Slider
	-------------------------------------------------------------------*/
	$('#portfolio-single .owl-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots:false,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{items:1},
		600:{items:1},
		1000:{items:1}
	}
	})
					
/*------------------------------------------------------------------
	Single Product Slider
	-------------------------------------------------------------------*/
    $('#product-single.owl-carousel').owlCarousel({
    thumbs: true,
    thumbImage: false,
    thumbsPrerendered: true,
	dots:false,
	nav:true,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
		responsive:{
		0:{items:1},
		600:{items:21},
		1000:{items:1}
	}
  });
  
/*------------------------------------------------------------------
	Portfolio Js
	-------------------------------------------------------------------*/
	$('.js-iso').each(function(e) {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.js-iso-item',
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.js-iso-item'
				}	
			});	
		});
    }); 
	
	$('.filter a').on('click', function(e) {
		$('.filter .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.js-iso').isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				queue: false
			}
		});
		return false;
	});

	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
		verticalFit: true,
		},
		
		zoom: {
			enabled: true,
			duration: 500,
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
	
/*------------------------------------------------------------------
	Portfolio Header Menu
	-------------------------------------------------------------------*/		   
	$("a.open-port-nav").on('click', function(e) {
		$(".portfolio_header").toggleClass("portfolio_header_open");
    });
	
/*------------------------------------------------------------------
	Mobile Menu
	-------------------------------------------------------------------*/		   
	$('#navigation li.menu-item-has-children .arrow').on('click', function(e) {
		e.stopPropagation();
		var $el = $(this).siblings('ul.sub-menu').slideToggle();
	});
	$('#navigation li.menu-item-has-children .arrow').on('click', function(e) {
		e.stopImmediatePropagation();  
	});
	
/*------------------------------------------------------------------
	Back To Top
	-------------------------------------------------------------------*/
 var top = $('#back-top');
	top .hide();	 
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				top .fadeIn();
			} else {
				top .fadeOut();
			}
		});
		$('#back-top a').on('click', function(e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});	 
});

})(jQuery);