(function() {
    'use strict';

    function controller($scope, $http) {
      $scope.areas = [];
      $http.get('api/shg/').then(function(res) {
        $scope.areas = res.data;
        console.log(res.data);
      })
    }

    angular.module('home').component('home', {
        templateUrl: 'src/home/template.html',
        controller: controller
    })
})();
