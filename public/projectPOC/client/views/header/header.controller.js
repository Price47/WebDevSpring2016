/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($rootScope,$scope, $location){
        $scope.profile = profile;
        $isAdmin = isAdmin;

        function profile(){
            if(!$rootScope.currentUser){
                $location.url("/login");
                console.log("thi")
            }
            else if($rootScope.currentUser.role="admin"){
                $location.url("/profile-admin")
            }
            else{
                $location.url("/profile")
            }

        }

        function isAdmin(){
            if($rootScope.user){
                if($rootScope.user.role == "admin"){
                    return true;
                }
            }else{
                return false;
            }

        }

        if($rootScope.currentUser){
            $rootScope.titleText = $rootScope.currentUser.username;
        }
        else{
            $rootScope.titleText = "PictoGallo";
        }
    }
})();