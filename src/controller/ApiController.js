const { getAllUser, getUserById, destroyUser, addUser } = require("../service/CRUDService");

const apigetUser = async (req, res) => {
    const allUser = await getAllUser();
    return res.status(200).json(allUser);
}

const apigetUserById = async (req, res) => {
    const id = req.params.id;
    const user = await getUserById(id);

    return user.id === undefined ? res.status(404).json({
        message: 'User do not exist'
    }) : res.status(200).json({
        user: user
    });
}

const apiDeleteUserById = async (req, res) => {
    const id = req.params.id;
    const user = await getUserById(id); //connect db check user have exist 

    if (user.id === undefined)
        return res.status(404).json({
            message: 'User do not exist'
        })

    await destroyUser(id);

    return res.status(200).json({
        message: 'delete user succeed'
    })
}

const apiCreateUser = async (req, res) => {
    const information = req.query;
    await addUser(information);
    return res.status(200).json({
        message: 'add user succeed'
    })
}

module.exports = {
    apigetUser, apigetUserById, apiDeleteUserById, apiCreateUser
}