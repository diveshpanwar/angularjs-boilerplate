angular.module('controllers').controller('loginController', [
  '$scope',
  '$rootScope',
  '$http',
  '$location',
  'AuthService',
  function($scope, $rootScope, $http, $location, AuthService) {
    $scope.heading = 'Login';
    $scope.loginForm = {};
    $scope.message = null;
    $scope.error = null;
    $scope.data = null;
    $scope.login = function() {
      $scope.message = $scope.error = null;
      AuthService.login($scope.loginForm)
        .then(function(response) {
          $scope.data = response.data;
          window.localStorage.setItem('user', JSON.stringify($scope.data));
          if ($scope.data.id) {
            $rootScope.userId = $scope.data.id;
            $rootScope.username = $scope.data.username;
            $rootScope.loginStatus = true;
            $scope.message = 'Logged in Successfully';
            $location.path('/dashboard');
          }
        })
        .catch(function(error) {
          $scope.error = error.data.message;
        });
    };
  }
]);
