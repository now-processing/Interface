$(function() {
    $('.links > a').mouseenter(function() {
        var link = $(this);
        $('.paw').fadeIn(function() {
            var left = link.position().left;
            var width = link.width();
            var iconWidth = $('.paw').width();
            var middle = left + width / 2 - iconWidth/2;
            $('.paw').css('left', middle + "px");
        });
    });
    $('.links').mouseleave(function(){
      $('.paw').fadeOut();
    });
});
