(function () {
  'use strict';
  
  var Contact = require('../lib/contact'),
      Recaptcha = require('recaptcha').Recaptcha,
      keys = require('../data/recaptcha.json');
  
  exports.blogEntry = function (req, res) {
    res.render('partials/blogEntry'); 
  };
  
  exports.contact = function (req, res) {
    var PUBLIC_KEY = process.env.RECAPTCHA_PUBLIC_KEY || keys.publickey,
        SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || keys.secretkey,
        recaptcha = new Recaptcha(PUBLIC_KEY, SECRET_KEY);
    
    res.render('partials/contact', {
      recaptcha_form: recaptcha.toHTML()
    });
  };

  exports.loadPartial = function (req, res) {
    res.render('partials/' + req.params.section);
  };

  exports.loadPartialItem = function (req, res) {
    res.render('partials/' + req.params.section + '/' + req.params.item);
  };

  exports.index = function (req, res) {
    res.render('layout');
  };
}());