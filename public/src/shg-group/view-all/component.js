(function() {
    'use strict';

    function controller($scope, $http) {
      $scope.areas = [];
      $http.get('api/shg/').then(function(res) {
        $scope.areas = res.data;
        console.log(res.data);
      })
    }

    angular.module('shgGroup').component('shg.viewAll', {
        templateUrl: 'src/shg-group/view-all/template.html',
        controller: controller
    })
})();
