/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController",FormsController);

    function FormsController($scope,$location,$rootScope,FormService){
        $scope.forms = FormService.forms;

        $scope.deleteForm = deleteForm;
        $scope.addForm = addForm;

        function deleteForm(form){
            FormService.deleteFormById(form)
        }

        function addForm(form){

            FormService.createFormForUser(form)
        }


    }
})();