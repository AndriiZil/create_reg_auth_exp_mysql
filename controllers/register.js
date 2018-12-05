const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const connection = require('../config');

module.exports.register = (req, res) => {

  let today = new Date();
  let encryptedString = cryptr.encrypt(req.body.password);
  let users = {
    "name": req.body.name,
    "email": req.body.email,
    "password": encryptedString,
    "created_at": today,
    "updated_at": today
  };

  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {

    if (error) {
      res.json({
        status:false,
        message:'There are some error with query'
      })
    } else {
      res.json({
        status: true,
        data: results,
        message:'User registered sucessfully'
      })
    }
  });

};
