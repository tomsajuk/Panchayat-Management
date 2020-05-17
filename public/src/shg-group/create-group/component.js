(function() {
    'use strict';

    function controller($scope, $state, $stateParams, $http) {
        $scope.group = {};
        $scope.group.users = [{}];
        $scope.noOfMembers = 1;
        $scope.alfs = [];

        $http.get('/api/alf/name').then(function(res) {
            $scope.alfs = res.data;
            console.log(res.data);
        });

        $scope.addMember = function(nums) {
          let length = $scope.group.users.length;
          console.log(nums, length)
          if(nums > length) {
              for(let i=0;i<(nums-length);i++) {
                $scope.group.users.push({});
              }
          } else if (nums < length) {
            $scope.group.users.splice(nums,length-nums);
          }
        }

        $scope.createGroup = function(shgroup) {   // TODO: check how radio value can be passed
            console.log(shgroup);
            $http.post('/api/shg/create',shgroup).then(function(res) {
                console.log(res);
                $state.go('home');
            });
        }
    }

    angular.module('shgGroup').component('shg.createGroup', {
        templateUrl: 'src/shg-group/create-group/template.html',
        controller: controller
    })
})();
