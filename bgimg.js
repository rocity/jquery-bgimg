(function ($) {
    $.fn.bgimg = function (options) {
        "use strict";

        // Initialize default attributes
        var settings = $.extend({
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto auto",
            backgroundPosition: "50% 50%",
        }, options);

        // Loop through each matched element
        this.each(function (i, o) {
            var t   = $(this),
                d   = t.data();

            // Check if data attributes are set on the element
            $.each(d, function (i, v) {
                switch(i) {
                    case 'bgimgColor':
                        settings.backgroundColor = v;
                        break;
                    case 'bgimgRepeat':
                        settings.backgroundRepeat = v;
                        break;
                    case 'bgimgSize':
                        settings.backgroundSize = v;
                        break;
                    case 'bgimgPosition':
                        settings.backgroundPosition = v;
                        break;
                }
            })

            // Set CSS rules for the element
            $(this).css({
                backgroundImage:    'url('+d.bgimg+')',
                backgroundColor:    settings.backgroundColor,
                backgroundRepeat:   settings.backgroundRepeat,
                backgroundSize:     settings.backgroundSize,
                backgroundPosition: settings.backgroundPosition
            })
            
        });
        return this;
    }
}(jQuery))