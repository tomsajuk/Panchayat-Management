(function() {
    'use strict';

    function controller($scope, $state, $stateParams, $http) {
        $scope.group = {};
        $scope.group.members = [{}];
        $scope.noOfMembers = 1;

        $scope.addMember = function(nums) {
          let length = $scope.group.members.length;
          console.log(nums, length)
          if(nums > length) {
              for(let i=0;i<(nums-length);i++) {
                $scope.group.members.push({});
              }
          } else if (nums < length) {
            $scope.group.members.splice(nums,length-nums);
          }
        }

        $scope.createGroup = function(alfgroup) {   // TODO: check how radio value can be passed
            console.log(alfgroup);
            $http.post('/api/alf/create',alfgroup).then(function(res) {
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
