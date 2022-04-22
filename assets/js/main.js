$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    $(window).on('load', function(event) {
      var scroll = $(window).scrollTop();
      if (scroll < 10) {
          $(".nav-item").addClass("color-nav");
      }
  });
  
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navbar-area").removeClass("sticky");
            $(".nav-item").addClass("color-nav");
        } else{
            $(".navbar-area").addClass("sticky");
            $(".nav-item").removeClass("color-nav");
        }
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
  

    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Countdown
    
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="header-countdown pt-70 d-flex justify-content-center"><div class="single-count-content count-color-1"><span class="count">%D</span><p class="text">Days</p></div><div class="single-count-content count-color-2"><span class="count">%H</span><p class="text">Hours</p></div><div class="single-count-content count-color-3"><span class="count">%M</span><p class="text">Minutes</p></div><div class="single-count-content count-color-4"><span class="count">%S</span><p class="text">Seconds</p></div></div>'));
        });
    });
    
    
    //===== WOW
    
    new WOW().init();
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    $('.client-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
        });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
     /* Video Lightbox - Magnific Popup */
    $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      iframe: {
          patterns: {
              youtube: {
                  index: 'youtube.com/', 
                  id: function(url) {        
                      var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                      if ( !m || !m[1] ) return null;
                      return m[1];
                  },
                  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              },
              vimeo: {
                  index: 'vimeo.com/', 
                  id: function(url) {        
                      var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                      if ( !m || !m[5] ) return null;
                      return m[5];
                  },
                  src: 'https://player.vimeo.com/video/%id%?autoplay=1'
              }
          }
      }
    });
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});