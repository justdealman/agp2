$(window).load(function () {
	$('.slides').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideEasing: 'easeInOutQuint',
		slidespeed: 250,
		play: 10000,
		pause: 0
	});
});
$(document).ready(function () {

	$('.scrollable').jScrollPane({
		mouseWheelSpeed: 100,
		showArrows: true,
		autoReinitialise: true,
		autoReinitialiseDelay: 100
	});

	$('nav ul li').hover(
		function() {
			$(this).children('ul').fadeIn(150);
			$(this).addClass('active');
		},
		function() {
			$(this).children('ul').fadeOut(0);
			$(this).removeClass('active');
		}
	);
	$('nav ul li').has('ul').addClass('sub');

    function bindHoverFlux(){
        $('.slidecontainer .images div').hover(
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

    bindHoverFlux();
    $('footer').hide();

	var sliderheight = $('.b-slider').height();

	$('nav li.show > a.object1, #slider1 .image1').bind('click', 
		function() {
			//$('.object-fade').fadeIn(250);
            //$('.b-slider').fadeOut(1000);
			$('.object.object1').css({'display' : 'none'}).css({left : 0}).fadeIn(1000);      //слайдер появляется
			$('nav, header h1').fadeOut(0);
			var text = "";
			var text = $(this).attr('data-inform');
			$('.slide-insert').append(text);
			$('.tip-nav li.home > a, .b-logo a').bind('click', 
				function() {
                    $('.b-slider').delay(1000).fadeIn(1000);
					//$('.object-fade').delay(0).queue(function(){ $(this).fadeOut(1000); $(this).dequeue(); });
					$('.object.object1').fadeOut(1000).delay(10000); //задержать css
					$('.object.object1 .info').fadeOut(1000).css({'left': -infowidth + 'px'}).fadeIn(1000);
					$('.object.object1 .slides').fadeOut(1000).css({'left': '0'}).fadeIn(1000);
					$('.object.object1 .slides .show').fadeIn(1000);
					$('.slides .pagination').removeClass('active');	
					$('.object.object1 .slides .show').fadeIn(1000);

					//$('.slide-insert').empty();
					$('nav, header h1').fadeIn(0);
					return false;
				}
			);
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
	
	var logoposition = $('.slidewrap:first-child').width() - 68;
	$('.b-logo').css({'padding-left': logoposition + 'px'});
	var topmargin = logoposition + 250;
	$('nav, header h1').css({'margin-left': topmargin + 'px'});
	$('.slide-insert').css({'left': topmargin + 'px'});
	
	var objectwidth = $('.object').width();
	var infowidth = logoposition + 248;
	var slideswidth = objectwidth * 0.5;
	$('.object .info').css({'left': -infowidth + 'px', 'width': infowidth + 'px'});
	
	$('.object .info .opacity').css({'width': infowidth - 34 + 'px'});
	
	$('.slides .container > div img.horizontal').css({'width': slideswidth + 'px'});
	$('.slides .container > div img.vertical').css({'left': slideswidth * 0.2 + 'px', 'width': slideswidth * 0.6 + 'px'});

	var objectheight = $('.b-content').height() - 10;
	$('.object, .object-fade, .object .info, .object .info .scrollable, .mCSB_container, .object .slides, .object .slides .container, .object .slides .container div,  .object .slides .pagination, .slides .container > div img').css({'height': objectheight + 'px'})

	var pwidth = objectwidth - $('.slides .container').width();
	var pwidth1 = pwidth * 0.6;
	var pwidth2 = pwidth * 0.4 - 4;
	var pheight2 = objectheight * 0.66;
	var pheight3 = objectheight - pheight2;

	$('.slides ul.pagination li.img1 img.big').css({'width': pwidth1 - 3 + 'px', 'height': objectheight + 'px'});
	$('.slides ul.pagination li.img2 img.big').css({'left': pwidth1 + 'px', 'width': pwidth2 + 'px', 'height': pheight2 - 3 + 'px'});
	$('.slides ul.pagination li.img3 img.big').css({'left': pwidth1 + 'px', 'top': pheight2 + 'px', 'width': pwidth2 + 'px', 'height': pheight3 + 'px'});
	
	var pwidthactive = pwidth - infowidth;
	var pwidth4 = pwidthactive - 5;
	var pwidth5 = pwidthactive * 0.4;
	var pwidth6 = pwidthactive * 0.6 - 4;
	var pheight4 = objectheight * 0.66;
	var pheight5 = objectheight - pheight4;
	
	$('.slides ul.pagination li.img1 img.small').css({'width': pwidth4 + 'px', 'height': pheight4 - 3 + 'px'});
	$('.slides ul.pagination li.img2 img.small').css({'top': pheight4 + 'px', 'width': pwidth5 - 3 + 'px', 'height': pheight5 + 'px'});
	$('.slides ul.pagination li.img3 img.small').css({'top': pheight4 + 'px', 'left': pwidth5 + 'px', 'width': pwidth6 + 'px', 'height': pheight5 + 'px'});

	$('.object .slides .show').click(
		function() {
			$(this).parents('.object').find('.info').animate({left:'0'}, 500, 'easeInQuart');
			$(this).parents('.object').find('.slides').animate({'left': infowidth + 'px'}, 500, 'easeInQuart');
			$(this).parents('.object').find('.slides .show').fadeOut(250);
			$(this).parents('.object').find('.pagination').delay(300).queue(function(){ $(this).toggleClass('active'); $(this).dequeue(); });
		}
	);
	
	$('.object .info .slidehide').click(
		function() {
			$(this).parents('.object').find('.info').animate({'left': -infowidth + 'px'}, 750, 'easeOutQuart');
			$(this).parents('.object').find('.slides').animate({'left': '0'}, 750, 'easeOutQuart');
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
    var documentHeight = Math.floor(documentWidth/3.2);

    $('.b-history').css({width : documentWidth, height: + documentHeight});

    var column1Width;
    var column2Width;
    var column3Width;

    column1Width = Math.floor((documentWidth - 6) / 5);
    column3Width = Math.floor((documentWidth - 6) / 2) - Math.floor((documentWidth - 6) / 8);
    column2Width = Math.floor((documentWidth - 6) - (column1Width+column3Width+6));

    $('.column1').css({width:column1Width, height: documentHeight});
    $('.column2').css({width:column2Width, height: documentHeight});
    $('.column3').css({width:column3Width, height: documentHeight});


    $('.sliderwrap').css({width:column3Width});


    $('.column1').children('img').css({width:column1Width, height: documentHeight});


    // load mCustomScrollBar if it must be here
    if($('.column2').length>0){
        $('.column2').mCustomScrollbar({
            theme:"dark",
            scrollButtons:{
                enable:true
            },
            callbacks:{
                whileScrolling:function(){
                    scrolling();
                }
            }

        });
    }

    // load flexslider if it must be here
    if($('#b-slider-history').length>0){
        $('#b-slider-history').flexslider();
    }
    if($('#b-slider-history2').length>0){
        $('#b-slider-history2').flexslider();
    }
    if($('#b-slider-history3').length>0){
        $('#b-slider-history3').flexslider();
    }
    if($('#b-slider-history4').length>0){
        $('#b-slider-history4').flexslider();
    }
    // функции перемотки слайдеров
    var myoffset = 1;
    var countofsliders; //сколько всего слайдеров
    var downoffset; // счетчик для прокрутки вниз
    countofsliders = $('div[data-isslider="1"]').length;

    $('.up').bind("click", function(){
        if(myoffset<countofsliders){
            $('#b-slider-history').animate({"margin-top" : "-" + documentHeight * myoffset + "px"}, 300);
            myoffset = myoffset + 1;
        }
        console.log('после сдвига вверх офсет стал ' + myoffset);
    });
    $('.down').bind("click", function(){
        downoffset=countofsliders-myoffset;
        console.log(documentHeight * myoffset-documentHeight);
        if(myoffset===1){

        }else{
            $('#b-slider-history').animate({"margin-top" : "-"+ (documentHeight * myoffset-(documentHeight*2)) + "px"}, 300);
            myoffset = myoffset-1;
            console.log('после сдвига вниз офсет стал ' + myoffset);
        }


    });

    //ищем позицию span-a
    $('.there').bind('click', function(){
        console.log('Положение спанчика ' + $('.a').offset().top);
        console.log('Положение родителя ' + $('.column2').offset().top);

    });

    //перелистываем слайдеры

    function scrolling(){
	
		if ($('.column2').hasClass('active1')) {
			if($('.a').offset().top>302 && $('.a').offset().top>=301){
				$('#b-slider-history').animate({"margin-top" : "0"}, 300);
				$('.column2').removeClass('active1');
			}
		}
		else {
			if($('.a').offset().top<300 && $('.a').offset().top<=301){
				$('#b-slider-history').animate({"margin-top" : "-" + documentHeight + "px"}, 300);
				$('.column2').addClass('active1');
			}

		}
		if ($('.column2').hasClass('active2')) {
			if($('.b').offset().top>302 && $('.b').offset().top>=301){
				$('#b-slider-history2').animate({"margin-top" : "0"}, 300);
				$('.column2').removeClass('active2');
			}
		}
		else {
			if($('.b').offset().top<300 && $('.b').offset().top<=301){
				$('#b-slider-history2').animate({"margin-top" : "-" + documentHeight + "px"}, 300);
				$('.column2').addClass('active2');
			}

		}
		/*
		if ($('.column2').hasClass('active3')) {
			if($('.c').offset().top>302 && $('.c').offset().top>=301){
				$('#b-slider-history3').animate({"margin-top" : "0"}, 300);
				$('.column2').removeClass('active3');
			}
		}
		else {
			if($('.c').offset().top<300 && $('.c').offset().top<=301){
				$('#b-slider-history3').animate({"margin-top" : "-" + documentHeight + "px"}, 300);
				$('.column2').addClass('active3');
			}

		}
		*/

    }

});