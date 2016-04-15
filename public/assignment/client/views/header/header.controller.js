/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($scope,$location,$rootScope,UserService){

        $scope.logout = logout;

        function logout(){
            $rootScope.currentUser = null;
            console.log("logout");
        }
    }
})();