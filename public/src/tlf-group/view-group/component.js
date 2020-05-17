(function() {
    'use strict';

    function controller($scope, $http, $state, $stateParams) {
        let tlf_id = $stateParams.tlf_id;
        $scope.tlfName = "";
        $scope.alfs = [];
        $http.get('api/tlf/name/'+tlf_id).then(function(res) {
            $scope.tlfName = res.data[0].name;
            console.log(res.data);
        })
        $http.get('api/alf/tlf/'+tlf_id).then(function(res) {
            $scope.alfs = res.data;
            console.log(res.data);
        });
    }

    angular.module('tlfGroup').component('tlf.viewGroup', {
        templateUrl: 'src/tlf-group/view-group/template.html',
        controller: controller
    })
})();
