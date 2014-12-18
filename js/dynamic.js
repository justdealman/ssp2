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
			pause: 2500,
			animationComplete: function(current) {
				var current = $('.slider .container > div > div:nth-child('+current+')');
				current.children('div').stop(true,true).delay(500).animate({
					'right': '0'
				}, 1000);
				current.siblings().children('div').stop(true,true).delay(500).animate({
					'right': '-746px'
				}, 0);
			}
		});
		slider();
		$('.slider .container > div > div:nth-child(1) > div').css({
			'right': '0'
		});
	}
	var speed = 500;
	$('.index > ul > li:first-child, .index .nav').hover(
		function() {
			$('.index .nav').stop(true,true).delay(speed).slideDown(speed);
			/*$('.index').stop(true,true).delay(speed).animate({
				'min-height': $('.index .nav').height()+42+'px'
			}, 500);*/
			$('.index h5 span, .index > ul li:first-child h2').addClass('active');
		},
		function() {
			$('.index .nav').stop(true,true).delay(speed*2).slideUp(speed);
			/*$('.index').stop(true,true).delay(speed*2).animate({
				'min-height': '0'
			}, 500);*/
			$('.index h5 span, .index > ul li:first-child h2').removeClass('active');
		}
	);
	/*$('.index h5, .introduction .nav').hover(
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
	);*/
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
					'top': '0',
					'bottom': 'auto',
					'margin-left': '-500px'
				});
			}
			if ( $(document).scrollTop() > $(document).height()-$('.content .nav').outerHeight()-$('.footer').height()-10 ) {
				$('.content .nav').css({
					'top': 'auto',
					'bottom': $(document).scrollTop()-($(document).height()-$(window).height()-$('.footer').height()-10)+'px'
				});
			}
		}
		else {
			$('.content .nav').removeClass('fixed');
			$('.content .nav').css({
				'top': '0',
				'bottom': 'auto',
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