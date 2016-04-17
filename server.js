var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(__dirname + '/public'));

var users = [
    {
        "firstName": "Alice", "lastName": "Wonderland",
        "username": "alice", "password": "alice", "roles": ["student"]
    },
    {
         "firstName": "Bob", "lastName": "Hope",
        "username": "bob", "password": "bob", "roles": ["admin"]
    },
    {
        "firstName": "Charlie", "lastName": "Brown",
        "username": "charlie", "password": "charlie", "roles": ["faculty"]
    },
    {
        "firstName": "Dan", "lastName": "Craig",
        "username": "dan", "password": "dan", "roles": ["faculty", "admin"]
    },
    {
        "firstName": "Edward", "lastName": "Norton",
        "username": "ed", "password": "ed", "roles": ["student"]
    }
];

var forms = [
    {"_id": "000", "title": "Contacts", "userId": 123,
        "fields": [
            {"_id": "111", "label": "First Name", "type": "TEXT", "placeholder": "First Name"},
            {"_id": "222", "label": "Last Name", "type": "TEXT", "placeholder": "Last Name"},
            {"_id": "333", "label": "Address", "type": "TEXT", "placeholder": "Address"},
            {"_id": "444", "label": "State", "type": "OPTIONS", "options": [
                {"label": "Massachussetts", "value": "MA"},
                {"label": "New Hampshire", "value": "NH"}
            ]},
            {"_id": "555", "label": "ZIP", "type": "TEXT", "placeholder": "ZIP"},
            {"_id": "666", "label": "Email", "type": "EMAIL", "placeholder": "Email"}
        ]
    },
    {"_id": "010", "title": "ToDo", "userId": 234,
        "fields": [
            {"_id": "777", "label": "Title", "type": "TEXT", "placeholder": "Title"},
            {"_id": "888", "label": "Description", "type": "TEXTAREA", "placeholder": "Title"},
            {"_id": "999", "label": "Due Date", "type": "DATE"},
        ]
    }
];

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

app.post("/rest/user", function(req,res){
    var user = req.body;
    users.push(user);
    res.send(users);
});

app.put("/rest/user/:id",function(req,res){
    var user = req.body;
    var index = req.params["id"];

    users[index].username = user.username;
    users[index].password = user.password;
    users[index].roles = user.roles;

    res.send(users)
});


app.get("/rest/form",function(req,res){
    res.send(forms);
});

app.get("/rest/form/:id",function(req,res){
    var index = req.params["id"];
    res.send(forms[index]);
});

app.post("/rest/form",function(req,res){
    var form = req.body;
    forms.push(form);
    res.send(forms);
});

app.put("/rest/form/:id",function(req,res){
    var form = req.body;
    var index = req.params["id"];

    forms[index].title = form.title;

    res.send(forms);
});

app.delete("/rest/form/:id",function(req,res){
    var index = req.params["id"];
    forms.splice(index,1);
    res.send(forms)
});



var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port,ipaddress);