const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categories',{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    createdAt: 'create',
    updatedAt: false
})

//Category.sync({force:true});

module.exports = Category;