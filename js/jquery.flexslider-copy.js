(function($) {
    var methods = {
        init : function (options){
            var bigimages,
                miniatures;

            bigimages = this.children('.big').find('img');
            miniatures = this.children('.small').find('img');

            this.empty();

            this.width(this.parent().width());
            this.height(this.parent().height());

            // вставляем элементы слайдера

            var marginOffset,
                big,
                small,
                bigSizeWidth,
                bigSizeHeight,
                smallSizeWidth,
                smallSizeHeight,
                countOfSlides;

            marginOffset = 5;

            bigSizeWidth = this.width();
            bigSizeHeight = Math.floor(this.height()/1.5) - (marginOffset);
            smallSizeWidth = Math.floor((this.width()-marginOffset*3)/4);
            smallSizeHeight = Math.floor(this.height() - (this.height()/1.5));
            countOfSlides = miniatures.length;

            big = '<div class="big" style= "width:' + bigSizeWidth + 'px; height:' + bigSizeHeight +
                'px; background-image: url(\''+ bigimages[0].src +'\'); background-size: cover;"></div>';
            small = '<div class="small" style= "width:' + smallSizeWidth + 'px; height:' + smallSizeHeight + 'px"></div>';
            console.log(bigimages[0]);
            this.append(big);

            this.append('<div class="miniaWrapper" style="width:' + bigSizeWidth + 'px; margin-top:' + marginOffset + 'px;"></div>');

            this.find('.miniaWrapper').append('<div class="miniatures" style="width:' + (smallSizeWidth*countOfSlides + (marginOffset*countOfSlides)) +
                'px; height:' + (smallSizeHeight-(marginOffset*2)) + 'px"></div>');

            for (var i=0; i<miniatures.length; i++){
                this.find('.miniatures').append('<div class="small" style= "width:' + smallSizeWidth + 'px; height:' + smallSizeHeight +
                    'px; background-image: url(' + miniatures[i].src +
                    ');  background-size: cover; margin-right:' + marginOffset + 'px; cursor: pointer;"></div>');
            }

            $(this.find('.small')).css({opacity:0.5});
            $(this.find('.small')[0]).addClass('active').css({opacity:1});
            // биндим функцию отображения нужной картинки и анимации наведения
            var smallImages;
            smallImages = $(this.find('.small'));
            for (i=0; i<$('.small').length; i++){
                $($('.small')[i]).bind('mouseover', function(){
                    if ($(this).hasClass('active')){

                    }else{
                        $(this).css({opacity:1});
                    }
                });
                $($('.small')[i]).bind('mouseleave', function(){
                    if ($(this).hasClass('active')){

                    }else{
                        $(this).css({opacity:0.5});
                    }
                });
                $($('.small')[i]).bind('click', function(N){
                    return function(){
                        $('.big').hide().css({'background-image' : 'url(' + $(bigimages[N])[0].src + ')'}).fadeIn(200);
                        $('.small').each(function(){
                            $(this).removeClass('active').css({opacity:0.5});
                        });
                        $(this).addClass('active').css({opacity:1});

                    }}(i));
            }

            return this;
        }
    }

    $.fn.flexslider = function(method){

        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.flexslider' );
        }

    };
})(jQuery);