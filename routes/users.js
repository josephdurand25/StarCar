var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const title = 'users - list';
  res.render('dashboard/users/affichage', { title });
});

router.get('/new', function(req, res, next) {
  const title = 'users - ajout';
  res.render('dashboard/users/ajouter', { title });
});

module.exports = router;