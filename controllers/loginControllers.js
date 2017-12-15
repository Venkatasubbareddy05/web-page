app.controller("loginController",loginController);
function loginController($scope,loginService,$localStorage,$location) {
        $scope.login_details={};
        $scope.login = function () {
            loginService.authenticate($scope.login_details).then(function (res) {
                if(res.data.login=="success"){
                    $localStorage.poc = res.data.token;
                    $location.path("/home");
                }else{
                    alert("Invalid Details !");
                }
            });
        };
};