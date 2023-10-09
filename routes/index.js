var express = require('express');
const { Index } = require('../controller');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', Index);


module.exports = router;
