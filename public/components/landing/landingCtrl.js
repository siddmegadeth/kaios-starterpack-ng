app.controller("landingCtrl", ['$scope', function($scope) {

    naviBoard.setNavigation('navigateLanding');

   

    $scope.$on("$destroy", function() {

        log("Navigation Destroyed");
        naviBoard.destroyNavigation('navigateLanding');

    });

}]);