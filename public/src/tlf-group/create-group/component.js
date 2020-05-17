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

        $scope.createGroup = function(tlfgroup) {   // TODO: check how radio value can be passed
            console.log(tlfgroup);
            $http.post('/api/tlf/create',tlfgroup).then(function(res) {
                console.log(res);
                $state.go('home');
            });
        }
    }

    angular.module('tlfGroup').component('tlf.createGroup', {
        templateUrl: 'src/tlf-group/create-group/template.html',
        controller: controller
    })
})();
