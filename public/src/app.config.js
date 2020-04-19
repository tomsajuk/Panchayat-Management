(function() {
    'use strict';

    angular.module('selfHelp')
        .config(function($stateProvider, $locationProvider,$urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    component: 'home'
                })
                .state('addMeeting', {
                    url: '/addMeeting/:shg_id',
                    component: 'addMeeting'
                })
                .state('createGroup', {
                    url: '/creategroup',
                    component: 'createGroup'
                })
                .state('viewGroup', {
                    url: '/viewgroup/:shg_id',
                    component: 'viewGroup'
                });
            $urlRouterProvider.otherwise('/');
    });
})();
