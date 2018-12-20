/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */

var app = angular.module('app', ['controllers', 'ngRoute', 'ngResource']);

app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '../../components/login/login.component.html',
        controller: 'loginController'
      })
      .when('/signup', {
        templateUrl: '../../components/signup/signup.component.html',
        controller: 'signupController'
      })
      .when('/', {
        templateUrl: '../../components/home/home.component.html',
        controller: 'homeController'
      })
      .when('/product/:productId', {
        templateUrl:
          '../../components/single-product/single-product.component.html',
        controller: 'singleProductController'
      })
      .when('/pageNotFound', {
        templateUrl: '../../components/error/error.component.html',
        controller: 'errorController'
      }).when('/filter', {
        templateUrl: '../../components/home/new/new.component.html',
        controller: 'NewController'
      })
      .when('/dashboard', {
        templateUrl: '../../components/dashboard/dashboard.component.html',
        controller: 'dashboardController',
        resolve: {
          auth: function(AuthGuard) {
            return AuthGuard.authenticate();
          }
        }
      })
      .otherwise({
        redirectTo: '/pageNotFound'
      });
  }
]);

app.run([
  '$rootScope',
  '$location',
  function($rootScope, $location) {
    $rootScope.appName = 'AngularJS';
    $rootScope.userId = null;
    $rootScope.username = null;
    $rootScope.authMessage = null;
    $rootScope.loginStatus = false;
    $rootScope.$on('$routeChangeError', function(
      event,
      current,
      previous,
      rejection
    ) {
      if (rejection === 'Not Authenticated') {
        $location.path('/login');
      }
    });
  }
]);

app.factory('AuthGuard', function($q, $rootScope) {
  return {
    authenticate: function() {
      //Authentication logic here
      if ($rootScope.loginStatus) {
        //If authenticated, return anything you want, probably a user object
        return true;
      } else {
        //Else send a rejection
        $rootScope.authMessage = 'You must login first';
        setTimeout(() => {
            $rootScope.authMessage = null;
        }, 5000);
        return $q.reject('Not Authenticated');
      }
    }
  };
});
