var dashboardModule = angular.module('dashboardModule', ['ui.router']);

dashboardModule.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('app.home', {
        url: '/home',
        templateUrl: 'app/modules/dashboardMgmt/home.html',
        controller: 'dashboardCtrl'
    });
    $stateProvider.state('app.reports', {
        url: '/reports',
        templateUrl: 'app/modules/dashboardMgmt/reports.html',
        controller: 'dashboardCtrl'
    });
    $stateProvider.state('app.inventory', {
        url: '/inventory',
        templateUrl: 'app/modules/dashboardMgmt/inventory.html',
        controller: 'dashboardCtrl'
    });
    $stateProvider.state('app.purchase', {
        url: '/purchase',
        templateUrl: 'app/modules/dashboardMgmt/purchase.html',
        controller: 'dashboardCtrl'
    });
    $stateProvider.state('app.customerDetails', {
        url: '/customerDetails',
        templateUrl: 'app/modules/dashboardMgmt/customerDetails.html',
        controller: 'dashboardCtrl'
    });
}]);

