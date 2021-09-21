const express = require('express');
const router = express.Router();

const Users = require('../models/users');//encapsulando modelo de datos de la BD

//muestra todos los datos
router.get('/', async (req,res) => {
    const users = await Users.find();
    res.json(users);
});

router.get('/:id', async (req,res) => {
    const users = await Users.find();
    res.json(users);
});

//recepcion de datos
router.post('/', async (req, res) => {
    const { name, lastName, email, password } = req.body;
    const newUser = new Users({ name, lastName, email, password });
    await newUser.save();
    res.json({message: 'User saved'});
});

router.put('/:id', async (req, res) => {
    const { name, lastName, email, password } = req.body;
    const newUser = { name, lastName, email, password };
    await Users.findByIdAndUpdate(req.params.id, newUser);
    res.json({message: 'User updated'});
});

//borrar datos
router.delete('/:id', async (req, res) => {
    await Users.findByIdAndRemove(req.params.id);
    res.json({message: 'User deleted'});
});

module.exports = router;