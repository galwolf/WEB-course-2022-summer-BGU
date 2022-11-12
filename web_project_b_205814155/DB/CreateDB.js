var sql = require('./db')
var query = "";

const createTables = (req, res) => {
    query = "CREATE TABLE USERS (first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL, username VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL, PRIMARY KEY (username))";
    sql.query(query, (err, mysqlres) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({ message: "error in creating users table" });
            return;
        }
        console.log("created users table");
        query = "CREATE TABLE STATIONS (name VARCHAR(50) NOT NULL, haveElectricChargers VARCHAR(50) NOT NULL, numCharges VARCHAR(50) NOT NULL, PRIMARY KEY (name))";
        sql.query(query, (err, mysqlres) => {
            if (err) {
                console.log("error ", err);
                res.status(400).send({ message: "error in creating stations table" });
                return;
            }
            console.log("created stations table");
            return;
        })
        res.send("tables created");
        return;
    })
};

const insertData = (req, res) => {
    query = "INSERT INTO USERS (first_name, last_name, email, username, password) VALUES ?";
    var values = [
        ['gal', 'wolf', 'wolf10@gmail.com', 'galwolf', '1994519'],
        ['aviv', 'ziso', 'avivz@gmail.com', 'avivziso', '1994419'],
        ['liad', 'israel', 'liads@gmail.com', 'liadisrael', '1994319'],
        ['oz', 'gilon', 'giloz@gmail.com', 'ozgilon', '1994511'],
        ['efrat', 'eini', 'efrati@gmail.com', 'efrateini', '1994522'],
        ['noa', 'cohen', 'noale@gmail.com', 'noacohen', '1967819'],
        ['yael', 'dosli', 'yaeld@gmail.com', 'yaeldos', '5591478']
    ];
    sql.query(query, [values], (err, mysqlres) => {
        if (err) {
            res.status(400).send({ message: "error on creating user" + err });
            console.log("error on creating users" + err);
            return;
        }
        console.log("users inserted");
        query = "INSERT INTO STATIONS (name, distance, charges) VALUES ?";
        values = [
            ['amikam', 'yes', '3'],
            ['sonel', 'yes', '6'],
            ['delek', 'yes', '2'],
            ['web', 'no', '0'],
            ['ten', 'yes', '6'],
            ['yahud', 'yes', '3'],
            ['shoval', 'no', '0'],
            ['cheapdelek', 'yes', '4'],
            ['natanzon', 'no', '0'],
            ['teldelek', 'yes', '7'],
            ['avivim', 'yes', '6'],
            ['kiraytim', 'no', '0'],
            ['lola', 'no', '0'],
            ['efraim', 'no', '0'],
            ['todsa', 'yes', '6'],
            ['hashik', 'yes', '2'],
            ['vovalend', 'yes', '4']
        ];
        sql.query(query, [values], (err, mysqlres) => {
            if (err) {
                res.status(400).send({ message: "error on creating user" + err });
                console.log("error on creating stations" + err);
                return;
            }
            console.log("stations inserted");
            return;
        });
        res.send("tables inserted");
        return;
    });
};

const showUsers = (req, res) => {
    query = "SELECT * FROM USERS";
    sql.query(query, (err, mysqlres) => {
        if (err) {
            console.log("error in showing users ", err);
            res.send("error in showing users ");
            return;
        }
        console.log("showing users");
        res.send(mysqlres);
        return;
    })
};

const showStations = (req, res) => {
    query = "SELECT * FROM STATIONS";
    sql.query(query, (err, mysqlres) => {
        if (err) {
            console.log("error in showing stations ", err);
            res.send("error in showing stations ");
            return;
        }
        console.log("showing stations");
        res.send(mysqlres);
        return;
    })
};


const dropTables = (req, res) => {
    query = "DROP TABLE STATIONS";
    sql.query(query, (err, mysqlres) => {
        if (err) {
            console.log("error in droping stations table ", err);
            res.status(400).send({ message: "error on dropping stations table" + err });
            return;
        }
        console.log("stations table drpped");
        query = "DROP TABLE USERS";
        sql.query(query, (err, mysqlres) => {
            if (err) {
                console.log("error in droping users table ", err);
                res.status(400).send({ message: "error on dropping users table" + err });
                return;
            }
            console.log("users table drpped");
            res.send("all tables drpped");
            return;
        })
        return;
    })
}

module.exports = { createTables, insertData, showUsers, showStations, dropTables };