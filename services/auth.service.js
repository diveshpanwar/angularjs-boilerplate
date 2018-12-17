angular.module('controllers').service('AuthService', ['$http', function($http) {
    this.login = function(formData) {
        return $http.post('https://diveshpanwar-heroku1.herokuapp.com/login', formData);
    }
}]);