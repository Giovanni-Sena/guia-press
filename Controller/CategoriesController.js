const express = require('express');
const router = express.Router();

// Routes
router.get("/categories",(req,res) =>{
    res.send("Teste de rota.");
});

module.exports= router;