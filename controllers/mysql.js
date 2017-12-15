app.controller("mysql",mysql);
function mysql($scope,homeService) {
    homeService.getMySQLData().then(function (res) {
        $scope.result = res;
    });
};