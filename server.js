var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var users = [
    {
        "_id": 123, "firstName": "Alice", "lastName": "Wonderland",
        "username": "alice", "password": "alice", "roles": ["student"]
    },
    {
        "_id": 234, "firstName": "Bob", "lastName": "Hope",
        "username": "bob", "password": "bob", "roles": ["admin"]
    },
    {
        "_id": 345, "firstName": "Charlie", "lastName": "Brown",
        "username": "charlie", "password": "charlie", "roles": ["faculty"]
    },
    {
        "_id": 456, "firstName": "Dan", "lastName": "Craig",
        "username": "dan", "password": "dan", "roles": ["faculty", "admin"]
    },
    {
        "_id": 567, "firstName": "Edward", "lastName": "Norton",
        "username": "ed", "password": "ed", "roles": ["student"]
    }
];

app.get('/', function(req, res){
    res.send('hello world');
});



app.get("/rest/user",function(req,res){

    res.send(users);

});

app.get("/rest/user/:id",function(req,res)
{
    var index = req.params["id"];
    res.send(users[index]);

});

app.delete("/rest/user/:id",function(req,res)
{
    var index = req.params["id"];
    users.splice(index,1);
    res.send(users);

});

app.get("/rest/form",function(req,res){

    var forms = [
        {"_id": "000", "title": "Contacts", "userId": 123},
        {"_id": "010", "title": "ToDo",     "userId": 123},
        {"_id": "020", "title": "CDs",      "userId": 234}
    ];

    res.send(forms);
});

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port,ipaddress);