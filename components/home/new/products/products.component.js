angular.module('controllers').controller('ProductsController', [
    '$scope',
    '$http',
    '$location',
    'HomeService',
    function($scope, $http, $location, HomeService) {
      $scope.heading = 'Home';
      $scope.products = [];
      $scope.productsLoaded = false;
  
      HomeService.fetchProducts()
        .then(function(response) {
          $scope.products = response.data;
          $scope.productsLoaded = true;
        })
        .catch(function(error) {
          console.log(error);
        });
  
      $scope.singleProduct = function(productId) {
        $location.path('/product/' + productId);
      };
    }
  ]);