app.controller('loginCtrl', ['$scope', function($scope){

	naviBoard.setNavigation('navigateLogin');
//  naviBoard.refreshNavigation('navigateLogin',true);


    $scope.$on("$destroy", function() {

        log(" LoginCtrl Navigation Destroyed");
        naviBoard.destroyNavigation('navigateLogin');

    });


}])
