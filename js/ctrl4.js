app.controller("ctrl4", function($scope, caller) {
    $scope.items = [];
    $scope.searchTerm = "";
    $scope.search = function(item) {
        if ($scope.searchTerm === "") {
            return true;
        } else {
            return item.nm.toLowerCase().indexOf($scope.searchTerm.toLowerCase()) > -1;
        }
    };

    caller.getEndpoint("http://mysafeinfo.com/api/data?list=presidents&format=json").then(function (response) {
        $scope.items = response.data;
    });
});