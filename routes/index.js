var express = require('express');
var model = require('../app/model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    model.query("select now() as date from dual", function(err, rows) {
        // console.log(rows);
        res.render('index', { title: 'Express', db_time: rows[0].date});
    });
});

module.exports = router;
