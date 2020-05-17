(function() {
    'use strict';

    function controller($scope, $state, $stateParams, $http) {

        let alf_id = $stateParams.alf_id;
        $scope.members = [];
        $scope.alfName = "";
        $http.get('api/alf/name/'+alf_id).then(function(res) {
            $scope.alfName = res.data[0].name;
            console.log(res.data);
        })
        $http.get('/api/shg/alf/'+alf_id).then(function(res) {
            console.log('ALF',res.data);
            $scope.members = res.data;
        });

        $scope.recordMeeting = function(members, meeting_date, next_meeting_date) {
            $http.post('/api/meeting/alf/record/'+alf_id,{members,meeting_date,next_meeting_date}).then(function(res) {
                console.log(res);
                $state.go('home');
            });
        }


    }

    angular.module('alfGroup').component('alf.addMeeting', {
        templateUrl: 'src/alf-group/add-meeting/template.html',
        controller: controller
    })
})();
