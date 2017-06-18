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
    .when('/art', {
      templateUrl: '/views/templates/art.html',
      controller: 'ArtController',
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
