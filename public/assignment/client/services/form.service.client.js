/**
 * Created by rockstar645 on 3/3/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService",FormService)

    function FormService($rootScope, $http){
        var model = {

            readAllForms: readAllForms,
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            getFormId: getFormId,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
            setCurrentForm: setCurrentForm,
            getCurrentForm: getCurrentForm,
            createId: createId
        };
        return model;

        function readAllForms(callback){
            $http.get("/rest/form")
                .success(callback);
        }
        function setCurrentForm(form){
            $rootScope.currentForm = form;
        }

        function getCurrentForm(){
            return $rootScope.currentForm;
        }

        function createId(){
            var i = 0;
            var newId = null;
            while (newId = null) {
                var id = UserService.findUserById(i);
                if (id = null) {
                    newId = i;
                    return newId;
                }
                else {
                    i=i+10;
                }
            }
        }

        function getFormId(form){
            for(var varForm in forms){
                if(varForm.title === form.title){
                    return varForm._id;
                }
            }

        }
        function createFormForUser(form){

            var newForm = {
                _id : createId(),
                title: form.title
            };
            model.forms.push(newForm)

        }


        function findAllFormsForUser(){

        }

        function deleteFormById(form){
            console.log("delete form" + form._id);
            for(var varForm in model.forms){
                if(model.forms[varForm]._id===form._id){
                    model.forms.splice(varForm,1);
                }
            }

        }

        function updateFormById(){

        }


    }
})();