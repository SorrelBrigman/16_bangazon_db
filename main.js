'use strict'

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banagzon.sqlite');

//error handling function
const errorHandler = (err) => {
  if (err) {
    console.log("Error: ", err.toString());
  }
};

//create customers table
db.run('CREATE TABLE IF NOT EXISTS customers(customerid INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, address TEXT, city TEXT, postalcode INT, phonenumber BLOB)', (err)=>{
  errorHandler(err);
});
//create payment_options table
db.run('CREATE TABLE IF NOT EXISTS payment_options(paymentid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, accountnumber BLOB)', (err)=>{
  errorHandler(err);
});
//create orders table
db.run('CREATE TABLE IF NOT EXISTS orders(orderid INTEGER PRIMARY KEY AUTOINCREMENT, customerid INT, paymentid INT, paidinfull INT, date TEXT, FOREIGN KEY (customerid) REFERENCES customers(customerid), FOREIGN KEY (paymentid) REFERENCES payment_options(paymentid))', (err)=>{
  errorHandler(err);
});
//create products table
db.run('CREATE TABLE IF NOT EXISTS products(productid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price NUMERIC(6,2), description BLOB)', (err)=>{
  errorHandler(err);
});
//create order_line_items table
db.run('CREATE TABLE IF NOT EXISTS order_line_items(lineitemid INTEGER PRIMARY KEY AUTOINCREMENT, orderid INT, productid INT, quanity INT, FOREIGN KEY (orderid) REFERENCES orders(orderid), FOREIGN KEY (productid) REFERENCES products(productid))', (err)=>{
  errorHandler(err);
});
//create product_reviews table
db.run('CREATE TABLE IF NOT EXISTS product_reviews(reviewid INTEGER PRIMARY KEY AUTOINCREMENT, productid INT, customerid INT, rating INT, reviewtext BLOB, FOREIGN KEY (productid) REFERENCES products(productid), FOREIGN KEY (customerid) REFERENCES customers(customerid))', (err)=>{
  errorHandler(err);
});
