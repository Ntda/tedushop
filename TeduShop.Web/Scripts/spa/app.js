/// <reference path="../plugin/angular/angular.js" />

var myApp = angular.module('myModule', []);
myApp.controller("schoolController", schoolController)
myApp.controller("StudentController", StudentController);
myApp.controller("TeacherController", TeacherController);
myApp.$inject = ['$scope'];

function schoolController($scope) {
    $scope.message="Message from school"
}
//declare
function StudentController(/*$rootScope*/$scope) {
    //$rootScope.message = "this is my message from student";
    $scope.message = "this is my message from student";
}

function TeacherController($scope) {
    $scope.message = "this is my message from teacher";
}