(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.fixed-action-btn').floatingActionButton({
      direction: 'top', // Direction menu comes out
      hoverEnabled: true, // Hover enabled
      toolbarEnabled: false // Toolbar transition enabled
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space