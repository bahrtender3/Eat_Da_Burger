// Set up MySQL connection.
var mysql = require("mysql");
// var config = require("../config.json");
var connection;

// connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: null,
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: null,
    database: "burgers_db"
  });
}

// connection = mysql.createConnection({
//   port: 3306,
//   host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "jlaul39i89o2frs5",
//   password: "c7hjuws6rfcg389f",
//   database: "burgers_db"
// });




// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;
