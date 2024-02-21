require('dotenv').config();

const express = require('express');
const configViewEngine = require('./config/ViewEngine');
const webRouter = require('./route/web');
const connection = require('./config/db');
const bodyParser =  require('body-parser');

const app = express();
const port = process.env.PORT;
const localhost = process.env.HOST_NAME;

//config template engine and static file
configViewEngine(app);

connection.query(
  'SELECT * FROM `Users`',
  function (err, results, fields) {
    console.log(">>> results: ", results); // results contains rows returned by server
  }
);

//config req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route
app.use('/',webRouter);
app.listen(port,localhost, () => {
  console.log(`http://${localhost}:${port}`)
})