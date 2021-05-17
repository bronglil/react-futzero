/*
    Name: YouTubePopUp
    Description: jQuery plugin to display YouTube, Vimeo, and MP4 video in a pop-up. Responsive, retina ready, and easy to use.
    Version: 1.1.2
    Written By: Alobaidi
    Live Demo: https://wp-plugins.in/VP-Live-Demos
    Copyright 2020 Alobaidi (email: wp-plugins@outlook.com)
*/

jQuery(function(){
    jQuery("a.vp-a").YouTubePopUp();
    jQuery("a.vp-s").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
});