"use strict";

var inject =
    [
        "ngRoute"
        // "kaiOS"
    ];

var win = new winDevice("myApp", inject, true); //Bootstrap Cordova Or Browser Based App ..true to enforce cordova.js on browser if required
var app = win.device(); // init App
win.log(true); //Enable console.log or Disable console.log and Enable console.error or Disable console.error


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    //kaiOSProvider.init();
  //  $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $routeProvider
    .when("/landing", {
            templateUrl: 'pages/landing/landing.html',
            controller: 'landingCtrl'
        })
        .when("/login", {
            templateUrl: 'pages/login/login.html',
            controller: 'loginCtrl'
        })
        .when("/not-found", {
            templateUrl: 'pages/not-found/not-found.html'
        })
        .otherwise({
            redirectTo: '/login'
        });

}]);
