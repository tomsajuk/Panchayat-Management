(function() {
    'use strict';

    function controller($scope, $http) {
      $scope.areas = [];
      $http.get('api/alf/').then(function(res) {
        $scope.areas = res.data;
        console.log(res.data);
      })
    }

    angular.module('alfGroup').component('alf.viewAll', {
        templateUrl: 'src/alf-group/view-all/template.html',
        controller: controller
    })
})();
