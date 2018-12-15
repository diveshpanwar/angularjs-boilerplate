angular
  .module('controllers')
  .controller('loginController', [
    '$scope',
    '$http',
    'submitLogin',
    function($scope, $http, submitLogin) {
      $scope.heading = 'Login';
      $scope.loginForm = {};
      $scope.message = null;
      $scope.products = [];
      $scope.login = function() {
        $http.get('https://diveshpanwar-heroku1.herokuapp.com/mongoTest').then(function(response) {
          $scope.products = response.data;
          if($scope.products.length > 0) {
              $scope.message = 'Logged in Successfully'
          }
        }).catch(function(error){
            console.log(error);
        });
      };
    }
  ])
  .factory('submitLogin', [
    '$http',
    function($http) {
      return function(formData) {
        setTimeout(function() {
          let message = 'User Logged In Successfully.';
          console.log(message);
          return message;
        }, 2000);
      };
    }
  ]);
