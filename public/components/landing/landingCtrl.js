app.controller("landingCtrl", ['$scope', function($scope) {

    naviBoard.setNavigation('navigateLanding');



    $scope.$on("$destroy", function() {

        log(" landingCtrl Navigation Destroyed");
        naviBoard.destroyNavigation('navigateLanding');

    });

}]);
