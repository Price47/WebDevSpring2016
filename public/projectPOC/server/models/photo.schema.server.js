module.exports = function(mongoose){

    var PhotoSchema = mongoose.Schema({
        picture : {type:String,unique:true},
        users: [String]
    },{collection:"photos"});
    return PhotoSchema;
};
