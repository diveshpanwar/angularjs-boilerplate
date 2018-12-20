angular.module('controllers').directive('productDirective', [function() {
    return {
        scope: {
            product: '=product'
        },
        templateUrl: '../../directives/products/product.directiive.html'
    }
}]);