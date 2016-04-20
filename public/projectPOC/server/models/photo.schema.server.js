module.exports = function(mongoose){

    var PhotoSchema = mongoose.Schema({
        picture : String,
        user: String
    },{collection:"photos"});
    return PhotoSchema;
};
