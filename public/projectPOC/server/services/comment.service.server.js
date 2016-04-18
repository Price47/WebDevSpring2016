var mongoose = require("mongoose");

module.exports = function(app,commentModel){

    app.get("/api/comment",findComments);



    function findComments(){
        commentModel.findComments()
            .then(
                function(comments){
                    res.json(comments)
                },
                function(err){
                    res.status(400).send(err)
                }
            )
    }
};