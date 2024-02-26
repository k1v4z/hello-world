const { sequelize } = require("../config/Sequelize");
const { DataTypes } = require('sequelize');

//define model
const User = sequelize.define('Users', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
})

module.exports = User;