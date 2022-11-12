
const express = require('express');
const path = require('path');
const CreateDB = require('./DB/CreateDB');
const CRUD = require('./DB/CRUD');
const port = 8080;


const app = express();
app.set('views', path.join(__dirname, 'viewsPUG'));
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


app.get('/createDB', CreateDB.createTables);
app.get('/insertData', CreateDB.insertData);
app.get('/showUsers', CreateDB.showUsers);
app.get('/showStations', CreateDB.showStations);
app.get('/dropTables', CreateDB.dropTables);


app.get('/', function (req, res) { res.render("SignIn") });
app.get('/Register', function (req, res) { res.render('Register') });
app.get('/HomePage', CRUD.HomePageUpload);
app.get('/userDetails', CRUD.updateUserUpload);
app.post('/checkLogIn', CRUD.checkLogIn);
app.post('/newUser', CRUD.createNewUser);
app.post('/updateUser', CRUD.updateUser);
app.post('/deleteUser', CRUD.deleteUser);


app.listen(port, function () {
    console.log("server is on port: " + port)
});