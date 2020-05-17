(function() {
    'use strict';

    function controller($scope, $document) {
        let submenus = $document[0].getElementsByClassName('sub-nav');
        console.log(submenus);
        for( let i = 0; i < submenus.length; i++) {
                submenus[i].style.display = 'none';
        }
        $scope.toggleDropdown = function(e) {
            if(submenus[e].style.display === 'block')
                submenus[e].style.display = 'none';
            else
                submenus[e].style.display = 'block';
        }
    }

    angular.module('navBar').component('navBar', {
        templateUrl: 'src/nav-bar/template.html',
        controller: controller
    })
})();
