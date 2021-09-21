const express = require('express');
const router = express.Router();

const Article = require('../models/articles');//encapsulando modelo de datos de la BD

//muestra todos los datos
router.get('/', async (req,res) => {
    const articles = await Article.find();
    res.json(articles);
});

router.get('/:id', async (req,res) => {
    const articles = await Article.find();
    res.json(articles);
});

//recepcion de datos
router.post('/', async (req, res) => {
    
    res.json({message: 'Article saved'});
});

router.put('/:id', async (req, res) => {
    res.json({message: 'Article updated'});
});

//borrar datos
router.delete('/:id', async (req, res) => {
    await Article.findByIdAndRemove(req.params.id);
    res.json({message: 'Article deleted'});
});

module.exports = router;