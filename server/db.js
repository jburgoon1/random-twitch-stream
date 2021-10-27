const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///stream_test";
} else {
  DB_URI = "postgresql:///stream";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();
// db.query('SELECT table_schema,table_name FROM stream-schema.sql;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   db.end();
// });

module.exports = db;
