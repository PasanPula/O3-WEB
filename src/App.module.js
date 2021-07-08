(function() {
    "use strict";


    angular.module('App', ['public'])
        .config(config);

    config.$inject = ['$urlRouterProvider', '$locationProvider'];

    function config($urlRouterProvider, $locationProvider) {

        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/');
    }

})();