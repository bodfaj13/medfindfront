(function($){
  $(function(){


    $('.parallax').parallax();
    $('.fixed-action-btn').floatingActionButton({
      direction: 'top', // Direction menu comes out
      hoverEnabled: false, // Hover enabled
      toolbarEnabled: false // Toolbar transition enabled
    });
    $('select').select();


  }); // end of document ready
})(jQuery); // end of jQuery name space

