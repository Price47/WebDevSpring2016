/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController",FormsController);

    function FormsController($scope,$location,$rootScope,$http, FormService){

        FormService.readAllForms(renderForms);

        function renderForms(response){
            $scope.forms= response;
        }

    }
})();