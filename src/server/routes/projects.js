const environment = process.env.NODE_ENV || 'development';
console.log(`Environment is ${environment}`);
const express = require('express');
const router = express.Router();

const knex_config = require('../knexfile');
const database = require('knex')(knex_config[environment]);

router.get('/', function(req, res, next) {
    database.select('project_id', 'project_name').from('projects')
        .then(function(rows) {
            res.send(JSON.stringify(rows));  
        });
});

module.exports = router;
