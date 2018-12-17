angular.module('controllers').service('HomeService', ['$http', function($http) {
    this.fetchProducts = function() {
        return $http.get('https://diveshpanwar-heroku1.herokuapp.com/products');
    }

    this.fetchDeals = function() {
        return $http.get('https://diveshpanwar-heroku1.herokuapp.com/deals');
    }
}]);