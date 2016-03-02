/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController",ProfileController);

    function ProfileController($scope,$rootScope,$location,UserService){

        $scope.update = update

        function update(user){
            UserService.updateUser($rootScope.currentUser._id,user);
            $location.url("/profile")
        }


    }
})();