/* global angular */
/*global $scope*/


var app = angular.module('myApp', ['ui.router', 'ngAnimate']);


app.config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state("home", {
        url : "/home",
        templateUrl : "views/home.html",
        controller : "homeCtrl"
    });
});

