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
    });
  };

  // Adds a new artItem
  newArtPortfolioItem = function() {
    var artItem = {};
    artItem.title = 'Pecora - Flowers Card';
    artItem.image_url = 'views/images/ShopPhoto4.jpg';
    artItem.images = ['https://s3.amazonaws.com/artwork-photos/Pecora_Flowers_Original.jpg',
                      'https://s3.amazonaws.com/artwork-photos/Pecora_Flowers1.png',
                      'https://s3.amazonaws.com/artwork-photos/Pecora_Logo2.png',
                      'https://s3.amazonaws.com/artwork-photos/Pecora_Logo1.png'];
    artItem.description = 'Flowery circle';
    artItem.long_description = ['A flowery circle designed for Pecora Madrid, a jewelry shop in Madrid, Spain.',
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
