const mysql = require('mysql');

// Create connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'SQL123456!',
    database : 'RateMyLandlord',
    multipleStatements: true
});

// Connect to the MySQL Database
connection.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

// comment
module.exports = connection;