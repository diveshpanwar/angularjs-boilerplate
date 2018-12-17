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
