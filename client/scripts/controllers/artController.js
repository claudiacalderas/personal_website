myApp.controller('ArtController', ['$scope', '$location', '$interval', '$window', 'DataService',
                function($scope, $location, $interval, $window, DataService) {

  // automatic slide change time
  SLIDECHANGE_TIME = 4000;
  SLIDE_MOVE = 1;

  // array of images
  $scope.slides = [
    {
      image: 'views/images/ShopPhoto1.jpg',
      visible: true
    },
    {
      image: 'views/images/ShopPhoto2.jpg',
      visible: false
    },
    {
      image: 'views/images/ShopPhoto3.jpg',
      visible: false
    },
    {
      image: 'views/images/ShopPhoto4.jpg',
      visible: false
    },
    {
      image: 'views/images/ShopPhoto5.jpg',
      visible: false
    }
  ];

  // slice index
  var slideIndex = 0;

  // changes slide based on clicked dot at the bottom
  $scope.currentSlide = function(clickedSliceIndex) {
    $scope.slides[slideIndex].visible = false;
    $scope.slides[clickedSliceIndex].visible = true;
    slideIndex = clickedSliceIndex;
  }

  // moves slides back or forth depending on parameter n (+1, -1)
  $scope.moveSlides = function(n) {
    $scope.slides[slideIndex].visible = false;
    if ((slideIndex + n) >= $scope.slides.length) {
      slideIndex = 0;
    } else if ((slideIndex + n) <= 0) {
      slideIndex = $scope.slides.length - 1;
    } else {
      slideIndex += n;
    }
    $scope.slides[slideIndex].visible = true;
  }

  // automatic slide change every 4 seconds
  var change = $interval(function(){
      $scope.moveSlides(SLIDE_MOVE);
  }, SLIDECHANGE_TIME);

  $scope.goToShop = function() {
    $window.open('https://www.etsy.com/shop/claudiacalderas', '_blank');
  }

  $scope.goToBlog = function() {
    $window.open('http://www.calderasart.com/', '_blank');
  }

  $scope.goToWork = function() {
    $location.url('/work');
  }

}]);
