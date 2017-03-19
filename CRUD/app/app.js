var app = angular.module('app', ['ui.router', 'authModule', 'dashboardModule']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state('app', {
        url: '/app',
        templateUrl: 'app/shared/app.html'
        //controller: 'appCtrl'
    }); 

    $urlRouterProvider.otherwise('/login');


}]);