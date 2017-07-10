myApp.factory('DataService', ['$http', '$location', function($http, $location){

  console.log('Data Service Loaded');

  // Stores all groups associated with the logged user
  var currentItem = {};
  var artPortfolioObject = {};

  // Gets all art portfolio items
  getArtPortfolioItems = function(){
    console.log('in getArtPortfolioItems');
    $http.get('/art').then(function(response) {
      console.log('Back from the server with:', response);
      artPortfolioObject.allItems = response.data;
      console.log('artPortfolioObject.allItems is:', artPortfolioObject.allItems);
    });
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
