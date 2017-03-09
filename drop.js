'use strict'

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banagzon.sqlite');

//error handling function
const errorHandler = (err) => {
  if (err) {
    console.log("Error: ", err.toString());
  }
};

//capture "which table" as argument from terminal

let args = process.argv.slice(2);
//convert that argument to a string
let whichTable = args.toString();

//drop table
db.run(`DROP TABLE ${whichTable}`, (err) =>{
  errorHandler(err);
});
