/*  IMAGES PRELOADER  */
jQuery.preloadImages = function () {
    var images = (typeof arguments[0] == 'object') ? arguments[0] : arguments;
    for (var i = 0; i < images.length; i++) {
        jQuery("<img>").attr("src", images[i]);
    }
}
/* /IMAGES PRELOADER */

function sliderLoader(){
    var maxValue = 0;
    var slidesContainer = [];
    var dataAcc;
    window.ELEM_WIDTH = 0;
    window.IS_ANIMATE = false;

    dataAcc =  $('a[data-accessory]');

    for (var p=0; p<dataAcc.length; p++){
        if(parseInt(dataAcc[p].attributes[1].value)>maxValue){
            maxValue = parseInt(dataAcc[p].attributes[1].value);
        }
    }


    for (var i=0; i<maxValue; i++){
        var n = i+1;
        slidesContainer[i] = $('a[data-accessory=' + n + ']');
        slidesContainer[i].dataaccessory = $('a[data-accessory=' + n + ']').attr('data-accessory');
    }


    $.preloadImages("pic/mainslider/1/1.png",
        "pic/mainslider/1/2.png","pic/mainslider/1/3.png","pic/mainslider/1/4.png",
        "pic/mainslider/1/5.png","pic/mainslider/1/6.png","pic/mainslider/1/7.png",
        "pic/mainslider/1/8.png","pic/mainslider/1/9.png","pic/mainslider/1/10.png",
        "pic/mainslider/1/11.png","pic/mainslider/1/12.png","pic/mainslider/1/13.png",
        "pic/mainslider/1/14.png","pic/mainslider/1/15.png","pic/mainslider/1/16.png",
        "pic/mainslider/1/17.png","pic/mainslider/1/18.png","pic/mainslider/1/19.png",
        "pic/mainslider/1/20.png","pic/mainslider/1/21.png","pic/mainslider/1/22.png",
        "pic/mainslider/1/23.png","pic/mainslider/1/24.png","pic/mainslider/1/25.png",
        "pic/mainslider/1/26.png","pic/mainslider/1/27.png","pic/mainslider/1/28.png",
        "pic/mainslider/1/29.png","pic/mainslider/1/30.png","pic/mainslider/2/1.png",
        "pic/mainslider/2/2.png","pic/mainslider/2/3.png","pic/mainslider/2/4.png",
        "pic/mainslider/2/5.png","pic/mainslider/2/6.png","pic/mainslider/2/7.png",
        "pic/mainslider/2/8.png","pic/mainslider/2/9.png","pic/mainslider/2/10.png",
        "pic/mainslider/2/11.png","pic/mainslider/2/12.png","pic/mainslider/2/13.png",
        "pic/mainslider/2/14.png","pic/mainslider/2/15.png","pic/mainslider/2/16.png",
        "pic/mainslider/2/17.png","pic/mainslider/2/18.png","pic/mainslider/2/19.png",
        "pic/mainslider/2/20.png","pic/mainslider/2/21.png","pic/mainslider/2/22.png",
        "pic/mainslider/2/23.png","pic/mainslider/2/24.png","pic/mainslider/2/25.png",
        "pic/mainslider/2/26.png","pic/mainslider/2/27.png","pic/mainslider/2/28.png",
        "pic/mainslider/2/29.png","pic/mainslider/2/30.png",


        function(){


            /*resize it*/

            var slideWraps,
                doc_w,
                elem_w,
                slideImages;
            doc_w = $(document).width();
            elem_w = doc_w/10;
            elem_w = Math.floor((elem_w/10)*10);
            slideWraps = $('.slidewrap');
            slideImages = $('.slidecontainer > img');
            slideWraps.css({width: elem_w, height: elem_w});
            slideImages.css({width: elem_w, height: elem_w});

            var v_pos;
            var g_pos;
            var v_offset;
            v_pos = 0;
            g_pos = 0;
            v_offset = Math.floor((elem_w/17)/3)*3;
            $('.b-slider').height(elem_w*3+v_offset).width(elem_w * 10);

            v_pos = v_offset;

            for(var u=0; u<3; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }

            v_pos = v_offset;
            g_pos = elem_w;

            for(var u=3; u<6; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }

            v_pos = v_offset;
            g_pos = elem_w + elem_w;

            for(var u=6; u<9; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }

            v_pos = v_offset;
            g_pos = elem_w + elem_w + elem_w;

            for(var u=9; u<12; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }

            v_pos = v_offset;
            g_pos = elem_w + elem_w + elem_w + elem_w;

            for(var u=12; u<15; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }


            v_pos = v_offset;
            g_pos = elem_w + elem_w + elem_w + elem_w + elem_w;

            for(var u=15; u<18; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }

            v_pos = v_offset;
            g_pos = elem_w + elem_w + elem_w + elem_w + elem_w + elem_w;

            for(var u=18; u<21; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }

            v_pos = v_offset;
            g_pos = elem_w + elem_w + elem_w + elem_w + elem_w + elem_w + elem_w;

            for(var u=21; u<24; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }

            v_pos = v_offset;
            g_pos = elem_w + elem_w + elem_w + elem_w + elem_w + elem_w + elem_w + elem_w;

            for(var u=24; u<27; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }

            v_pos = v_offset;
            g_pos = elem_w + elem_w + elem_w + elem_w + elem_w + elem_w + elem_w + elem_w + elem_w;

            for(var u=27; u<30; u++){
                $(slideWraps[u]).css({top: v_pos, left: g_pos});
                v_pos = v_pos + elem_w;
            }


            window.ELEM_WIDTH = elem_w;



            for (i=0; i < $('div[id^="slider"]').length; i++){
                window['myFlux' + i] = new flux.slider('#slider' + (i+1), {
                    transitions: ['cube'],
                    autoplay: false,
                    delay: 0,
                    width: elem_w,
                    height: elem_w
                    //onTransitionEnd: (function(N) {
                    //    return function(){fluxDeanimate('#slider'+(N+1))}
                    //})(i)
                });
            }


             function letsCheck(flux){

                var counter; //номер принадлежности перелистнувшегося к композиционной единице
                var total; //количество элементов в данной композиции

                counter = $(flux).find('.image1').attr('data-accessory');


                for (i=0; i<slidesContainer.length; i++){
                    var ready;
                    var elem = parseInt(slidesContainer[i].dataaccessory);
                    if(elem == counter){
                        var totalElemInComposing = slidesContainer[i].length;
                        for(i=0; i<totalElemInComposing; i++){
                            if ($('div[data-accessory="' + elem + '"]').length == totalElemInComposing){
                                ready = true;
                                break;
                            }
                            else{
                                ready = false;
                                break;
                            }
                        }

                        if(ready){
                            var slider;
                            var othersliders;
                            slider = $('div.image1[data-accessory="' + elem + '"]').closest('.slidecontainer');
                            fluxAnimate(slider);
                        }
                        else{

                        }

                        break;
                   }
                }


            }

            function fluxAnimate(slider){
                var inform = $(slider).find('.image1').attr('data-inform');  //нашли описание объекта
                if(window.IS_ANIMATE){
//				                    $(getOther(slider)).css({'opacity' : '0.5'});
//                    $(slider).css({'border' : '0px solid red', 'opacity' : '1'});
				}else{
                    $(getOther(slider)).css({'opacity' : '0.5'});
                    $(slider).css({'border' : '0px solid red', 'opacity' : '1'});
                }
                var widthOfTooltip = 0;
            }

            function fluxDeanimate(slider){
                if(window.IS_ANIMATE){
//				                    var elements;
//                    counter = $(slider).find('.image1').attr('data-accessory');
//                    elements = $('.image1[data-accessory="' + counter + '"]').closest('.slidecontainer');
//                    elements.css({'border' : '0', 'opacity' : 1});
//                    $(slider).find('.objectinform').remove();
//                    $(getOther(slider)).css({'opacity' : '1'});
				}else{
                    var elements;
                    counter = $(slider).find('.image1').attr('data-accessory');
                    elements = $('.image1[data-accessory="' + counter + '"]').closest('.slidecontainer');
                    elements.css({'border' : '0', 'opacity' : 1});
                    $(slider).find('.objectinform').remove();
                    $(getOther(slider)).css({'opacity' : '1'});

                }
            }

            function getOther(slider){
                allSlides = $('div.image1[data-accessory]').closest('.slidecontainer');
                return allSlides;
            }

            for (var j=1; j<31; j++){
                $('#slider'+j).bind('mouseover', (function(N) {
                    return function(){letsCheck('#slider'+(N))}
                })(j));
            }

            for (var j=1; j<31; j++){
                $('#slider'+j).bind('mouseout', (function(N) {
                    return function(){fluxDeanimate('#slider'+(N))}
                })(j));
            }

        });

    var offsets = new Array();

    offsets[0]=10;
    offsets[1]=150;
    offsets[26]=290;
    offsets[3]=430;
    offsets[19]=570;
    offsets[20]=710;
    offsets[6]=850;
    offsets[7]=990;
    offsets[8]=1130;
    offsets[29]=1270;
    offsets[10]=1410;
    offsets[11]=1550;
    offsets[25]=1690;
    offsets[22]=1830;
    offsets[17]=1970;
    offsets[15]=2110;
    offsets[28]=2250;
    offsets[14]=2390;
    offsets[18]=2530;
    offsets[4]=2670;
    offsets[5]=2810;
    offsets[21]=2950;
    offsets[13]=3090;
    offsets[23]=3230;
    offsets[24]=3370;
    offsets[12]=3510;
    offsets[2]=3650;
    offsets[27]=3790;
    offsets[16]=3930;
    offsets[9]=4070;

    var maxOfOffsets;
    maxOfOffsets = Math.max.apply(0, offsets); // самая большая задержка слайда
    var maxId;   // id слайдера с максимальной задержкой - то есть он выполнится последним

    for(i=0; i<=offsets.length; i++){
        if (offsets[i]==maxOfOffsets){
            maxId = i;
            break;
        }else{
            continue;
        }
    }

    function slide(j){
        eval("myFlux" + j + ".next()");
        window.IS_ANIMATE = true;
    }

    function slideStop(j){
        eval("myFlux" + j + ".stop()");
    }

    function letsSlide(interval){
       $('.slidecontainer').css({'opacity' : 1});
            for (var j=0; j<30; j++){
                (function(j){
                    setTimeout(function() {
                        slide(j);
                    }, offsets[j]);
                })(j);
            }
        setTimeout(function(){
            window.IS_ANIMATE = false;
        }, maxOfOffsets+1000);   // 1000 на глаз, само время переворачивания
    }

    //$('#b-slider').bind('mouseleave', function(){
    //    if(window.IS_ANIMATE){}  // не дает добавлять дополнительные циклы анимации пока один цикл не сработает до конца
//        else{
//            letsSlide(100);
//        }
//    });
	setInterval(function(){letsSlide(100)}, 10000);
	
}
sliderLoader();