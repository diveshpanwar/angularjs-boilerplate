var app = angular.module("app", ['controllers', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: '../components/login/login.component.html',
        controller: 'loginController'
    }).when('/signup', {
        templateUrl: '../components/signup/signup.component.html',
        controller: 'signupController'
    }).when('/', {
        templateUrl: '../components/home/home.component.html',
        controller: 'homeController'
    }).when('/pageNotFound', {
        templateUrl: '../components/error/error.component.html',
        controller: 'errorController'
    }).otherwise({
        redirectTo: '/pageNotFound'
    });
}]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.appName = 'AngularJS';
}]);