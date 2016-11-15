var express = require('express');
var router = express.Router();
var autocompleteService = require('../services/autocomplete');

/* GET users listing. */
router.get('/autocomplete/(:_term)', autocompleteService);

module.exports = router;
