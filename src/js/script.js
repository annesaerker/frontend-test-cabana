console.log("Owl caro");

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    singleItem: true,
    itemsScaleUp : true,
    slideSpeed: 500,
    autoPlay: 5000,
    stopOnHover: true
  });

  $('.dropdown').on('click', function(){
    $(this).addClass('line');
  });

  $('.collapse').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');
  
    $('.collapse').toggleClass('show').find('.search-input').focus();
    $(this).toggleClass('active');
  
    e.preventDefault();
  });
});


(function($) {
    
  $.fn.bmdIframe = function( options ) {
      var self = this;
      var settings = $.extend({
          classBtn: '.bmd-modalButton',
          defaultW: 640,
          defaultH: 360
      }, options );
    
      $(settings.classBtn).on('click', function(e) {
        var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || false;
        
        var dataVideo = {
          'src': $(this).attr('data-bmdSrc'),
          'height': $(this).attr('data-bmdHeight') || settings.defaultH,
          'width': $(this).attr('data-bmdWidth') || settings.defaultW
        };
        
        if ( allowFullscreen ) dataVideo.allowfullscreen = "";
        
        $(self).find("iframe").attr(dataVideo);
      });
    
      this.on('hidden.bs.modal', function(){
        $(this).find('iframe').html("").attr("src", "");
      });
    
      return this;
  };

})(jQuery);


jQuery(document).ready(function(){
  jQuery("#myModal").bmdIframe();
});
