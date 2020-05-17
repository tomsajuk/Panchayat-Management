(function() {
    'use strict';

    function controller($scope, $state, $stateParams, $http) {
        let shg_id = $stateParams.shg_id;
        $scope.members = [];
        $scope.shgName = "";
        $http.get('api/shg/name/'+shg_id).then(function(res) {
            $scope.shgName = res.data[0].name;
            console.log(res.data);
        })
        $http.get('/api/people/shg/'+shg_id).then(function(res) {
            console.log('People',res.data);
            $scope.members = res.data;
        });

        $scope.recordMeeting = function(members, meeting_date, next_meeting_date) {
            $http.post('/api/meeting/shg/record/'+shg_id,{members,meeting_date,next_meeting_date}).then(function(res) {
                console.log(res);
                $state.go('home');
            });
        }


    }

    angular.module('shgGroup').component('shg.addMeeting', {
        templateUrl: 'src/shg-group/add-meeting/template.html',
        controller: controller
    })
})();
