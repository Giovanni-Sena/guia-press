const { DataTypes } = require("sequelize");
const connection = require("../database/database");
const Category = require("./Category");

const Article = connection.define('articles',{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
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

Category.hasMany(Article); // 1<->N
Article.belongsTo(Category); // 1<->1

//Article.sync({force: true});

module.exports = Article;