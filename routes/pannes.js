var express = require('express');
var router = express.Router();

/* GET Pannes listing. */
router.get('/', function(req, res, next) {
  const title = 'Liste pannes';
  res.render('dashboard/pannes/affichage', { title });
});

router.get('/new', function(req, res, next) {
  const title = 'Nouvelle panne';
  res.render('dashboard/pannes/ajouter', { title });
});

module.exports = router;