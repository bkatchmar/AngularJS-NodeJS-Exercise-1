app.controller("ctrl4", function($scope, caller) {
    $scope.items = [];
    caller.getEndpoint("http://mysafeinfo.com/api/data?list=presidents&format=json").then(function (response) {
        $scope.items = response.data;
    });
});