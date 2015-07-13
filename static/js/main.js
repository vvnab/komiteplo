$(function(){
    $('.menuitem').hover(function(){
        var parent = $(this).parent();
        $(this).addClass('active');
        parent.find('.menuitem').stop();
        $(this).animate({opacity: 1}, 300);
        parent.find('.menuitem').not('.active').animate({opacity: 0.3}, 500);
    }, function(){
        var parent = $(this).parent();
        $(this).removeClass('active');
        parent.find('.menuitem').stop();
        parent.find('.menuitem').animate({opacity: 1}, 300);
    });
    $('.menuitem a, a.logo').click(function(){
        $('a#vk').addClass('hidden');
        var hash = $(this).attr('href').replace('#', '');
        $.scrollTo('a[name="{0}"]'.format(hash), 1000, function(){
        location.hash = hash;
        var top = $(document).scrollTop();
        $('a#vk').removeClass('hidden');
        $('a#vk').css({top: top + 1000});
        $('a#vk').animate({top: top + 590}, 1000);
        });
        return false;
    });
    $('a.gallery').fancybox({
        openEffect: 'elastic', 
        closeEffect: 'elactic', 
        nextEffect: 'elastic', 
        prevEffect: 'fade' 
        });
    if ($.browser.msie) {
      $('div.header').css('backgroundColor', 'black');
      $('div.content').css('backgroundColor', 'black');
      $('div.menuitem').css('backgroundColor', 'rgb(255, 130, 0)');
    }
});
