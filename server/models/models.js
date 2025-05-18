const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const CallRequest = sequelize.define(
    'call_request',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, allowNull: false, autoIncrement: true},
        phone_number: {type: DataTypes.STRING, unique: false, allowNull: false},
        name: {type: DataTypes.STRING, unique: false, allowNull: false},
        code: {type: DataTypes.STRING, unique: true, allowNull: false},
        time_start: {type: DataTypes.STRING, unique: false, allowNull: false},
        time_end: {type: DataTypes.STRING, unique: false, allowNull: false},
        timezone: {type: DataTypes.STRING, unique: false, allowNull: false}
    }
);

const Record = sequelize.define(
    'record',
    {
        id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, allowNull: false, autoIncrement: true },
        device_id: { type: DataTypes.STRING, unique: true, allowNull: false },
        seconds: { type: DataTypes.INTEGER, allowNull: true },
    }
)

module.exports = {
    CallRequest, Record
}