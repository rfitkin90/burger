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
  // console.log(res);
   console.log(req.body);
   burger.insertOne(req.body.burgerName, function (data) {
      console.log(data);
      res.json({ id: data.insertId });
   });
});

router.put('/api/burgers/:id', function (req, res) {
   res.send('user ' + req.params.id);
 });
 

// devour a burger
// router.put('api/burgers/:id', function (req, res) {
//    console.log(req.params.id);
//    burger.updateOne(req.body.id, function (data) {
//       res.status(200).end();
//    });
// });

// send all burgers to index file
router.get('/', function (req, res) {
   burger.selectAll(function (data) {
      res.render('index', { burgers: data });
   });
});


// export routes to the server
module.exports = router;