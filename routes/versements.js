var express = require('express');
var router = express.Router();

/* GET versement listing. */
router.get('/', function(req, res, next) {
  const title = 'Liste versements';
  res.render('dashboard/versements/affichage', { title });
});

router.get('/new', function(req, res, next) {
  const title = 'Nouveau versement';
  res.render('dashboard/versements/ajouter', { title });
});

module.exports = router;