var express = require('express');
var router = express.Router();
var autocompleteService = require('../services/autocomplete');

/* GET users listing. */
router.get('/autocomplete', autocompleteService);

module.exports = router;
