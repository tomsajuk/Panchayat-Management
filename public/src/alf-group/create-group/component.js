(function() {
    'use strict';

    function controller($scope, $state, $stateParams, $http) {
        $scope.group = {};
        $scope.group.shgs = [{}];
        $scope.noOfShgs = 1;

        $scope.addMember = function(nums) {
          let length = $scope.group.shgs.length;
          console.log(nums, length)
          if(nums > length) {
              for(let i=0;i<(nums-length);i++) {
                $scope.group.shgs.push({});
              }
          } else if (nums < length) {
            $scope.group.shgs.splice(nums,length-nums);
          }
        }

        $scope.createGroup = function(alfgroup) {   // TODO: check how radio value can be passed
            console.log(alfgroup);
            $http.post('/api/alf/create',shgroup).then(function(res) {
                console.log(res);
                $state.go('home');
            });
        }
    }

    angular.module('alfGroup').component('alf.createGroup', {
        templateUrl: 'src/alf-group/create-group/template.html',
        controller: controller
    })
})();
