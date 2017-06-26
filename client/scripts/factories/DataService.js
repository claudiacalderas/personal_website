myApp.factory('DataService', ['$http', '$location', function($http, $location){

  console.log('Data Service Loaded');

  // Stores all groups associated with the logged user
  var currentItem = {};


  return {
    currentItem : currentItem
  };

}]);
