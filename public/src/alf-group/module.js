(function() {
    'use strict';

    angular.module('alfGroup',[])
    .config(function($stateProvider, $locationProvider,$urlRouterProvider) {
        $stateProvider
            .state('alf.addMeeting', {
                url: '/addMeeting/:alf_id',
                component: 'alf.addMeeting'
            })
            .state('alf.createGroup', {
                url: '/creategroup',
                component: 'alf.createGroup'
            })
            .state('alf.viewGroup', {
                url: '/viewgroup/:alf_id',
                component: 'alf.viewGroup'
            })
            .state('alf.viewAll', {
                url: '/',
                component: 'alf.viewAll'
            });
    })
    .component('alfGroup', {
        template:'<ui-view></ui-view>'
    });;

})();
