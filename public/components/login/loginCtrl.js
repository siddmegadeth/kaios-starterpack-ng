app.controller('loginCtrl', ['$scope', function($scope){
	

	naviBoard.setNavigation('navigateLogin');

	 $scope.test = function() {
        alert("Test")
        log(naviBoard.getActiveElement());
    }

    $scope.$on("$destroy", function() {

        log("Navigation Destroyed");
        naviBoard.destroyNavigation('navigateLogin');

    });


}])