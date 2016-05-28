(function (app) {
    app.filter('statusFilter', function () {
        return function (input) {
            if (input)
                return 'Kích hoạt';
            else
                return 'khóa';
        }
    }); 
})(angular.module('tedushop.common'));