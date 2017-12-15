app.service("homeService",homeService);
function homeService($http,$localStorage) {
    this.getStaticData = function () {
        return $http.post("http://localhost:8080/static",{"token":$localStorage.poc}).then(function (posRes) {
            return posRes.data.products;
        },function (errRes) {
            return errRes;
        });
    };

    this.getMySQLData = function () {
        return $http.post("http://localhost:8080/mysql",{"token":$localStorage.poc}).then(function (posRes) {
            return posRes.data;
        },function (errRes) {
            return errRes;
        });
    };

   
}