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
todoRouter.post('/', (req, res) => {
    const task = req.body;
    const sqlText = `INSERT INTO "tasklist" ("taskName", "taskDesc")
                     VALUES ($1, $2)`;
    pool.query(sqlText, [task.taskName, task.taskDesc])
        .then((result) => {
            console.log(`Added a task to the database`, task);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making databse query ${sqlText}`, error);
            res.sendStatus(500);
        })
})
// PUT

// DELETE
todoRouter.delete('/deleteTask/:id', (req, res) => {
    console.log(`In DELETE request by ID /todo`);
    let itemId = req.params.id;
    let sqlText = `DELETE FROM tasklist WHERE "id" = $1;`;
    pool.query(sqlText, [itemId])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in DELETE ${error}`);
        res.sendStatus(500);
    });
});

module.exports = todoRouter;
