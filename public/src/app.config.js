(function() {
    'use strict';

    angular.module('selfHelp')
        .config(function($stateProvider, $locationProvider,$urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    component: 'home'
                })
                .state('alf', {
                    url: '/alf',
                    component:'alfGroup'
                })
                .state('shg', {
                    url: '/shg',
                    component: 'shgGroup'
                });
            $urlRouterProvider.otherwise('/');
    });
})();
