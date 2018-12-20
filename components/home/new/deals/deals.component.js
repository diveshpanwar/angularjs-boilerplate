angular.module('controllers').controller('DealsController', [
    '$scope',
    '$http',
    '$location',
    'HomeService',
    function($scope, $http, $location, HomeService) {
      $scope.heading = 'Home';
      $scope.deals = [];
      $scope.dealsLoaded = false;
  
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