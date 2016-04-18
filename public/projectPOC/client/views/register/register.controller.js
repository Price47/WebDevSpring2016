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
            UserService.createUser(user)
                .then(
                    function(user){
                        UserService.login(user.username,user.password)
                            .then(
                                function(user){
                                    $location.url("/profile")
                                },
                            function(err){
                                res.status(400).send(err);
                            })
                    }
                );
            $location.url("/home");

        }


    }
})();