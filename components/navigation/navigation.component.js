angular.module('controllers').controller('navigationController', [
  '$scope',
  '$rootScope',
  '$location',
  function($scope, $rootScope, $location) {
    $scope.appTitle = 'AngularJS';
    $scope.logout = function() {
      $rootScope.loginStatus = null;
      $rootScope.userId = null;
      $rootScope.username = null;
      $location.path('/');
    };
  }
]);
