/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location,$scope,$rootScope,UserService){

        $scope.createUser = createUser;


        function createUser(user){
            UserService.createUser(user,function(response){
                $scope.users=response;
            });
            $location.url("/profile-admin");
        }
    }
})();