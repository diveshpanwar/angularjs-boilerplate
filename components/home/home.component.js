angular.module('controllers', []).controller('homeController', [
  '$scope',
  '$http',
  '$location',
  'HomeService',
  function($scope, $http, $location, HomeService) {
    $scope.heading = 'Home';
    $scope.products = [];
    $scope.productsLoaded = false;
    $scope.deals = [];
    $scope.dealsLoaded = false;
    $scope.product = {
      avgRating: '0',
      category: 'laptops',
      desc:
        'This laptop has very high performance, and fits well for graphic designing.',
      discount: '20',
      displayName: 'Mac Book Air',
      imgUrl: '/assets/images/products/mac.jpg',
      maxQty: '3',
      offerPrice: '80000',
      price: '100000',
      reviews: '0',
      shortDesc: 'High Power Graphic Card',
      _id: '5bf6a73441242125fcf6bba9'
    };
    HomeService.fetchProducts()
      .then(function(response) {
        $scope.products = response.data;
        $scope.productsLoaded = true;
      })
      .catch(function(error) {
        console.log(error);
      });

    HomeService.fetchDeals()
      .then(function(response) {
        $scope.deals = response.data;
        $scope.dealsLoaded = true;
      })
      .catch(function(error) {
        console.log(error);
      });

    $scope.singleProduct = function(productId) {
      $location.path('/product/' + productId);
    };
  }
]);
