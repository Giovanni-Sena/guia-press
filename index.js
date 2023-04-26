// Imports
const express = require ("express");
const { append } = require("express/lib/response");
const aplication = express();
const categoriesController = require("./controller/CategoriesController");
const articlesController = require("./controller/ArticlesController");
const Aeticle = require("./model/Article");
const Category = require("./model/Category");
// Data Base
const connection = require("./database/database");
const Article = require("./model/Article");
// View engine
aplication.set("view engine","ejs");
aplication.use(express.urlencoded({extended: false}));
aplication.use(express.json());
// Static 
aplication.use(express.static('public'));
// Routes
aplication.get("/",(req,res) =>{
    Article.findAll({
        order:[
            ['id','DESC']
        ]
    }).then(articles =>{
        Category.findAll().then(categories => {
            res.render("index",{articles: articles,categories: categories});
        });
    });
});
aplication.use("/",categoriesController);
aplication.use("/",articlesController);
aplication.get("/:slug",(req,res) =>{
    var slug = req.params.slug;
    Article.findOne({
        where:{
            slug: slug
        }
    }).then(article =>{
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("article",{article: article,categories: categories});
            });
        }else{
            res.redirect("/");
        }
    }).catch(error =>{
        res.redirect("/");
    })
})
aplication.get("/category/:slug",(req,res) =>{
    var slug = req.params.slug;
    Category.findOne({
        where:{
            slug: slug
        },
        include: [{model: Article}]
    }).then( category => {
        if(category != undefined){
            Category.findAll().then(categories =>{
                res.render("index",{articles: category.articles, categories: categories});
            })
        }else{
            res.redirect("/");
        }
    }).catch(error =>{
        res.redirect("/");
    })
})
//Server
aplication.listen(8080, () =>{
    console.log("Servidor em execução!");
});
//Connection DB
connection.authenticate()
.then(() =>{
    console.log("Conexão DB realizada!");
}).catch(() =>{
    console.log("Erro na conexão DB!");
})
