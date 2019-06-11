const express = require('express');
const helmet = require('helmet');
const logger = require('logger');

const zooRouter = require('../routes/zoos-router.js');

const server = express();

server.use(express.json()),helmet(),logger;

server.use('/api/zoos', zooRouter);

server.get('/', (req, res) => {
    res.send("Hey, is this thing on?")
})

module.exports = server;