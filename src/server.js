const express = require('express');
const path =  require('path');
const configViewEngine = require('./config/ViewEngine');
const webRouter = require('./route/web');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const localhost = process.env.HOST_NAME;

//config template engine and static file
configViewEngine(app);

//route
app.use('/',webRouter);
app.listen(port,localhost, () => {
  console.log(`http://${localhost}:${port}`)
})