// ========================================== JawsDB Connection ==========================================

var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "burgers_db"
   });
};

connection.connect();
module.exports = connection;




// ========================================== ClearDB Connection ==========================================

// var mysql = require('mysql');

// // set up mysql connection(localhost)
// var config = {
//    host: "localhost",
//    port: 3306,
//    user: "root",
//    password: "root",
//    database: "burgers_db"
// };

// // heroku server
// if (process.env.NODE_ENV == 'production') {
//    config = {
//       host: "us-cdbr-iron-east-03.cleardb.net",
//       port: 3306,
//       user: "bd9d0a4e3adbd2",
//       password: "474c72a2",
//       database: "heroku_643e336200a45f0"
//    }
// }

// console.log(process.env.NODE_ENV);
// console.log(config);

// // var connection = mysql.createConnection(config);

// var connection;

// function handleDisconnect() {
//    connection = mysql.createConnection(config); // Recreate the connection, since
//    // the old one cannot be reused.

//    connection.connect(function (err) {              // The server is either down
//       if (err) {                                     // or restarting (takes a while sometimes).
//          console.log('error when connecting to db:', err);
//          setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//       }                                     // to avoid a hot loop, and to allow our node script to
//    });                                     // process asynchronous requests in the meantime.
//    // If you're also serving http, display a 503 error.
//    connection.on('error', function (err) {
//       console.log('db error', err);
//       if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//          handleDisconnect();                         // lost due to either server restart, or a
//       } else {                                      // connnection idle timeout (the wait_timeout
//          throw err;                                  // server variable configures this)
//       }
//    });
// }

// handleDisconnect();

// // connection.connect(function (err) {
// //    if (err) throw err;
// //    console.log(`connected as id: ${connection.threadId}`);
// // });

// // export connection for orm.js to use
// module.exports = connection;

// // mysql://bd9d0a4e3adbd2:474c72a2@us-cdbr-iron-east-03.cleardb.net/heroku_643e336200a45f0?reconnect=true