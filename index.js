const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const authController = require('./controllers/auth');
const regController = require('./controllers/register');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const connection = require('./config');

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});

app.post('/api/register', regController.register);
app.post('/api/auth', authController.authenticate);

app.post('/controllers/register', regController.register);
app.post('/controllers/auth', authController.authenticate);


app.listen(4000, () => console.log('Server started!'));
