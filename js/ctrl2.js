app.controller("ctrl2", function($scope) {
    $scope.message = "";
    $scope.quotes = ["I'm Pickle Rick","Wubba Lubba Dub Dub","And That's The Way The News Goes","Ricky Ticky Tavi Beotch"];
    $scope.changeQuote = function(q) { $scope.message = q; };
});