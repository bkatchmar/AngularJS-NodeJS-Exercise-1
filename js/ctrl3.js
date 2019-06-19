app.controller("ctrl3", function($scope) {
    $scope.message = "";
    $scope.userMessage = "";
    $scope.quotes = ["I'm Pickle Rick","Wubba Lubba Dub Dub","And That's The Way The News Goes","Ricky Ticky Tavi Beotch"];
    $scope.changeQuote = function(q) { $scope.message = q; };
    $scope.pushNewQuote = function() {
        if ($scope.userMessage !== "") {
            $scope.quotes.push($scope.userMessage);
            $scope.userMessage = "";
        }
    }
});