angular.module('controllers', []).controller('homeController', [
  '$scope',
  '$http',
  '$location',
  function($scope, $http, $location) {
    $scope.heading = 'Home';
    $scope.products = [];
    $scope.productsLoaded = false;
    $http
      .get('https://diveshpanwar-heroku1.herokuapp.com/mongoTest')
      .then(function(response) {
        $scope.products = response.data;
        $scope.productsLoaded = true;
        console.log($scope.products);
      })
      .catch(function(error) {
        console.log(error);
      });

      $scope.singleProduct = function(productId) {
          $location.path('/product/'+productId);
      }
  }
]);
