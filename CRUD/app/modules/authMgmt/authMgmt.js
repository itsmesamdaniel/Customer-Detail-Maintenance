var authModule = angular.module('authModule', ['ui.router']);

authModule.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/modules/authMgmt/login.html',
        controller: 'loginCtrl'
    });
}]);

