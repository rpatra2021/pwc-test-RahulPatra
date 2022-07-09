const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email : DataTypes.TEXT
}, {timestamps: false});

module.exports = User;
