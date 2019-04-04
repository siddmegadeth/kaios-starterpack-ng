app.directive('kaiCards', [function() {
    return {
        restrict: 'EA',
        scope: {
            title: '@',
            text: '@'
        },
        templateUrl: 'components/cards/cards.html',
        link: function(scope, iElement, iAttrs) {
     	var title = iAttrs.title;
     	var text = iAttrs.text;
     	console.log(title,text);

        }
    };
}])