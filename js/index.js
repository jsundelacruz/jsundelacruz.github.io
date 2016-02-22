$(document).ready(function(){



    //fixed project wayfinding markers
    var Justine = {}

    $(function(){
      Justine.modal.fixBackArrow('.modal', '.close')
      Justine.modal.fixBackArrow('.modal', '.project-title')
      Justine.modal.fixBackArrow('.modal', '.project-context')
      Justine.modal.fixBackArrow('.modal', '.project-category')
    });

    Justine.modal = {}

    Justine.modal.fixBackArrow = function(container, back) {
      $(container).on('scroll', function() {
        $(back).css('top', $(this).scrollTop())
      });
    };

   

    //open translingua page
    $("#translingua").animatedModal();

    //open vers page
    $("#vers").animatedModal({
        modalTarget:'vers-page',
        animatedIn:'slideInUp',
        animatedOut:'slideOutDown',
        color:'#3498db',
        // Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },           
        afterOpen: function() {
            console.log("The animation is completed");
        }, 
        beforeClose: function() {
            console.log("The animation was called");
        }, 
        afterClose: function() {
            console.log("The animation is completed");
        }
    });

    //open ltracker page
    $("#ltracker").animatedModal({
        modalTarget:'ltracker-page',
        animatedIn:'slideInUp',
        animatedOut:'slideOutDown',
        color:'#ddd',
        // Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },           
        afterOpen: function() {
            console.log("The animation is completed");
        }, 
        beforeClose: function() {
            console.log("The animation was called");
        }, 
        afterClose: function() {
            console.log("The animation is completed");
        }
    });

    //open resume page
    $("#resume").animatedModal({
        modalTarget:'resume-page',
        animatedIn:'slideInUp',
        animatedOut:'slideOutDown',
        color:'#ddd',
        // Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },           
        afterOpen: function() {
            console.log("The animation is completed");
        }, 
        beforeClose: function() {
            console.log("The animation was called");
        }, 
        afterClose: function() {
            console.log("The animation is completed");
        }
    });


    // nav scroll slide
    $('a.panel').click(function () {

        $('a.panel').removeClass('selected');
        $(this).addClass('selected');
        
        current = $(this);
        
        $('#wrapper').scrollTo($(this).attr('href'), 800);      
        
        return false;
    });

    $(window).resize(function () {
        resizePanel();
    });

    function resizePanel() {
        width = $(window).width();
        height = $(window).height();

        mask_width = width * $('.item').length;
            
        $('#debug').html(width  + ' ' + height + ' ' + mask_width);
            
        $('#wrapper, .item').css({width: width, height: height});
        $('#mask').css({width: mask_width, height: height});
        $('#wrapper').scrollTo($('a.selected').attr('href'), 0);
    }



    // $('#nav-profile').click(function() {
    //     console.log('test');
    //     $('#portfolio').addClass('animated fadeOutLeft');
    //     $('#profile').addClass('animated fadeInRight');
    // });

   
    //profile image carousel
    $(window).load(function(){
        $('.profile-photos').slick({
        arrows: false,
        autoplay: true,
        Speed: 500,
        adaptiveHeight: false,
        cssEase: 'ease',
        fade: true,
        lazyLoad: 'progressive',
        mobileFirst: true,
        pauseOnHover: true
        });
    });
	

    //copy to clipboard
    var clipboard = new Clipboard('.copy-to-clipboard');
    clipboard.on('success', function(e) {
        console.log(e);
        $('#copied').show();
    });
    clipboard.on('error', function(e) {
        console.log(error);
    });


});//end ready


 // fadein when in viewport
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        var topDivHeight = $(".cover").height();
        var viewPortSize = $(window).height();
        
        var triggerAt = 150;
        var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.video').css('visibility', 'visible').hide().fadeIn();
            $(this).off('scroll');
        }
    });
    