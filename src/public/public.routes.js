(function() {
    'use strict';

    angular.module('public')
        .config(routeConfig);


    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
        // .state('public', {
        //     abstract: true,
        //     templateUrl: 'src/public/public.html'
        // })
            .state('home', {
                url: '/',
                templateUrl: 'src/public/home/home.html'
            })
            .state('stream', {
                abstract: true,
                templateUrl: 'src/public/stream/stream.template.html'
            })
            .state('stream.select', {
                url: '/{stream}',
                templateUrl: 'src/public/stream/subject/subject.template.html',
                controller: 'SubjectController as SubjectCtrl',
                resolve: {
                    Subject: ['$stateParams', 'SubjectService', function($stateParams, SubjectService) {
                        return SubjectService.getSubject($stateParams.stream);
                    }]
                }
            })
            .state('stream.select.subject', {
                url: '/{subject}',
                templateUrl: 'src/public/stream/resource/resource.template.html'
            })
            .state('stream.select.subject.papers', {
                url: '/papers',
                templateUrl: 'src/public/stream/resource/papers/papers.template.html'
            })
            .state('stream.select.subject.tutorial', {
                url: '/tutorial',
                templateUrl: 'src/public/stream/resource/tutorial/tutorial.template.html'
            });


    }
})();