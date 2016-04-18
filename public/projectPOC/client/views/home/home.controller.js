/**
 * Created by rockstar645 on 3/8/16.
 */
(function() {

        angular
            .module("ProjectApp")
            .controller("HomeController",HomeController);


        function HomeController($location, $scope, $rootScope,$http, UserService){
            $scope.setAdmin = setAdmin;
            $scope.setProfile = setProfile;


            function setAdmin(){
                $rootScope.user = 2;
                console.log($rootScope.user)
            }

            function setProfile(){
                $rootScope.user = 1;
                console.log($rootScope.user);
            }
        }

    }
)();