angular.module('controllers').controller('singleProductController', [
  '$scope',
  '$http',
  '$routeParams',
  function($scope, $http, $routeParams) {
    $scope.pageTitle = 'Produt Details';
    $scope.maxQty = [1, 2, 3, 4];
    $scope.rater = [1, 2, 3, 4, 5];
    $scope.contentLoaded = false;
    $scope.rating = 1;
    $scope.reviewCount = 4;
    $scope.userRating = 3;
    $scope.data = {
        'productId': $routeParams.productId
    };
    $scope.product = null;
    $http.post('https://diveshpanwar-heroku1.herokuapp.com/singleProduct', $scope.data)
    .then(function(response) {
        $scope.product = response.data;
        $scope.contentLoaded = true;
        console.log($scope.product);
      }).catch(function(error){
          console.log(error);
      });
  }
]);
