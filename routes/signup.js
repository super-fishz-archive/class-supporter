var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('signup');
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    console.log(req.body.id);
    res.render('signup_result', req.body);
});

module.exports = router;
