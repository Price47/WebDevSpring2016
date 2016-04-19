module.exports = function(mongoose){

    var PhotoSchema = mongoose.Schema({
        picture : String
    },{collection:"photos"});
    return PhotoSchema;
};
