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
            var loginUser = UserService.findUserByCredentials({username:user.username, password:user.password});
            if(loginUser){
                UserService.setCurrentUser(user);
                console.log("booyah")
            }
            else{
                console.log("bummer " + user.username + user.password + "/" + loginUser);
            }

        }
    }
})();