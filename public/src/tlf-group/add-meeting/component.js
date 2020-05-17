(function() {
    'use strict';

    function controller($scope, $state, $stateParams, $http) {

        let tlf_id = $stateParams.tlf_id;
        $scope.members = [];
        $scope.tlfName = "";
        $http.get('api/tlf/name/'+tlf_id).then(function(res) {
            $scope.tlfName = res.data[0].name;
            console.log(res.data);
        })
        $http.get('/api/alf/tlf/'+tlf_id).then(function(res) {
            console.log('ALF',res.data);
            $scope.members = res.data;
        });

        $scope.recordMeeting = function(members, meeting_date, next_meeting_date) {
            $http.post('/api/meeting/tlf/record/'+tlf_id,{members,meeting_date,next_meeting_date}).then(function(res) {
                console.log(res);
                $state.go('home');
            });
        }


    }

    angular.module('tlfGroup').component('tlf.addMeeting', {
        templateUrl: 'src/tlf-group/add-meeting/template.html',
        controller: controller
    })
})();
