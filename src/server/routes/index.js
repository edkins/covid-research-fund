var express = require('express');
var router = express.Router();

const projects_routes = require('./projects');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/projects', projects_routes);

module.exports = router;
