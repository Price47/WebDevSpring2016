/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($rootScope,$scope, $location){
        $scope.profile = profile;

        function profile(){
            if($rootScope.currentUser.role="admin"){
                $location.url("/profile")
            }
            else{
                $location.url("/profile")
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