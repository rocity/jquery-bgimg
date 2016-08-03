(function ($) {
    "use strict";
    $.fn.bgimg = function (options) {

        // Initialize default attributes
        var settings = $.extend({
            backgroundImage: undefined,
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto auto",
            backgroundPosition: "50% 50%",
        }, options);

        // Loop through each matched element
        this.each(function (i, o) {

            var t   = $(this),
                d   = t.data(),
                img = d.bgimg;

            // Check if dataimg data attribute is set for the element
            // If not set, use the string used in the JS declaration
            if (typeof img === 'undefined') {
                img = settings.backgroundImage;
            }

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
            });

            // Set CSS rules for the element
            $(this).css({
                backgroundImage:    'url('+img+')',
                backgroundColor:    settings.backgroundColor,
                backgroundRepeat:   settings.backgroundRepeat,
                backgroundSize:     settings.backgroundSize,
                backgroundPosition: settings.backgroundPosition
            });

        });
        return this;
    }
}(jQuery))