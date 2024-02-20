const express = require('express')
const path =  require('path')
require('dotenv').config();

const app = express()
const port = process.env.PORT;
const localhost = process.env.HOST_NAME;

//config template engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//config static file
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/viewengine', (req, res) => {
  res.render('sample.ejs');
})

app.listen(port,localhost, () => {
  console.log(`http://${localhost}:${port}`)
})