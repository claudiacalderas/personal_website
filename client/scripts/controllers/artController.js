myApp.controller('ArtController', ['$scope', '$location', function($scope, $location) {

  console.log('ArtController loaded');

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

  var slideIndex = 0;
  // showSlides(slideIndex);

  $scope.moveSlides = function(n) {
    console.log("slideIndex",slideIndex);
    var newSlide = slideIndex + n;
    showSlides(n);
  }

  $scope.currentSlide = function(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    // var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    console.log("before",slideIndex);
    $scope.slides[slideIndex].visible = false;
    console.log("first",$scope.slides[slideIndex]);
    console.log("n", n);
    if ((slideIndex + n) >= $scope.slides.length) {
      slideIndex = 0;
      console.log("if");
    } else if ((slideIndex + n) <= 0) {
      slideIndex = $scope.slides.length - 1;
      console.log("else if");

    } else {
      slideIndex += n;
      console.log("else");

    }
    console.log("after",slideIndex);

    $scope.slides[slideIndex].visible = true;
    console.log("second",$scope.slides[slideIndex]);


    // for (i = 0; i < $scope.slides.length; i++) {
    //     $scope.slides[i].image.show = false;
    // }

    // for (i = 0; i < dots.length; i++) {
        // dots[i].className = dots[i].className.replace(" active", "");
    // }
    // console.log($scope.slides[slideIndex-1]);
    // $scope.slides[slideIndex-1].image.show = true;
    // dots[slideIndex-1].className += " active";
  }







}]);
