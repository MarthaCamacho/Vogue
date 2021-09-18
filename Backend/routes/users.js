const {Router} = require('express');
const router = Router();

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
    
    res.json({message: 'User saved'});
});

router.put('/:id', async (req, res) => {
    res.json({status: 'User updated'});
});

//borrar datos
router.delete('/:id', async (req, res) => {
    res.json({message: 'User deleted'});
});

module.exports = router;