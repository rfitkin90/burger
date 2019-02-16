var connection = require('./connection.js');

// create orm object to make mysql queries
var orm = {
   // create a burger
   insertOne: function (burgerName, cb) {
      var queryString = `
         INSERT INTO burgers (burger_name, devoured)
         VALUES (${burgerName}, false)
      `;
      connection.query(queryString, function (err, result) {
         if (err) throw err;
         cb(result);
      });
   },
   // get all the burgers
   selectAll: function (cb) {
      var queryString = `
         SELECT * FROM burgers
      `;
      connection.query(queryString, function (err, result) {
         if (err) throw err;
         cb(result);
      });
   },
   // devour a burger
   updateOne: function (burgerName, cb) {
      var queryString = `
         UPDATE burgers
         SET devoured = false
         WHERE burger_name = ${burgerName}
      `;
      connection.query(queryString, function (err, result) {
         if (err) throw err;
         cb(result);
      });
   }
};

// export orm for burger.js to use
module.exports = orm;