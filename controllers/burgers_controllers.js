var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

// create routes

// check all burgers in json
router.get('/api/burgers', function (req, res) {
   console.log(res);
   burger.selectAll(function (data) {
      res.json({ burgers: data });
   });
});

// add a burger
router.post('/api/burgers', function (req, res) {
   console.log(res);
   console.log(req);
   burger.insertOne(req.body.burgerName, function (data) {
      console.log(data);
      res.json({ id: data.insertId });
   });
});
/*
QUESTIONS
How do I console log here to see what the req, res, and data are?
Where is this posting to? Isn't /api/burgers some arbitrary route name I invented?
*/


// devour a burger
router.put('api/burgers/:name', function (req, res) {
   burger.updateOne(req.body.burgerName, function (data) {
      res.status(200).end();
   });
});

// send all burgers to index file
router.get('/', function (req, res) {
   burger.selectAll(function (data) {
      res.render('index', { burgers: data });
   });
});


// export routes to the server
module.exports = router;