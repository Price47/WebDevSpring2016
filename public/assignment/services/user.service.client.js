/**
 * Created by rockstar645 on 2/29/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService",UserService)

    function UserService($rootScope) {
        var model = {
            users: [
                {
                    "_id": 123, "firstName": "Alice", "lastName": "Wonderland",
                    "username": "alice", "password": "alice", "roles": ["student"]
                },
                {
                    "_id": 234, "firstName": "Bob", "lastName": "Hope",
                    "username": "bob", "password": "bob", "roles": ["admin"]
                },
                {
                    "_id": 345, "firstName": "Charlie", "lastName": "Brown",
                    "username": "charlie", "password": "charlie", "roles": ["faculty"]
                },
                {
                    "_id": 456, "firstName": "Dan", "lastName": "Craig",
                    "username": "dan", "password": "dan", "roles": ["faculty", "admin"]
                },
                {
                    "_id": 567, "firstName": "Edward", "lastName": "Norton",
                    "username": "ed", "password": "ed", "roles": ["student"]
                }
            ],

            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            findUserById: findUserById,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };
        return model;

        function setCurrentUser(user){
            $rootScope.currentUser = user;
        }

        function getCurrentUser(){
            return $rootScope.currentUser;
        }

        function findUserByCredentials(user) {
            for (var varUser in model.users) {
                if (model.users[varUser].username === user.username &&
                    model.users[varUser].password === user.password) {
                    return model.users[varUser];
                }
            }
            return null;
        }

        function findUserById(userId) {
            for (var varUser in model.users) {
                if (model.users[varUser]._id === userId){
                    return model.users[varUser];
                }
            }
            return null;
        }

        function findAllUsers(callback) {
            if(model.users != null){
                return model.users;
            }
            else{
                return null;
            }
        }

        function createId(){
            var i = 1;
            var newId = null;
            while (newId = null) {
                var id = UserService.findUserById(i);
                if (id = null) {
                    newId = i;
                    return newId;
                }
                else {
                    i++;
                }
            }
        }

        function createUser(user) {
            var newUser = {
                id: createId(),
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password,
                roles: user.roles
            };
            model.users.push(newUser);
            return user;
        }

        function deleteUserById(user){
            for (var varUser in model.users){
                if(model.users[varUser].username === user.username &&
                    model.users[varUser].id===user.id){
                    model.users.splice(varUser, 1)
                }
            }
        }

        function updateUser(userId,currentUser) {
            var user = findUserById(userId);
            if (user != null) {
                if(currentUser.firstName!=null){
                    user.firstName = currentUser.firstName;
                }
                if(currentUser.lastName!=null){
                    user.lastName = currentUser.lastName;
                }
                if(currentUser.username!=null){
                    user.username = currentUser.username;
                }
                if(currentUser.password!=null){
                    user.password = currentUser.password;
                }
                if(currentUser.roles!=null){
                    user.roles = currentUser.roles;
                }
                return user;
            }
            else {
                return null;
            }


        }
    }



})();