


$(document).ready(function(){
    $('.list__item').click(function () {

            if (!$(this).find('.inside-list').is(':empty')) {
                $(this).toggleClass('list__item_active');
                $(this).find('.inside-list').slideToggle('slow');
            }

        }
    );

    $('.my-slide').slick({
        dots: true,
        infinite: true
    });
});
