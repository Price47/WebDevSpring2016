var mongoose = require("mongoose");

module.exports = function(){

    var UserSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model('User',UserSchema);

    UserModel.create({username:"alice",password:"alice",firstName:"Alice",lastName:"Liddell",role:"admin"});
    UserModel.create({username:"bob",password:"bob",firstName:"Robby",lastName:"Rob",role:"Enthusiast"});
    UserModel.create({username:"charlie",password:"charlie",firstName:"Charlie",lastName:"Chaplin",role:"Artist"});

    var api = {

        findUserById:findUserById,
        findAllUsers: findAllUsers,
        deleteUser: deleteUser,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        createUser: createUser,
        updateUser: updateUser,
        addFavoritePhoto:addFavoritePhoto
    };return api;

    function findUserByUsername(username){
        return UserModel.find({username:username})
    }

    function findUserById(id){
        return UserModel.findById(id)
    }
    function findAllUsers(){
        return UserModel.find();
    }
    function updateUser(id,user){
        return UserModel.update({_id:id},{$set:user})
    }

    function addFavoritePhoto(userId,photoId){
        return UserModel.update({_id:userId},{$addToSet:{favoritePhotos:photoId}})
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