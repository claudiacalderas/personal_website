myApp.factory('DataService', ['$http', '$q', '$location', function($http, $q, $location){

  console.log('Data Service Loaded');

  // Stores all groups associated with the logged user
  var currentItem = {};
  var artPortfolioObject = {};

  // Gets all art portfolio items
  getArtPortfolioItems = function(){
    console.log('getArtPortfolioItems called');
    var deferred = $q.defer();
    $http.get('/art').then(function(response) {
        deferred.resolve(response);
        console.log('response is', response);
        artPortfolioObject.allItems = response.data;
        console.log('artPortfolioObject',artPortfolioObject);
    })
    .catch(function(response) {
      deferred.reject(response);
    });
    return deferred.promise;

  };

  // Adds a new artItem
  newArtPortfolioItem = function() {
    console.log('in newArtPortfolioItem');
    var artItem = {};
    artItem.title = 'Pecora - Triangles Card';
    artItem.image_url = 'views/images/ShopPhoto2.jpg';
    artItem.images = ['views/images/ShopPhoto1.jpg',
              'views/images/ShopPhoto2.jpg',
              'views/images/ShopPhoto3.jpg',
              'views/images/ShopPhoto4.jpg',
              'views/images/ShopPhoto5.jpg'];
    artItem.description = 'Triangles circle';
    artItem.long_description = ['A modern circle designed for Pecora Madrid, a jewelry shop in Madrid, Spain.',
                                'Painted by hand using Schminke Watercolors and modified digitally'];
    $http.post('/art/add', artItem).then(function(response) {
      console.log('Back from server after creating artItem:', response);
    });
  };

  return {
    currentItem : currentItem,
    artPortfolioObject : artPortfolioObject,
    getArtPortfolioItems : getArtPortfolioItems,
    newArtPortfolioItem : newArtPortfolioItem
  };

}]);
