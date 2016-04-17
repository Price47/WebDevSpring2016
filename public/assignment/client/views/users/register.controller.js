/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController",RegisterController);

    function RegisterController($location,$scope,$http, UserService) {

        $scope.addUser = addUser;

        function addUser(user){
            $http.post("/rest/user",user)
                .success($location.url("/profile"));
        }
    }
})();