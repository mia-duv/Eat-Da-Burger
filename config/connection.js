// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "imagine3",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(err => {
  if (err) {
      console.log(`Connection Error: ${err.stack}`);
      return;
  }
  console.log(`Connected as: ${connection.threadId}`);
})
// Export connection for our ORM to use.
module.exports = connection;
