var loginCtrl = app.controller('loginCtrl', ['$state', '$scope', function ($state, $scope) {
    $scope.pass = "admin";
    $scope.check = function () {
        if ($scope.userName == "admin" && $scope.userPassword == "admin") {
            $state.go('app.home')
        }
    }
}]);