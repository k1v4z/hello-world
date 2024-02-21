const connection =  require('../config/db')

const getAllUser = async () =>{
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const addUser = async (req) => {
    let {name, email, city} = req.body;

    const [results, fields] = await connection.query(
    `INSERT INTO 
    Users (email, name, city)
    VALUES (?,?,?);`,
    [email, name, city]);
    
    return results;
}
module.exports = {
    getAllUser, addUser
}