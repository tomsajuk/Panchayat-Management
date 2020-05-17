(function() {
    'use strict';

    function controller($scope, $http) {
      $scope.areas = [];
      $http.get('api/tlf/').then(function(res) {
        $scope.areas = res.data;
        console.log(res.data);
      })
    }

    angular.module('tlfGroup').component('tlf.viewAll', {
        templateUrl: 'src/tlf-group/view-all/template.html',
        controller: controller
    })
})();
