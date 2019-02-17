var connection = require('./connection.js');

// create orm object to make mysql queries
var orm = {
   // create a burger
   insertOne: function (burgerName, cb) {
      console.log(burgerName);
      var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
      connection.query(queryString, burgerName, function (err, result) {
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
   updateOne: function (id, cb) {
      var queryString = `
         UPDATE burgers
         SET devoured = true
         WHERE id = ?
      `;
      connection.query(queryString, id, function (err, result) {
         if (err) throw err;
         cb(result);
      });
   },
   delete: function (id, cb) {
      var queryString = `
      DELETE FROM burgers
      WHERE id = ?
      `;
      connection.query(queryString, id, function (err, result) {
         if (err) throw err;
         cb(result);
      });
   }
};

// export orm for burger.js to use
module.exports = orm;