/**
 * Created by rockstar645 on 2/29/16.
 */
(function(){
    angular
        .module("ProjectApp")
        .factory("UserService",UserService);

    function UserService($rootScope, $http) {
        var service = {

            createUser: createUser,
            readUserById: readUserById,
            readUsers: readUsers,
            updateUser: updateUser,
            deleteUserById: deleteUserById
        };
        return service;

        function createUser(user,callback){
            $http.post("/rest/user",user)
                .success(callback);
        }

        function readUsers(callback){
            $http.get("/rest/user")
                .success(callback);
        }

        function readUserById(id,callback){
            $http.get("/rest/user/" + id)
                .success(callback);
        }

        function updateUser(id,user,callback){
            $http.put("/rest/user/" + id, user)
                .success(callback);
        }

        function deleteUserById(id,callback){
            $http.delete("/rest/user/" + id)
                .success(callback)
        }
    }




})();
