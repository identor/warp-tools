// References
var express = require('express');
var path = require('path');
var package = require('../../../package.json');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { version: package.version.split('.').join('-') });
});

module.exports = router;