const helloWorld = (req, res) =>{
    res.send('Hello World!');
}

const viewEngine = (req, res) =>{
    res.render('sample.ejs');
}

module.exports = {
    helloWorld, viewEngine //export object
}