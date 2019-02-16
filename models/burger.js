var orm = require('../config/orm.js');

// create burger object to pass parameters to mysql queries in orm.js
var burger = {
   // create burger
   insertOne: function (burgerName, cb) {
      orm.insertOne(burgerName, function (res) {
         cb(res);
      });
   },
   // get all burgers
   selectAll: function (cb) {
      orm.selectAll(function (res) {
         cb(res);
      });
   },
   // devour a burger
   updateOne: function (burgerName, cb) {
      orm.updateOne(burgerName, function (res) {
         cb(res);
      });
   }
};

// export burger object to be used by routers
module.exports = burger;