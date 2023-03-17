const express = require('express');
const todoRouter = express.Router();
const pool = require('../modules/pool.js');

// GET
todoRouter.get('/', (req, res) => {
    console.log('GET request made for tasklist');
    let queryText = 'SELECT * FROM "tasklist";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in GET ${error}`);
        alert('Something went wrong!');
        res.sendStatus(500);
    });
});

// POST

// PUT

// DELETE

module.exports = todoRouter;
