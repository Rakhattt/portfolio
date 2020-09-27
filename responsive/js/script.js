(function($) {
    $(function() {
      
      $('ul.discover__blogs').on('click', 'li:not(.discover__undertitle_active)', function() {
        $(this)
          .addClass('discover__undertitle_active').siblings().removeClass('discover__undertitle_active')
          .closest('div.discover__wrapper').find('div.discover__blog').removeClass('discover__blog_active').eq($(this).index()).addClass('discover__blog_active');
      });
      var tabIndex = window.location.hash.replace('#discover','8')-1;
      if (tabIndex != -1) $('ul.discover__blogs li').eq(tabIndex).click();
    });
    })(jQuery);