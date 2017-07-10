myApp.controller('WorkController', ['$scope', '$location', '$interval', '$window', 'DataService', function($scope, $location, $interval, $window, DataService) {

  console.log('WorkController loaded');

  $scope.specificItem = DataService.currentItem;

  $scope.portfolioItems = [
    {title: 'Otomi',
    image_url: 'views/images/ShopPhoto1.jpg',
    images: ['views/images/ShopPhoto1.jpg',
              'views/images/ShopPhoto2.jpg',
              'views/images/ShopPhoto3.jpg',
              'views/images/ShopPhoto4.jpg',
              'views/images/ShopPhoto5.jpg'],
    description: 'Series of Otomi inspired small paintings'},
    {title: 'Pecora - Flowers Card',
    image_url: 'views/images/ShopPhoto4.jpg',
    images: ['https://s3.amazonaws.com/artwork-photos/Pecora_Flowers_Original.jpg',
              'https://s3.amazonaws.com/artwork-photos/Pecora_Flowers1.png',
              'https://s3.amazonaws.com/artwork-photos/Pecora_Logo2.png',
              'https://s3.amazonaws.com/artwork-photos/Pecora_Logo1.png'],
    description: 'Flowery circle ',
    long_description: 'A flowery circle designed for Pecora Madrid, a jewelry shop in Madrid, Spain. '+
                      'Painted by hand using Schminke Watercolors and modified digitally'},
    {title: 'Pecora - Triangles Card',
    image_url: 'views/images/ShopPhoto2.jpg',
    images: ['https://s3.amazonaws.com/artwork-photos/Pecora_Flowers_Original.jpg',
              'https://s3.amazonaws.com/artwork-photos/Pecora_Flowers1.png',
              'https://s3.amazonaws.com/artwork-photos/Pecora_Logo2.png',
              'https://s3.amazonaws.com/artwork-photos/Pecora_Logo1.png'],
    description: 'Triangles circle',
    long_description: 'A modern circle designed for Pecora Madrid, a jewelry shop in Madrid, Spain. ' +
                      'Painted by hand using Schminke Watercolors and modified digitally'}
  ];

  $scope.goToSpecificItem = function(item) {
    console.log('in goToSpecificItem');
    DataService.currentItem = item;
    // $scope.specificItem = item;
    console.log("item:", $scope.specificItem);
    $location.url('/portfolio');
  }

}]);
