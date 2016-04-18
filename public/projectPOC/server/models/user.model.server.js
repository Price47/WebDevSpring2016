var mongoose = require("mongoose");

module.exports = function(){

    var UserSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model('User',UserSchema);

    var api = {

        findUserById:findUserById,
        findAllUsers: findAllUsers,
        deleteUser: deleteUser,
        findUserByCredentials: findUserByCredentials,
        createUser: createUser,
        updateUser: updateUser
    };return api;

    function findUserById(id){
        return UserModel.findById(id)
    }
    function findAllUsers(){
        return UserModel.find();
    }
    function updateUser(id,user){
        return UserModel.update({_id:id},{$set:user})
    }
    function deleteUser(id){
        return UserModel.remove({_id:id})
    }
    function findUserByCredentials(username,password){
        return UserModel.findOne({username:username,password:password})
    }

    function createUser(user){
        return UserModel.create(user)
    }


};