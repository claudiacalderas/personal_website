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
    .when('/contact', {
      templateUrl: '/views/templates/contact.html',
      controller: 'ContactController',
    })
    .when('/work', {
      templateUrl: '/views/templates/work.html',
      controller: 'WorkController',
    })
    .when('/portfolio', {
      templateUrl: '/views/templates/portfolio.html',
      controller: 'WorkController',
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
