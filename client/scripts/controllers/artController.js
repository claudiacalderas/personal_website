myApp.controller('ArtController', ['$scope', '$location', function($scope, $location) {

  console.log('ArtController loaded');

  $scope.slides = [
    {
      image: 'views/images/ShopPhoto1.jpg'
    },
    {
      image: 'views/images/ShopPhoto2.jpg'
    },
    {
      image: 'views/images/ShopPhoto3.jpg'
    },
    {
      image: 'views/images/ShopPhoto4.jpg'
    }
  ];

  var slideIndex = 1;
  // showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  $scope.currentSlide = function(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    // var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > $scope.slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = $scope.slides.length
    }
    for (i = 0; i < $scope.slides.length; i++) {
        // $scope.slides[i].image.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // $scope.slides[slideIndex-1].image.style.display = "block";
    dots[slideIndex-1].className += " active";
  }







}]);
