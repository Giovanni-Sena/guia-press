const { Datatypes } = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categories',{
    title:{
        type: Datatypes.STRING,
        allowNull: false
    },slug: {
        type: Datatypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    createdAt: 'create',
    updatedAt: false
})

module.exports = Category;