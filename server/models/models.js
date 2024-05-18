const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const CallRequest = sequelize.define(
    'call_request',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, allowNull: false, autoIncrement: true},
        phone_number: {type: DataTypes.STRING, unique: false, allowNull: false},
        name: {type: DataTypes.STRING, unique: false, allowNull: false},
        code: {type: DataTypes.STRING, unique: true, allowNull: false}
    }
);

module.exports = {
    CallRequest
}