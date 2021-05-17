/*
    Name: YouTubePopUp
    Description: jQuery plugin to display YouTube, Vimeo, and MP4 video in a pop-up. Responsive, retina ready, and easy to use.
    Version: 1.1.2
    Written By: Alobaidi
    Live Demo: https://wp-plugins.in/VP-Live-Demos
    Copyright 2020 Alobaidi (email: wp-plugins@outlook.com)
*/

(function ( $ ) {
 
    $.fn.YouTubePopUp = function(options) {

        var YouTubePopUpOptions = $.extend({
                autoplay: 1
        }, options );


        $(this).on('click', function (e) {

            var youtubeLink = $(this).attr("href");

            var dataSoundCloud = $(this).attr('data-soundcloud');

            var disWrap = $(this).attr('data-dwrap');

            var videoType = ' vp-vt-youtube';

            if ( youtubeLink.match(/(youtube.com)/) || youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(vimeo.com)/) ) {

                if( youtubeLink.match(/(youtube.com)/) ){
                    var split_c = "v=";
                    var split_n = 1;
                }

                if( youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(vimeo.com\/)+[0-9]/) ){
                    var split_c = "../index.html";
                    var split_n = 3;
                }

                if( youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
                    var split_c = "../index.html";
                    var split_n = 5;
                }

                var getYouTubeVideoID = youtubeLink.split(split_c)[split_n];

                var cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");

                if( youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(youtube.com)/) ){
                    var videoEmbedLink = "https://www.youtube.com/embed/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";
                    var iframe_element = '<iframe src="'+videoEmbedLink+'" allow="autoplay" allowfullscreen></iframe>';
                }

                if( youtubeLink.match(/(vimeo.com\/)+[0-9]/) || youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
                    var videoEmbedLink = "https://player.vimeo.com/video/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";
                    var iframe_element = '<iframe src="'+videoEmbedLink+'" allow="autoplay" allowfullscreen></iframe>';
                    var videoType = ' vp-vt-vimeo';
                }

            }else{
                if( dataSoundCloud ){
                    var data_embed_sc = $(this).attr('data-embedsc');
                    var iframe_element = '<iframe src="'+data_embed_sc+'" allow="autoplay" allowfullscreen></iframe>';
                    var videoType = ' vp-vt-soundcloud';
                }else{
                    if( YouTubePopUpOptions.autoplay == 1 ){
                        var locally_options = 'controls autoplay controlsList="nodownload"';
                    }else{
                        var locally_options = 'controls controlsList="nodownload"';
                    }
                    var iframe_element = '<video '+locally_options+'><source src="'+youtubeLink+'" type="video/mp4"></video>';
                    var videoType = ' vp-vt-locally';
                }
            }

            if( disWrap || $(this).hasClass('vp-dw') || video_popup_unprm_general_settings.unprm_r_border ){
                var disWrapClass = ' vp-flex-no-border';
            }else{
                var disWrapClass = '';
            }

            $("body").append('<div style="display:none;" class="YouTubePopUp-Wrap VideoPopUpWrap"></div>');

            $(".VideoPopUpWrap").fadeIn(300);

            $(".VideoPopUpWrap").append('<div class="Video-PopUp-Content"><div class="vp-flex'+disWrapClass+videoType+'"><span class="YouTubePopUp-Close"></span>'+iframe_element+'</div></div>');


            $(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function(){
                $(".YouTubePopUp-Wrap").fadeOut(300).delay(325).queue(function() { $(this).remove(); });
            });

            $('.vp-flex, .vp-flex *').click(function(e){
                e.stopPropagation();
            });

            e.preventDefault();

        });
        
        $(document).keyup(function(e) {

            if ( e.keyCode == 27 ){
                $('.YouTubePopUp-Close').click();
            }

        });

    };
 
}( jQuery ));