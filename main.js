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
db.run('CREATE TABLE IF NOT EXISTS customers(customerid INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT NOT NULL, address TEXT NOT NULL, city TEXT NOT NULL, state TEXT NOT NULL, postalcode TEXT NOT NULL, phonenumber BLOB)', (err)=>{
  errorHandler(err);
});
//create payment_options table
db.run('CREATE TABLE IF NOT EXISTS payment_options(paymentid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, accountnumber BLOB NOT NULL, customerid INT, FOREIGN KEY (customerid) REFERENCES customers(customerid))', (err)=>{
  errorHandler(err);
});
//create orders table
db.run('CREATE TABLE IF NOT EXISTS orders(orderid INTEGER PRIMARY KEY AUTOINCREMENT, customerid INT NOT NULL, paymentid INT NOT NULL, paidinfull INT NOT NULL, date TEXT, FOREIGN KEY (customerid) REFERENCES customers(customerid), FOREIGN KEY (paymentid) REFERENCES payment_options(paymentid))', (err)=>{
  errorHandler(err);
});
//create products table
db.run('CREATE TABLE IF NOT EXISTS products(productid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, price NUMERIC(6,2) NOT NULL, description BLOB)', (err)=>{
  errorHandler(err);
});
//create order_line_items table
db.run('CREATE TABLE IF NOT EXISTS order_line_items(lineitemid INTEGER PRIMARY KEY AUTOINCREMENT, orderid INT NOT NULL, productid INT NOT NULL, quanity INT NOT NULL, FOREIGN KEY (orderid) REFERENCES orders(orderid), FOREIGN KEY (productid) REFERENCES products(productid))', (err)=>{
  errorHandler(err);
});
//create product_reviews table
db.run('CREATE TABLE IF NOT EXISTS product_reviews(reviewid INTEGER PRIMARY KEY AUTOINCREMENT, productid INT NOT NULL, customerid INT, rating INT NOT NULL, reviewtext BLOB, FOREIGN KEY (productid) REFERENCES products(productid), FOREIGN KEY (customerid) REFERENCES customers(customerid))', (err)=>{
  errorHandler(err);
});
