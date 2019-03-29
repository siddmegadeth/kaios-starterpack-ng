(function() {

    var kai = angular.module("kaiOS", []);

    kai.provider("kaiOS", [function() {
        var globalClassName;
        return {


            init: function(className) {
                log("Initialize KaiOS");
                globalClassName = className;
                window.addEventListener("keydown", this.keyNavigation);

            },
            navigate: function(move) {
                var items = document.querySelectorAll('.items');
                log(items.length);

                var next = items + move;

                var targetElement = items[next];
                targetElement.focus();
            },

            keyNavigation: function(e) {
                log(e);
                switch (e.key) {
                    case 'ArrowUp':
                        {
                            this.navigate(-1);
                            break;
                        }
                    case 'ArrowDown':
                        {
                            this.navigate(1);
                            break;
                        }
                    case 'ArrowRight':
                        {
                            this.navigate(1);
                            break;
                        }
                    case 'ArrowLeft':
                        {
                            this.navigate(-1);
                            break;
                        }
                }
            },

            $get: ['$http', '$timeout', function($http, $timeout) {
                return {





                }

            }]

        }

    }]);

})()