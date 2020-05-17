(function() {
    'use strict';

    angular.module('shgGroup',[])
        .config(function($stateProvider, $locationProvider,$urlRouterProvider) {
            $stateProvider
                .state('shg.addMeeting', {
                    url: '/addMeeting/:shg_id',
                    component: 'shg.addMeeting'
                })
                .state('shg.createGroup', {
                    url: '/creategroup',
                    component: 'shg.createGroup'
                })
                .state('shg.viewGroup', {
                    url: '/viewgroup/:shg_id',
                    component: 'shg.viewGroup'
                })
                .state('shg.viewAll', {
                    url: '/',
                    component: 'shg.viewAll'
                });
        })
        .component('shgGroup', {
            template:'<ui-view></ui-view>'
        });
})();
