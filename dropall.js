'use strict'

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banagzon.sqlite');

//error handling function
const errorHandler = (err) => {
  if (err) {
    console.log("Error: ", err.toString());
  }
};



const dropAll = () => {
  //delete content from all the tables, then drop them
  db.run(`DELETE FROM product_reviews`)
  .run(`DELETE FROM order_line_items`)
  .run(`DELETE FROM products`)
  .run(`DELETE FROM orders`)
  .run(`DELETE FROM payment_options`)
  .run(`DELETE FROM customers`)
  .run(`DROP TABLE customers`)
  .run(`DROP TABLE payment_options`)
  .run(`DROP TABLE orders`)
  .run(`DROP TABLE products`)
  .run(`DROP TABLE order_line_items`)
  .run(`DROP TABLE product_reviews`),
  (err) => {
    errorHandler(err)
  }
}
 dropAll();
