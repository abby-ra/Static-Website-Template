(function($) {	
	'use strict';
    
    var year = 2023;
    var month = 3;
    var date = 24;
    var time = 0;
    
    month = month - 1;
    jQuery(function () {
        jQuery('#defaultCountdown').countdown({until: new Date(year, month, date, time)});
    });
})(jQuery);

