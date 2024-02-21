const helloWorld = (req, res) =>{
    res.send('Hello World!');
}

const viewEngine = (req, res) =>{
    return res.render('sample.ejs');
}

const postAddUser = (req, res) =>{
    res.send('add new user');
    console.log(req.body)
}
module.exports = {
    helloWorld, viewEngine, postAddUser //export object
}