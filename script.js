(function() {

    var nav = $('nav'),
      menu = $('nav h1'),
      main = $('main'),
      open = false,
      hover = false;

    menu.on('click', function() {
      open = !open;
      nav.toggleClass('menu-active', open);
      main.toggleClass('menu-active', open);
      nav.removeClass('menu-hover');
      main.removeClass('menu-hover');
      console.log(open);
    });
    menu.hover( 
      function() {
        if (!open) {
          nav.addClass('menu-hover');
          main.addClass('menu-hover');
        }
      }, function() {
        nav.removeClass('menu-hover');
        main.removeClass('menu-hover');
      }
    );

  })();