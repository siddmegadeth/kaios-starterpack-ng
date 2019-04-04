app.controller("landingCtrl", ['$scope', function($scope) {

  $scope.cards = [];
  naviBoard.setNavigation('navigateLanding');

  $scope.generateCards = function(count) {
    var i = 0;
    while (i != count) {
      var tuple = {};
      tuple.title = "This Is A Card Header " + i;
      tuple.footer = "This Is A Footer Card Text " + i;
      tuple.header = "This Is A Card Header " + i;
      $scope.cards.push(tuple);
      i++;
    }
  }


  $scope.$on("$destroy", function() {

    log(" landingCtrl Navigation Destroyed");
    naviBoard.destroyNavigation('navigateLanding');

  });

  $scope.generateCards(10);

}]);
