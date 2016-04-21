module.exports = function(mongoose){

    var UserSchema = mongoose.Schema({
        username: {type:String,unique:true},
        password: String,
        firstName: String,
        lastName:String,
        favoritePhotos: [String],
        role:[{type:String,default:"Enthusiast"}]
    },{collection:"users"});
    return UserSchema;
};