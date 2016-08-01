"use strict";
jQuery(document).ready(function ($) {
    $('.bgimg').each(function (i, o) {
        var t   = $(this),
            d   = t.data();
        t
            .css('background-image', 'url('+d.bgimg+')')
            .css('background-color', d.bgimgColor)
            .css('background-position', d.bgimgPosition)
            .css('background-size', d.bgimgSize)
            .css('background-repeat', d.bgimgRepeat);
    });
});