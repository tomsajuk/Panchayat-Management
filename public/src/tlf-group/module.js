(function() {
    'use strict';

    angular.module('tlfGroup',[])
    .config(function($stateProvider, $locationProvider,$urlRouterProvider) {
        $stateProvider
            .state('tlf.addMeeting', {
                url: '/addMeeting/:tlf_id',
                component: 'tlf.addMeeting'
            })
            .state('tlf.createGroup', {
                url: '/creategroup',
                component: 'tlf.createGroup'
            })
            .state('tlf.viewGroup', {
                url: '/viewgroup/:tlf_id',
                component: 'tlf.viewGroup'
            })
            .state('tlf.viewAll', {
                url: '/',
                component: 'tlf.viewAll'
            });
    })
    .component('tlfGroup', {
        template:'<ui-view></ui-view>'
    });;

})();
