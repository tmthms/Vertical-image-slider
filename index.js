var interval = 7000;
setInterval(function () {
    var first_height = $('#list').find('div:first').height();

    var paddings = parseInt($('#list').find('div:first').css('padding-top')) + parseInt($('#list').find('div:first').css('padding-bottom'));

    var margins = parseInt($('#list').find('div:first').css('margin-top')) + parseInt($('#list').find('div:first').css('margin-bottom'));

    var animation = interval - paddings - margins;

    $('#list').stop().animate({
        scrollTop: first_height + paddings + margins
    }, animation, 'linear', function () {
        $(this).scrollTop(0).find('div:last').after($('div:first', this));
    });
}, interval);

setInterval(function () {
    var first_height = $('#list1').find('div:first').height();

    var paddings = parseInt($('#list1').find('div:first').css('padding-top')) + parseInt($('#list1').find('div:first').css('padding-bottom'));

    var margins = parseInt($('#list1').find('div:first').css('margin-top')) + parseInt($('#list1').find('div:first').css('margin-bottom'));

    var animation = interval - paddings - margins;

    $('#list1').stop().animate({
        scrollTop: first_height + paddings + margins
    }, animation, 'linear', function () {
        $(this).scrollTop(0).find('div:last').after($('div:first', this));
    });
}, interval);