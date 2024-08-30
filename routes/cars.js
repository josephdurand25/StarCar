var express = require('express');
var router = express.Router();

/* GET Cars listing. */
router.get('/', function(req, res, next) {
  const title = 'Liste véhicules';
  res.render('dashboard/vehicules/affichage', { title });
});

router.get('/new', function(req, res, next) {
  const title = 'Nouveau véhicule';
  res.render('dashboard/vehicules/ajouter', { title });
});

module.exports = router;