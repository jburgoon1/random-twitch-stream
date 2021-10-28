const { Client } = require("pg");

let DB_URI;


  DB_URI = process.env.DATABASE_URL||"postgresql:///stream";


let db = new Client({
  connectionString: DB_URI
});

db.connect();


module.exports = db;
