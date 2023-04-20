const express = require('express');
const router = express.Router();
const Category = require("../model/Category");

// Routes
router.get("/articles",(req,res) =>{
    res.send("Teste de rota");
})

router.get("/admin/articles/new",(req,res) =>{
    res.render("admin/articles/new");
})

module.exports = router;