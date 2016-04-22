module.exports = function(mongoose){

    var PhotoSchema = mongoose.Schema({
        picture : {type:String,unique:true},
        users: [String],
        createdBy: String
    },{collection:"photos"});
    return PhotoSchema;
};
