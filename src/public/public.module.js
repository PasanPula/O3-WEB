(function() {
    "use strict";

    angular.module('public', ['ui.router']).run(['$window', function($window) {
        $window.onload = function() {
            $('#status').fadeOut();
            $('#preloader').delay(550).fadeOut('slow');
            $('body').delay(550).css({ 'overflow': 'visible' });
        };
    }]);

})();