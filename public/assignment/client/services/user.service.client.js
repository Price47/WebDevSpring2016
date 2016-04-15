/**
 * Created by rockstar645 on 2/29/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService",UserService)

    function UserService($rootScope,$http) {
        var service = {

            createUser: createUser,
            readAllUsers: readAllUsers,
            readUser: readUser,
            updateUserByIndex: updateUserByIndex,
            deleteUserByIndex: deleteUserByIndex

        };
        return service;

        function readAllUsers(callback) {
            $http.get("/rest/user")
                .success(callback);
        }

        function createUser(user,callback){
            $http.post("/rest/user",user)
                .success(callback);
        }
        function readUser(id, callback){
            $http.get("/rest/user/" + id)
                .success(callback);
        }
        function updateUserByIndex(id,user,callback){
            $http.put("/rest/user/"+id, user)
                .success(callback)
        }
        function deleteUserByIndex(id,callback){
            $http.delete("/rest/user/" + id)
                .success(callback);
        }





    }



})();