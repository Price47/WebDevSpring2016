/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($rootScope, $location){

        if($rootScope.currentUser){
            $rootScope.titleText = $rootScope.currentUser.username;
        }
        else{
            $rootScope.titleText = "PictoGallo";
        }
    }
})();