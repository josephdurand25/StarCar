var express = require('express');
var router = express.Router();

/* GET Driver listing. */
router.get('/', function(req, res, next) {
  const title = 'Liste chauffeurs';
  res.render('dashboard/chauffeurs/affichage', { title });
});

router.get('/new', function(req, res, next) {
  const title = 'Nouveau chauffeur';
  res.render('dashboard/chauffeurs/ajouter', { title });
});

module.exports = router;