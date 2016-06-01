﻿(function (app) {
    app.controller('productCategoryListController', productCategoryListController);
    productCategoryListController.$inject = ['$scope','apiService','notificationService','$ngBootbox'];
    function productCategoryListController($scope, apiService, notificationService, $ngBootbox) {
        $scope.productCategories = [];
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.getProductCagories = getProductCagories;
        $scope.keyword = '';
       
        $scope.search = function () {
            getProductCagories();
        }
        $scope.deleteProductCategory = deleteProductCategory;

        function deleteProductCategory(id) {
            $ngBootbox.confirm('Bạn có chăc muôn xóa?').then(function () {
                var config = {
                    params: {
                        id:id
                    }
                }
                apiService.del('api/productCategory/delete', config, function () {
                    notificationService.displaySuccess("Xóa thành công");
                    getProductCagories();
                },function () {
                    notificationService.displayError("Xóa không thành công");
                })
            });
        }

        function getProductCagories(page) {
            page = page || 0;
            var config = {
                params: {
                    keyword:$scope.keyword,
                    page: page,
                    pageSize:20
                }
            }
            apiService.get('/api/productCategory/getall', config, function (result) {
                if (result.data.TotalCount == 0) {
                    notificationService.displayWarning("Không tìm thấy bảng ghi nào!");
                }
                else {
                    notificationService.displaySuccess("Tìm thấy " + result.data.TotalCount + " bảng ghi");
                }
                $scope.productCategories = result.data.Items;
                $scope.page = result.data.Page;
                $scope.pagesCount = result.data.TotalPages;
                $scope.totalCount = result.data.TotalCount;
            },function(){
                console.log("Load productcategory failed.");
            });
        }
        $scope.getProductCagories();
    }
})(angular.module('tedushop.product_categories'));