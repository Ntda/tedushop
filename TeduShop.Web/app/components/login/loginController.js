(function (app) {
    app.controller('loginController', loginController);
    loginController.$inject = ['$scope', '$state'];
    function loginController($scope, $state) {
        $scope.loginSubmit = function () {
            $state.go('login');
        }
    }
})(angular.module('tedushop'));