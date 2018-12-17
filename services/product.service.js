angular.module('controllers').service('ProductService', ['$http', function($http) {
    this.fetchProduct = function(data) {
        return $http.post('https://diveshpanwar-heroku1.herokuapp.com/singleProduct', data);
    }
}]);