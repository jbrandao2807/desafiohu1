var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hotel Urbano | Hu1 Desafio' });
});

router.post('/search', function(req, res, next) {
  res.render('searchresults', { title: 'Hotel Urbano | Hu1 Desafio' });
});

module.exports = router;
