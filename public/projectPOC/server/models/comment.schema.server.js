module.exports = function(mongoose){

    var CommentSchema = mongoose.Schema({
        username: String,
        pictureId: String,
        comment: String,
        date: Date
    },{collection:"comments"});
    return CommentSchema;
};
