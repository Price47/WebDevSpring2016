/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController",LoginController);

    function LoginController($location, $scope, $rootScope, UserService) {

        $scope.login = login;

        function login(user) {
            var loginUser = UserService.findUserByUsername(user.username);
            if(loginUser){
                $rootScope.currentUser=user;
                console.log("booyah")
            }
            else{
                console.log("bummer " + user.username + user.password + "/" + loginUser);
            }

        }


    }
})();