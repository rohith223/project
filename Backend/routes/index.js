var express = require('express');
var router = express.Router();
var user=require('../models/controllers/data')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/',user.addData)

module.exports = router;
