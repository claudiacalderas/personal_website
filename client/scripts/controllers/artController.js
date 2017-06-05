myApp.controller('ArtController', ['$scope', '$location', function($scope, $location) {

  console.log('ArtController loaded');

  function CarouselDemoCtrl($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
      {
        image: 'views/images/ShopPhoto1.jpg'
      },
      {
        image: 'views/images/ShopPhoto2.jpg'
      },
      {
        image: 'views/images/ShopPhoto3.jpgs'
      },
      {
        image: 'views/images/ShopPhoto4.jpg'
      }
    ];
  }







}]);
