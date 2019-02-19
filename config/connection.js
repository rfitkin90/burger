var mysql = require('mysql');

// set up mysql connection(localhost)
var config = {
   host: "localhost",
   port: 3306,
   user: "root",
   password: "root",
   database: "burgers_db"
};

// heroku server
if (process.env.NODE_ENV == 'production') {
   config = {
      host: "us-cdbr-iron-east-03.cleardb.net",
      port: 3306,
      user: "bd9d0a4e3adbd2",
      password: "474c72a2",
      database: "heroku_643e336200a45f0"
   }
}

console.log(process.env.NODE_ENV);
console.log(config);

var connection = mysql.createConnection(config);

connection.connect(function (err) {
   if (err) throw err;
   console.log(`connected as id: ${connection.threadId}`);
});

// export connection for orm.js to use
module.exports = connection;

// mysql://bd9d0a4e3adbd2:474c72a2@us-cdbr-iron-east-03.cleardb.net/heroku_643e336200a45f0?reconnect=true