// Imports
const express = require ("express");
const { append } = require("express/lib/response");
const aplication = express();
const categoriesController = require("./Controller/CategoriesController");
// Data Base
const connection = require("./database/database");
// View engine
aplication.set('view engine','ejs');
aplication.use(express.urlencoded({extended: false}));
aplication.use(express.json());
// Static 
aplication.use(express.static('public'));
// Routes
aplication.get("/",(req,res) =>{
    res.render("index");
});
aplication.use("/",categoriesController);
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