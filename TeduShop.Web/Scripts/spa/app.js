/// <reference path="../plugin/angular/angular.js" />

var myApp = angular.module('myModule', []);
myApp.controller("schoolController", schoolController)
myApp.controller("StudentController", StudentController);
myApp.controller("TeacherController", TeacherController);
myApp.service("Validator", Validator);
myApp.directive("teduShopDirective", teduShopDirective);
myApp.$inject = ['$scope'];
schoolController.$inject["$scope", "Validator"];

function schoolController($scope, Validator) {
    //$scope.message="Message from school"
    $scope.checkNumber=function(){
        Validator.checkNumber(2);
    }
    $scope.num = 1;
   
}
//declare
function StudentController(/*$rootScope*/$scope) {
    //$rootScope.message = "this is my message from student";
    $scope.message = "this is my message from student";
}

function TeacherController($scope) {
    $scope.message = "this is my message from teacher";
}

function Validator($window) {
    return {
        checkNumber:checkNumber
    }
    function checkNumber(input) {
        if (input % 2)
            alert("So le");
        else
            alert("Solchan");
    }
}

function teduShopDirective() {
    return {
        restrick:"A",
        templateUrl:"/Scripts/spa/teduShopDirective.html"
    }
}