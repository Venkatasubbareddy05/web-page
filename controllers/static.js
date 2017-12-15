app.controller("static",static);
function static($scope,homeService) {
    homeService.getStaticData().then(function (res) {
        $scope.result = res;
    });
};