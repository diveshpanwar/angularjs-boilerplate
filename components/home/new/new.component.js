angular.module('controllers').controller('NewController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.pageTitle = 'Tabs';
    $scope.tabs = [
        {
            name: 'deals',
            status: 'active',
            template: '../../../components/home/new/deals/deals.component.html'
        },
        {
            name: 'products',
            status: 'inactive',
            template: '../../../components/home/new/products/products.component.html'
        }
    ]

    $scope.changeTabs = function(tabName) {
        $scope.tabs.forEach(tab => {
            if(tab.name == tabName) {
                tab.status = 'active';
            } else {
                tab.status = 'inactive';
            }
        });
    }
}]);