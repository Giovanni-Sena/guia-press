const { Datatypes } = require("sequelize");
const connection = require("../database/database");

const Article = connection.define('articles',{
    title:{
        type: Datatypes.STRING,
        allowNull: false
    },
    body: {
        type: Datatypes.TEXT,
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

module.exports = Article;