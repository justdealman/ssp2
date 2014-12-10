function slider() {
	if ( $(window).width() < 12001 ) {
		$('.slider, .slider .container, .slider > div > div').width(960);
		$('.slider > div > div img').each(function() {
			$(this).css({'margin-left': -($(this).attr('width')-960)/2+'px'});
		});
	}
	if ( $(window).width() > 12000 && $(window).width() < 14810 ) {
		$('.slider, .slider .container, .slider > div > div').width($(window).width()-40);
		$('.slider > div > div img').each(function() {
			$(this).css({'margin-left': -($(this).attr('width')-($(window).width()-40))/2+'px'});
		});
	}
	if ( $(window).width() > 14800 ) {
		$('.slider, .slider .container, .slider > div > div').width(1240);
		$('.slider > div > div img').each(function() {
			$(this).css({'margin-left': -($(this).attr('width')-1240)/2+'px'});
		});
	}
}
function footer() {
	$('.footer').css({
		'margin-top': -$('.footer').outerHeight()+'px'
	});
	$('.clear').css({
		'height': $('.footer').outerHeight()+'px'
	});
}
$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		$('.slider').slides({
			generatePagination: true,
			generateNextPrev: false,
			container: 'container',
			effect: 'fade',
			fadeSpeed: 250,
			play: 10000,
			pause: 2500
		});
		slider();
	}
	var speed = 500;
	$('.index h5, .introduction .nav').hover(
		function() {
			$('.introduction .nav h2').stop(true,true).slideUp(speed);
			$('.introduction .nav ul').stop(true,true).delay(speed).slideDown(speed);
			$('.index h5 span').addClass('active');
		},
		function() {
			$('.introduction .nav ul').stop(true,true).delay(speed*2).slideUp(speed);
			$('.introduction .nav h2').stop(true,true).delay(speed*3).slideDown(speed);
			$('.index h5 span').removeClass('active');
		}
	);
	footer();
	$('.content .nav > li > ul > li > a').bind('click', function() {
		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top }, 500);
		return false;
	});
	$(window).bind('scroll', function() {
		if ( $(document).scrollTop() > $('.content').offset().top ) {
			$('.content .nav').addClass('fixed');
			if ( $(window).width() < 1281 ) {
				$('.content .nav').css({
					/* 'margin-left': -($(window).width())/2+'px' */
					'margin-left': '-500px'
				});
			}
			if ( $(window).width() > 1280 ) {
				$('.content .nav').css({
					'margin-left': '-500px'
				});
			}
		}
		else {
			$('.content .nav').removeClass('fixed');
			$('.content .nav').css({
				'margin-left': '0'
			})
		}
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
});
$(window).resize(function() {
	if ( $('.slider').length > 0 ) {
		slider();
	}
	footer();
	if ( $(window).width() < 1281 ) {
		$('.content .nav.fixed').css({
			/* 'margin-left': -($(window).width()-40)/2+'px' */
			'margin-left': '-500px'
		});
	}
	if ( $(window).width() > 1280 ) {
		$('.content .nav.fixed').css({
			'margin-left': '-500px'
		});
	}
});