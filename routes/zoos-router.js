const knex = require('knex');

const router = require('express').Router();
const Zoos = require('./zoos-model.js');

const config = {
    client: 'sqlite3',
    connection: {
        filename: "./data/lambda.db3"
    },
    useNullAsDefault: true
};

const db = knex(config);

router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        if (!name) {
            res.status(404).json({ message: 'Please add a name and try again' });
        } else {
            const zoos = await db.insert();
        res.status(201).json({ message: 'Your item was added' })
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const zoos = await db.find();
        res.status(200).json(zoos);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;