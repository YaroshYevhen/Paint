var APP = {};
APP.mainSlider = $('.slider-container');
APP.newsSlider = $('.news-slider');
APP.priceBtn = $('.price__btn');
APP.$document = $(document);
APP.feedback = $('.feedback');
APP.contactsForm = $('.contacts-form__btn');
APP.application = $('.application');
APP.callback = $('.callback');
APP.scrollBtn = $('.price-calculation-btn');
APP.closeModal = $('.modal-close');
APP.modal = $('.modal');
APP.modalBtn = $('.modal-btn');
APP.ratingItem = $('.js-rating .star-rating__item');
APP.uploadFile = $('.file-btn');
APP.removeFile = $('.selected-files__remove');
APP.wpFile = $('.input-file');
APP.showVideo = $('.production-content__item');
APP.video = $('.video');



function doAnimation(){
   	var windowScroll = $(window).height() + APP.$document.scrollTop(),
       	element = APP.$document.find('.js-animation:not(.animate)')[0];

  $('.js-animation:not(.animate)').each(function(key, item){
  		var offsetAddition = $('body').hasClass('gallery-open-page')? 0: 100;
	  var itemOffset = $(item).offset().top + offsetAddition,
			tableParent = $(item).parents('.palette-table');
	  if(windowScroll >= itemOffset){
	  	if(tableParent.hasClass('enabled') || tableParent.length == 0) {
	  		$(item).addClass('animate');
	  	}
	  }
  });
};
function closeModal(){
	if(APP.video.hasClass('active')) {
		APP.video.find('iframe').attr('src', '');
	}
	APP.modal.removeClass('active');
	$('html').removeClass('overflow');

}

	APP.$document.ready(function() {
		$('.selected-files').hide();

		APP.showVideo.on('click', function() {
			var src = $(this).attr('data-src');

			APP.video.find('iframe').attr('src', src);
			APP.video.addClass('active');
		});

		$('.input-container input').on('keyup', function() {
			var value = $(this).val();
			if (value == "") {
				$(this).removeAttr('value');
			} else {
				$(this).attr('value', value);
			}
		});
		doAnimation ();
		APP.uploadFile.on('click', function() {
			APP.wpFile.click();
	})

	
	APP.wpFile.on('change', function(event) {
		var fileName = event.target.files[0].name,
				replace = fileName.replace(/\s/g,'_');
		$('.selected-files').show();
		$('.selected-files__text').html(replace);
		$('.file-btn__text').hide();
	});

	APP.removeFile.on('click', function() {
		$('.selected-files__text').empty();
		$('.selected-files').hide();
		$('.file-btn__text').show();
		APP.wpFile.val('');
	});

	(function(){
	  var selectedRating = null;

		APP.ratingItem.on('click', function() {
			$(this).parent('.js-rating').addClass('active');
			APP.ratingItem.removeClass('active');
			$(this).addClass('active');
			selectedRating = $(this).index() + 1;
			console.log(selectedRating);
		});

	}());

	$('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('menu');
  });
  $('.dropdown').on('click', function(event) {
		event.stopPropagation();
		//.not('.nav__more')

		if(!$(this).parents('.dropdown.opened').length)
  		$('.dropdown').not(this).removeClass('opened');
  	
  	$(this).toggleClass('opened');
  });

	APP.modalBtn.on('click', function() {
		var attr = $(this).attr('data-target'),
				modal = $('.modal[data-target="' + attr + '"]');

		modal.addClass('active');

	});

	APP.closeModal.on('click', function() {
		closeModal();
	});

	APP.mainSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite:false,
		appendArrows:$('.slider-buttons'),
		nextArrow: '<button class="slick-next slick-arrow"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="14px"> <path fill-rule="evenodd" d="M0.011,6.196 L26.430,6.196 L20.508,1.139 L21.831,0.010 L30.015,6.999 L21.831,13.988 L20.508,12.859 L26.430,7.802 L0.011,7.802 L0.011,6.196 Z"/> </svg></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="14px"> <path fill-rule="evenodd" d="M0.011,6.196 L26.430,6.196 L20.508,1.139 L21.831,0.010 L30.015,6.999 L21.831,13.988 L20.508,12.859 L26.430,7.802 L0.011,7.802 L0.011,6.196 Z"/> </svg></i></button>',
  });

	APP.newsSlider.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		arrows: true,
		infinite:false,
		appendArrows:$('.news-slider-buttons'),
		nextArrow: '<button class="slick-next slick-arrow"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="14px"> <path fill-rule="evenodd" d="M0.011,6.196 L26.430,6.196 L20.508,1.139 L21.831,0.010 L30.015,6.999 L21.831,13.988 L20.508,12.859 L26.430,7.802 L0.011,7.802 L0.011,6.196 Z"/> </svg></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="14px"> <path fill-rule="evenodd" d="M0.011,6.196 L26.430,6.196 L20.508,1.139 L21.831,0.010 L30.015,6.999 L21.831,13.988 L20.508,12.859 L26.430,7.802 L0.011,7.802 L0.011,6.196 Z"/> </svg></i></button>',
    responsive: [
    {
      breakpoint: 991.98,
      settings: {
        vertical: true,
        verticalSwiping: true
      }
    }
  ]
  });
  
  APP.priceBtn.on('click', function(){
  	var currentSlide = $('.js-slide.current'),
  		  elLenght = $('.lines-list__item').length,
  		  element = $('.lines-list__item.active');

  	APP.priceBtn.removeClass('disabled');

    if($(this).hasClass('btn-prev')){
    	var prevSlides = element.prevAll();

    	if(!($(prevSlides).length - 1)){
    		$(this).addClass('disabled');
    	}
    	element.removeClass('active');
    	element.prev().addClass('active');
    	currentSlide.removeClass('current').prev('.js-slide').addClass('current').removeClass('prev');
    }else if($(this).hasClass('btn-next')){
    	var nextSlides = element.nextAll();

    	if(!($(nextSlides).length - 2)){
    		$(this).addClass('disabled');
    	}
    	element.removeClass('active');
    	element.next().addClass('active');
    	currentSlide.removeClass('current').addClass('prev').next('.js-slide').addClass('current');
    }

    linesFill();
  });

  function linesFill() {
  	var element = $('.lines-list__item.active'),
  		  line = $('.current-step');

  	if(!element.length)
  		return null;

  	var elementPosition = element.position().left,
  		  elementWidth = element.width(),
  		  calc = elementPosition + elementWidth,
  		  elementIndex = element.index() + 1,
  		  currentSlide = $('.js-currentIndex');


  	line.css({
  		'width' : calc + 'px',
  	});

  	currentSlide.text(elementIndex);

  }
	linesFill();

	$(window).resize(linesFill);


APP.$document.on('scroll', function(event){
  doAnimation ();
});

$('.palette-tabs__item').on('click', function () {
	var target = $(this).data('target'),
		  elPosition = $(this).position().left + 'px';
	$('.palette-ral, .palette-pms, .palette-ncs, .palette-effects, .news-news, .news-articles, .news-promotions').removeClass('enabled');
	
	console.log(elPosition);

	$(this).addClass('enabled');
	$('.palette-table.'+target).addClass('enabled');
	$('.palette-tabs__line').css('transform', 'translateX(' + elPosition + ')');

	doAnimation ();
});

	$('.features__more').on('click', function() {
		$('.features__text').toggleClass('show');
		$(this).hide();
	});

	$('.vacancy__more').on('click', function() {
		$('.vacancy-container').toggleClass('show');
	});


	APP.contactsForm.on('click', function() {
		$('.contacts-form').hide();
		$('.contacts-sended').show();
	});

	$('.service-description__more').on('click', function() {
		$('.service-description').toggleClass('opened');
		$('.service-description-text').toggleClass('col-xl-12')
	});


	function currentSlideCount(item){
	  var dotsLenght = $(item).find('.slick-dots li').length,
	      activeIndex = $(item).find('.slick-dots li.slick-active').index() + 1;

	  $(item).find('.slick-dots').attr('data-lenght',dotsLenght);
	  $(item).find('.slick-dots').attr('data-current',activeIndex);
	}

	$('.slider-counter').each(function(key, item){
	  currentSlideCount(item)
	  $(item).on('afterChange', function(event, slick, currentSlide, nextSlide){
	    currentSlideCount(item)
	  });
	});


	APP.scrollBtn.on('click', function() {
		var pricePosition = $('.price').position().top - 100 + 'px';
		$('html').animate({ scrollTop: pricePosition }, 500);
	});

	$('input[type="file"]').change(function(e){
  	var fileName = e.target.files[0].name;
	});

	APP.modal.on('click', function(event){
		if($(event.target).hasClass('modal')){
			closeModal();
		}
	});

});
// document ready