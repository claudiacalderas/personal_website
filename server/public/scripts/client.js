var myApp = angular.module('myApp', ['ngRoute','ngMaterial']);

// Angular Material Theme Configuration
myApp.config(['$mdThemingProvider', function($mdThemingProvider) {
   $mdThemingProvider.theme('altTheme').primaryPalette('grey').accentPalette('blue-grey');
}]);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/about.html',
      controller: 'AboutController',
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      controller: 'AboutController',
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);

myApp.controller('AboutController', ['$scope', '$location', function($scope, $location) {

  console.log('AboutController loaded');

}]);

myApp.controller('HomeController', ['$scope', '$location', function($scope, $location) {

  console.log('HomeController loaded');

}]);
