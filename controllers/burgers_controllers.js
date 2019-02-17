var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

// create routes

// ------------------- html route(s) --------------------
// index page
router.get('/', function (req, res) {
   burger.selectAll(function (data) {
      res.render('index', { burgers: data });
   });
});

// ------------------- api routes -------------------

// check all burgers in json
router.get('/api/burgers', function (req, res) {
   console.log(res);
   burger.selectAll(function (data) {
      res.json({ burgers: data });
   });
});

// add a burger
router.post('/api/burgers', function (req, res) {
   // console.log(res);
   console.log(req.body);
   console.log(`req.body.burgername: ${req.body.name}`);
   burger.insertOne(req.body.name, function (data) {
      res.json({ burgers: data });
   });
});

// update burger(devour it)
router.put('/api/burgers/:id', function (req, res) {
   burger.updateOne(req.params.id, function (data) {
      res.json({ burgers: data });
   });
});

// delete a burger
router.delete('/api/burgers/:id', function (req, res) {
   burger.delete(req.params.id, function (data) {
      res.json({ burgers: data });
   });
});


// export routes to the server
module.exports = router;