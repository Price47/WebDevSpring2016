/**
 * Created by rockstar645 on 2/26/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);

    function MainController($location, $scope) {
        $scope.$location = $location;
    }
})();