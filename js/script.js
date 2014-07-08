$(window).load(function () {
	if (location.hash!=0) {
		var objectid = location.hash.substring(1);
		$('.object').css({'z-index': '1020'});
		$('.object.'+objectid).fadeIn(0);
		$('.object.'+objectid).css({'z-index': '1030'});
		$('header h1').fadeOut(0);
		var text = $('nav li.show > a[data-accessory='+objectid+']').attr('data-inform');
		$('.slide-insert').empty();
		$('.slide-insert').append(text);
		$('.slide-insert').css({'margin-top': '0'});
		$('.tip-nav').css({'margin-bottom': '30px'});
		$('nav ul li ul').hide();
		var current = $('nav ul li.show > a[data-accessory='+objectid+']').parents('.level1').addClass('active');
		current.siblings().addClass('passive');
		if ( current.index() == 0 ) {
			$('.slide-insert').css({'margin-top': '-22px'});
			$('.tip-nav').css({'margin-bottom': '34px'});
		}
		if ( current.index() == 2 ) {
			$('.slide-insert').css({'margin-top': '22px'});
			$('.tip-nav').css({'margin-bottom': '8px'});
		}
		$('nav ul').hover(
			function() {
				$('.tip-nav').css({'visibility': 'hidden'});
				$('nav > ul > li.level1.passive').addClass('hover');
			},
			function() {
				$('.tip-nav').css({'visibility': 'visible'});
				$('nav > ul > li.level1.passive').removeClass('hover');
			}
		);
		
		submenu();
		
		$('.loading').fadeOut(150);
		return false;
	}
	$('.loading').fadeOut(150);
});
function submenu() {
	$('.slide-insert li.active').css({'z-index': '1000'});
	$('.slide-insert').on('mouseenter', 'li.active', function() {
		$(this).find('ul').remove();
		var sub = $(this).html();
		var saw = $(this).width()+28;
		var xo = $('nav li a:contains('+sub+')').parent().children('ul').html();
		if ( xo.length ) {
			$(this).addClass('hover');
			$(this).append('<ul>'+xo+'</ul>');
			$(this).find('ul').delay(250).fadeIn(250);
			$(this).find('ul').css({'left': saw+'px'});
			$(this).find('ul li a').bind('click', function() {
				var objectid = $(this).attr('data-accessory');
				console.log(objectid);
				location.hash = objectid;
				$('.object').css({'z-index': '1020'});
				$('.object.'+objectid).fadeIn(1000);
				$('.object.'+objectid).css({'z-index': '1030'});
				$('header h1').fadeOut(0);
				var text = "";
				var text = $(this).attr('data-inform');
				$('.slide-insert').empty();
				$('.slide-insert').append(text);
				$('.slide-insert').css({'margin-top': '0'});
				$('.tip-nav').css({'margin-bottom': '30px'});
				$('nav ul li ul').hide();
				$('nav > ul > li.level1').removeClass('hover active passive');
				var current = $('nav .level1:nth-child(2)').addClass('active');
				current.siblings().addClass('passive');
				$('.slide-insert li.active').css({'z-index': '1000'});
				if ( current.index() == 0 ) {
					$('.slide-insert').css({'margin-top': '-22px'});
					$('.tip-nav').css({'margin-bottom': '34px'});
				}
				if ( current.index() == 2 ) {
					$('.slide-insert').css({'margin-top': '22px'});
					$('.tip-nav').css({'margin-bottom': '8px'});
				}
				return false;
			});
		}
	});
	$('.slide-insert').on('mouseleave', 'li.active', function() {
		$(this).find('ul').delay(500).fadeOut(0, function() {
			$('.slide-insert li.active ul').delay(500).remove();
		});
		$(this).removeClass('hover');
	});
}
$(document).ready(function () {
	//$('.tip-nav > .home > a').css({'border': '1px solid red !important'});

	$('.slides').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slidespeed: 250,
		play: 10000,
		pause: 0
	});


	$('.b-history.object').fadeOut(150);

	$('body').delay(500).animate({'opacity': '1'});
	
	$('.b-search a').click(function(event){
		event.preventDefault();
		if ($(this).hasClass('default') ) {
			$(this).parent().find('p input').stop(true, true).animate({'left': '0'}, 500, 'easeInQuad');         
			$(this).removeClass('default');
		} else {
			$(this).parent().find('p input').stop(true, true).animate({'left': '239px'}, 500, 'easeInQuad'); 
			$(this).addClass('default');
			$('.b-search ul').slideUp(0);
		}
		return false;
	});

	$('.b-search p input').click(function() {
		$(this).parent().parent().children('ul').slideDown(0);
		return false;
	});
	$('.b-search ul li').click(function() {
		$(this).parent().parent().find('p input').val($(this).text());
		$(this).parent().slideUp(0);
	});

	$('.scrollable').jScrollPane({
		mouseWheelSpeed: 100,
		showArrows: true,
		autoReinitialise: true,
		autoReinitialiseDelay: 100
	});

	$('nav > ul > li').hover(
		function() {
			$(this).children('ul').stop(true, true).fadeIn(0);
			$(this).addClass('active');
		},
		function() {
			$(this).children('ul').stop(true, true).fadeOut(0);
			$(this).removeClass('active');
		}
	);

	$('nav > ul > li > ul > li').hover(
		function() {
			$(this).children('ul').stop(true, true).delay(500).fadeIn(0);
			$(this).addClass('active');
		},
		function() {
			$(this).children('ul').stop(true, true).delay(500).fadeOut(0);
			$(this).removeClass('active');
		}
	);
	
	$('nav > ul > li > ul').each(function() {
		var lvl2height = $(this).height();
		$(this).find('ul').css({'min-height': lvl2height+'px'});
	});
	
	$('nav ul li').has('ul').addClass('sub');

	
    function bindHoverFlux(){
        $('.slidecontainer.hoverable .images div').hover(
            function() {
                $('nav, header > h1').fadeOut(0);
                var text = "";
                var text = $(this).attr('data-inform');
                $('.slide-insert').append(text);
            },
            function() {
                $('nav, h1').fadeIn(0);
                $('.slide-insert').empty();
            }
        );
    }

	// bindHoverFlux();

	var sliderheight = $('.b-slider').height();
	
	$('nav > ul > li').addClass('level1');
	
	$('nav li > a, .b-slider .images > div, .b-search ul li').bind('click', 'a', 
		function() {
			var objectid = $(this).attr('data-accessory');
			console.log(objectid);
			location.hash = objectid;
			$('.object').css({'z-index': '1020'});
			$('.object.'+objectid).fadeIn(1000);
			$('.object.'+objectid).css({'z-index': '1030'});
			$('header h1').fadeOut(0);
			var text = "";
			var text = $(this).attr('data-inform');
			$('.slide-insert').empty();
			$('.slide-insert').append(text);
			$('.slide-insert').css({'margin-top': '0'});
			$('.tip-nav').css({'margin-bottom': '30px'});
			$('nav ul li ul').hide();
			$('nav > ul > li.level1').removeClass('hover active passive');
			var current = $(this).parents('.level1');
			if ( current.length ) {
				current.addClass('active');
				current.siblings().addClass('passive');
				if ( current.index() == 0 ) {
					$('.slide-insert').css({'margin-top': '-22px'});
					$('.tip-nav').css({'margin-bottom': '34px'});
				}
				if ( current.index() == 2 ) {
					$('.slide-insert').css({'margin-top': '22px'});
					$('.tip-nav').css({'margin-bottom': '8px'});
				}
			}
			else {
				$('nav > ul > li.level1:nth-child(2)').addClass('active').siblings().addClass('passive');
			}
			$('nav ul').hover(
				function() {
					$('.tip-nav').css({'visibility': 'hidden'});
					$('nav > ul > li.level1.passive').addClass('hover');
				},
				function() {
					$('.tip-nav').css({'visibility': 'visible'});
					$('nav > ul > li.level1.passive').removeClass('hover');
				}
			);
			submenu();
			return false;
		}
	);
	
	$('.tip-nav li.home > a, .b-logo a').bind('click', 
		function() {
			location.hash = "";
			$('.slide-insert').empty();
			$('header h1').fadeIn(0);
			$('nav > ul > li.level1').removeClass('hover passive active');
			$('.object').fadeOut(1000);
			$('.object .info').css({'left': -2*pwidth+'px'});
			$('.object .slides').css({'left': '0'});
			$('.object .slides .show').fadeIn(0);
			$('.object .slides .pagination').removeClass('active');
			return false;
		}
	);
	
	$('.b-search ul li').bind('click',
		function() {
			event.preventDefault();
			$(this).parents('.b-search').find('p input').val('');
			$(this).parents('.b-search').find('p input').stop(true, true).animate({'left': '239px'}, 500, 'easeInQuad'); 
			$(this).parents('.b-search').children('a').addClass('default');
			$('.b-search ul').slideUp(0);
			return false;

		}
	);



//	$('nav li.show > a.object2, #slider2 .image1').bind('click',
//		function() {
//            $('.object-fade').fadeIn(250);
//            $('.object.object1').css({'display' : 'none'}).css({left : 0}).fadeIn();
//            $('nav, header h1').fadeOut(0);
//            var text = "";
//            var text = $(this).attr('data-inform');
//            $('.slide-insert').append(text);
//            $('.tip-nav li.home > a, .b-logo a').bind('click',
//                function() {
//                    $('.object-fade').delay(0).queue(function(){ $(this).fadeOut(); $(this).dequeue(); });
//                    $('.object.object1').fadeOut().css({'left' :'-100%'}).fadeIn();
//                    $('.object.object1 .info').fadeOut().css({'left': -infowidth + 'px'}).fadeIn();
//                    $('.object.object1 .slides').fadeOut().css({'left': '0'}).fadeIn();
//                    $('.object.object1 .slides .show').fadeIn();
//                    $('.slides .pagination').removeClass('active');
//                    $('.object.object1 .slides .show').fadeIn();
//                    $('.slide-insert').empty();
//                    $('nav, header h1').fadeIn(0);
//                    return false;
//                }
//            );
//            return false;
//        }
//	);

	// Object sizes
	
	var logoposition = $('.slidewrap:first-child').width();
	$('.b-logo').css({'padding-left': logoposition-68 + 'px'});
	var topmargin = (logoposition*2)+5;
	$('nav, header h1').css({'margin-left': topmargin + 'px'});
	$('.slide-insert, .slide-insert2').css({'left': topmargin + 'px'});
	
	var splitter = 4;
	var pwidth = $('.object').width()*0.1;
	var pheight = $('.b-content').height()*0.33;
	
	$('.object .info').css({'left': -2*pwidth+'px', 'width': 2*pwidth+'px'});
	
	$('.object .info .opacity').css({'width': pwidth*2-34+'px'});
	
	$('.slides .container > div img.horizontal').css({'width': pwidth*5+'px'});
	$('.slides .container > div img.vertical').css({'left': pwidth*1+'px', 'width': pwidth*3+'px'});

	$('.object, .object-fade, .object .info, .object .info .scrollable, .mCSB_container, .object .slides, .object .slides .container, .object .slides .container div,  .object .slides .pagination, .slides .container > div img').css({'height': pheight*3-splitter+'px'});
	$('.object .slides .container, .object .slides .container div').css({'width': pwidth*5+'px'});
	$('.slides ul.pagination').css({'left': pwidth*5+'px', 'margin-left': splitter+2+'px', 'margin-top': 0+'px'});
	
	// 3 previews
	
	$('.slides ul.pagination.size3 li.img1 span.big').css({'width': pwidth*3-splitter+'px', 'height': pheight*3-splitter+'px'});
	$('.slides ul.pagination.size3 li.img2 span.big').css({'left': pwidth*3+'px', 'width': pwidth*2+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size3 li.img3 span.big').css({'left': pwidth*3+'px', 'top': pheight*2+'px', 'width': pwidth*2+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size3 li.img1 span.small').css({'width': pwidth*3+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size3 li.img2 span.small').css({'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size3 li.img3 span.small').css({'left': pwidth+'px', 'top': pheight*2+'px', 'width': pwidth*2+'px', 'height': pheight-splitter+'px'});
	
	// 5 previews
	
	$('.slides ul.pagination.size5 li.img1 span.big').css({'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size5 li.img2 span.big').css({'left': pwidth*2+'px', 'width': pwidth*3+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size5 li.img3 span.big').css({'top': pheight+'px', 'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size5 li.img4 span.big').css({'left': pwidth*2+'px', 'top': pheight*2+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size5 li.img5 span.big').css({'left': pwidth*4+'px', 'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size5 li.img1 span.small').css({'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size5 li.img2 span.small').css({'left': pwidth*2+'px', 'width': pwidth+'px', 'height': pheight+'px'});
	$('.slides ul.pagination.size5 li.img3 span.small').css({'left': pwidth*2+'px', 'top': pheight-splitter+'px', 'width': pwidth+'px', 'height': pheight+'px'});
	$('.slides ul.pagination.size5 li.img4 span.small').css({'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight+'px'});
	$('.slides ul.pagination.size5 li.img5 span.small').css({'left': pwidth+'px', 'top': pheight*2+'px', 'width': pwidth*2+'px', 'height': pheight-splitter+'px'});
	
	// 7 previews
	
	$('.slides ul.pagination.size7 li.img1 span.big').css({'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img2 span.big').css({'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img3 span.big').css({'left': pwidth*3+'px', 'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size7 li.img4 span.big').css({'top': pheight+'px', 'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size7 li.img5 span.big').css({'left': pwidth*2+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img6 span.big').css({'left': pwidth*2+'px', 'top': pheight*2+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img7 span.big').css({'left': pwidth*4+'px', 'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img1 span.small').css({'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img2 span.small').css({'left': pwidth+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img3 span.small').css({'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img4 span.small').css({'left': pheight+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img5 span.small').css({'left': pwidth*2+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img6 span.small').css({'top': pheight*2+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img7 span.small').css({'left': pwidth*2+'px', 'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	
	// 9 previews
	
	$('.slides ul.pagination.size9 li.img1 span.big').css({'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img2 span.big').css({'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img3 span.big').css({'left': pwidth*3+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img4 span.big').css({'top': pheight+'px', 'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size9 li.img5 span.big').css({'left': pwidth*2+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img6 span.big').css({'left': pwidth*3+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img7 span.big').css({'left': pwidth*4+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img8 span.big').css({'left': pwidth*2+'px', 'top': pheight*2+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img9 span.big').css({'left': pwidth*4+'px', 'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img1 span.small').css({'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img2 span.small').css({'left': pwidth+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img3 span.small').css({'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img4 span.small').css({'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img5 span.small').css({'top': pheight+'px', 'left': pwidth+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img6 span.small').css({'top': pheight+'px', 'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img7 span.small').css({'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img8 span.small').css({'top': pheight*2+'px', 'left': pwidth+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img9 span.small').css({'top': pheight*2+'px', 'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	
	$('.object .slides .show').click(
		function() {
			$(this).parents('.object').find('.info').animate({left:'0'}, 500, 'easeOutQuint');
			$(this).parents('.object').find('.slides').animate({'left': 2*pwidth+'px'}, 500, 'easeOutQuint');
			$(this).parents('.object').find('.slides .show').fadeOut(250);
			$(this).parents('.object').find('.pagination').delay(300).queue(function(){ $(this).toggleClass('active'); $(this).dequeue(); });
		}
	);
	
	$('.object .info .slidehide').click(
		function() {
			$(this).parents('.object').find('.info').animate({'left': -2*pwidth+'px'}, 500, 'easeInQuint');
			$(this).parents('.object').find('.slides').animate({'left': '0'}, 500, 'easeInQuint');
			$(this).parents('.object').find('.slides .show').fadeIn(250);
			$(this).parents('.object').find('.pagination').removeClass('active');
		}
	);
	var scrolldrag = $('.jspVerticalBar').height() - 12;
	$('.jspVerticalBar').css({'height': 'scrolldrag'});
	
	var navigationleft = $('.b-history .column1').width();
	$('.navigation').css({'left': '20%'});
	
	
    // count a size of all elements
    var documentWidth = Math.floor($(document).width());
    //var documentHeight = Math.floor(documentWidth/3.2);
    var documentHeight = $('.b-content').height()-10;

    $('.b-history').css({width : documentWidth, height: + documentHeight});

    var column1Width;
    var column2Width;
    var column3Width;

    column1Width = Math.floor( documentWidth / 10 * 2) - splitter;
    column3Width = Math.floor( documentWidth / 10 * 3) - splitter;
    column2Width = Math.floor( documentWidth / 10 * 5) - splitter;

    $('.column1').css({width:column1Width, height: documentHeight});
    $('.column2').css({width:column2Width, height: documentHeight});
    $('.column3').css({width:column3Width, height: documentHeight});


    $('.sliderwrap').css({width:column3Width});


    $('.column1').children('img').css({width:column1Width, height: documentHeight});
	
	
	var swidth = Math.floor( documentWidth / 10);
	var sheight = Math.floor (documentHeight / 3) + 2;
	$('.column1 .stage1').css({'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage2').css({'left': swidth+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage3').css({'top': sheight+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage4').css({'left': swidth+'px', 'top': sheight+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage5').css({'top': sheight*2+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage6').css({'left': swidth+'px', 'top': sheight*2+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	
	$('.history-stages, vacancy-gallery').css({'width': swidth*2-splitter+'px'});
	$('.column1 .single').css({'width': swidth*2-splitter+'px', 'height': sheight*3-splitter+'px'});

	// load mCustomScrollBar if it must be here

	var target = 1;
	var slidespeed = 300;
	
	$('.b-history').each(function() {
	
		var activescroll = $(this).find('.column2');
		var clickscroll = 0;
		
		if($(this).find('.column2').length>0){
			$(this).find('.column2').mCustomScrollbar({
				theme:"dark",
				scrollButtons:{
					enable:true
				},
				callbacks:{
					whileScrolling:function(){
						
						$(this).find('span.anchor.special').each(function() {
						
						
							if ( clickscroll == 0 ) {
							
								if ( $(this).offset().top < 225 && $(this).offset().top > 215 ) {
									target = $(this).attr('data-number');
									$(this).parents('.b-history').find('.column3 #b-slider-history').animate({'margin-top': -(target-1) * documentHeight+ 'px' }, slidespeed);
									console.log(target);
								}
								
								
			console.log('0');
							
							}
						});
					},
				    onScroll:function(){
						clickscroll = 0;
					}


				}
			});
		}
		
		$(this).find('.slider').each(function() {
			$(this).flexslider();
		});

		$(this).find('span.anchor em').bind('click', function() {
			target = $(this).parent().attr('data-number');
			$(this).parents('.b-history').find('.column3 #b-slider-history').animate({'margin-top': -(target-1) * documentHeight+ 'px' }, slidespeed);
		});

		$(this).find('.history-stages img').click(function() {
			clickscroll = 1;
			target = $(this).attr('data-stage');
			if ( ( $(this).parents('.b-history').find('.column2 .textwraper').height() - $(this).parents('.b-history').find('span.anchor.special[data-number^="'+target+'"]').position().top ) < documentHeight ) {
				$(this).parents('.b-history').find('.column2').mCustomScrollbar('scrollTo', 'bottom');
				$(this).parents('.b-history').find('.column3 #b-slider-history').animate({'margin-top': -(target-1) * documentHeight+ 'px' }, slidespeed);
			}
			else {
				$(this).parents('.b-history').find('.column2').mCustomScrollbar('scrollTo', 'span.anchor.special[data-number^="'+target+'"]');
				$(this).parents('.b-history').find('.column3 #b-slider-history').animate({'margin-top': -(target-1) * documentHeight+ 'px' }, slidespeed);
			}
		});

		$(this).find('.vacancy-gallery img').click(function() {
			target = $(this).attr('data-vacancy');
			$(this).parents('.b-history').find('.column3 #b-slider-history').animate({'margin-top': -(target-1) * documentHeight+ 'px' }, slidespeed);
			return false;
		});
		
	});

});