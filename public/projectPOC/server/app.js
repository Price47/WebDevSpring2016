module.exports = function(app, db, mongoose){

    var userModel = require("./models/user.model.server.js")(db,mongoose);
    var userService = require("./services/user.service.server.js")(app,userModel);

    var commentModel = require("./models/comment.model.server.js")(db,mongoose);
    var commentService = require("./services/comment.service.server.js")(app,commentModel);
};
