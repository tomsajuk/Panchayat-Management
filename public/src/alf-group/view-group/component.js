(function() {
    'use strict';

    function controller($scope, $http, $state, $stateParams) {
        let alf_id = $stateParams.alf_id;
        $scope.alfName = "";
        $scope.shgs = [];
        $http.get('api/alf/name/'+alf_id).then(function(res) {
            $scope.alfName = res.data[0].name;
            console.log(res.data);
        })
        $http.get('api/shg/alf/'+alf_id).then(function(res) {
            $scope.shgs = res.data;
            console.log(res.data);
        });
    }

    angular.module('alfGroup').component('alf.viewGroup', {
        templateUrl: 'src/alf-group/view-group/template.html',
        controller: controller
    })
})();
