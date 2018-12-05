const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'userCreate',
  password: 'admin123456789',
  database: 'create_user_exp_mysql'
});

connection.connect(function(err){
  if(!err) {
    console.log("Database is connected");
  } else {
    console.log("Error while connecting with database");
  }
});

module.exports = connection;
