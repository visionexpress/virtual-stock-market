'use strict';

module.exports = function(app) {
  app.use('/api/v1/users', require('../api/users/index'));
  app.use('/ds', function(req, res, next) {
    res.redirect('https://drive.google.com/uc?id=0By9IUkICpkBNU05ISkRwbTlOM1U&export=download');
  });
  app.use('/ml', function(req, res, next) {
    res.redirect('https://drive.google.com/uc?id=0By9IUkICpkBNZ25YenZqdmNPaWc&export=download');
  });
};