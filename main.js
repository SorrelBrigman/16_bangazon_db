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
db.run('CREATE TABLE IF NOT EXISTS customers(customerid INT, firstname TEXT, lastname TEXT, address TEXT, city TEXT, postalcode INT, phonenumber BLOB)', (err)=>{
  errorHandler(err);
});
//create orders table
db.run('CREATE TABLE IF NOT EXISTS orders(orderid INT, customerid INT, paymentid INT, paidinfull INT, date TEXT)', (err)=>{
  errorHandler(err);
});
//create payment_options table
db.run('CREATE TABLE IF NOT EXISTS payment_options(paymentid INT, name TEXT, accountnumber BLOB)', (err)=>{
  errorHandler(err);
});
//create products table
db.run('CREATE TABLE IF NOT EXISTS products(productid INT, name TEXT, price NUMERIC(6,2), description BLOB)', (err)=>{
  errorHandler(err);
});
//create order_line_items table
db.run('CREATE TABLE IF NOT EXISTS order_line_items(lineitemid INT, orderid INT, productid INT)', (err)=>{
  errorHandler(err);
});
//create product_review table
db.run('CREATE TABLE IF NOT EXISTS product_review(reviewid INT, productid INT, customerid INT, rating INT, reviewtext BLOB)', (err)=>{
  errorHandler(err);
});
