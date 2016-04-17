/**
 * Created by rockstar645 on 3/3/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService",FormService)

    function FormService($rootScope, $http){
        var service = {

            createForm: createForm,
            readAllForms: readAllForms,
            readForm: readForm,
            updateFormByIndex: updateFormByIndex,
            deleteFormByIndex: deleteFormByIndex

        };
        return service;

        function createForm(form,callback){
            $http.post("/rest/form",form)
                .success(callback)
        }
        function readAllForms(callback){
            $http.get("/rest/form")
                .success(callback)
        }
        function readForm(id,callback){
            $http.get("/rest/form/" + id)
                .success(callback)
        }
        function updateFormByIndex(user,id,callback){
            $http.put("/rest/form"+id,user)
                .success(callback)
        }
        function deleteFormByIndex(id,callback){
            $http.delete("/rest/form/" + id)
                .success(callback)
        }


    }
})();