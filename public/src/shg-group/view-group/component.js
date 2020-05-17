(function() {
    'use strict';

    function controller($scope, $http, $state, $stateParams) {
        let shg_id = $stateParams.shg_id;
        $scope.shgName = "";
        $scope.people = [];
        $http.get('api/shg/name/'+shg_id).then(function(res) {
            $scope.shgName = res.data[0].name;
            console.log(res.data);
        })
        $http.get('api/people/shg/'+shg_id).then(function(res) {
            $scope.people = res.data;
            console.log(res.data);
        });
    }

    angular.module('shgGroup').component('shg.viewGroup', {
        templateUrl: 'src/shg-group/view-group/template.html',
        controller: controller
    })
})();
