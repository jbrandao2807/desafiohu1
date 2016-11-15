var express = require('express');
var router = express.Router();
var servicesController = require('../controllers/servicesController');

/* GET users listing. */
router.get('/autocomplete/(:_term)', servicesController.autocomplete);
router.post('/availability', servicesController.availability);

module.exports = router;
