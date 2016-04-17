/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController",FormsController);

    function FormsController($scope,$location,$rootScope,$http, FormService){

        FormService.readAllForms(renderForms);
        $scope.addForm = addForm;
        $scope.selectForm = selectForm;
        $scope.deleteForm = deleteForm;

        function renderForms(response){
            $scope.forms= response;
        }

        function addForm(form){
            FormService.createForm(form,renderForms);
        }

        function selectForm(index)
        {
            $scope.selectedFormIndex = index;
            FormService.readForm(index,function(response)
            {
                $scope.form = response;
            })
        }

        function deleteForm(index)
        {
            FormService.deleteFormByIndex(index,renderForms)
        }


    }
})();