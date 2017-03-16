'use strict'

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banagzon.sqlite');

//error handling function
const errorHandler = (err) => {
  if (err) {
    console.log("Error: ", err.toString());
  }
};


// //populate customers table
const populateCustomers= () => {
  const {customers} = require('./customers.json');

  customers.forEach(each => {
    db.run(`INSERT INTO customers VALUES(null,
      "${each.firstname}",
      "${each.lastname}",
      "${each.address}",
      "${each.city}",
      "${each.state}",
      "${each.postalcode}",
      "${each.phonenumber}")`, (err)=>{
        errorHandler(err);
      })
  })
}
populateCustomers();

// //populate payment_options table
const populatePayment= () => {
  const {payment_options} = require('./payment_options.json');
  payment_options.forEach(each => {
    db.run(`INSERT INTO payment_options VALUES(null,
      "${each.name}",
      "${each.accountnumber}",
      ${each.customerid})`, (err)=>{
        errorHandler(err);
      })
  })
}
populatePayment();

// //populate orders table
const populateOrders= () => {
  const {orders} = require('./orders.json');
  orders.forEach(each => {
    db.run(`INSERT INTO orders VALUES(null,
      ${each.customerid},
      ${each.paymentid},
      ${each.paidinfull},
      "${each.date}")`, (err)=>{
        errorHandler(err);
      })
  })
}
populateOrders();


// //populate products table
const populateProducts= () => {
  const {products} = require('./products.json');
  products.forEach(each => {
    db.run(`INSERT INTO products VALUES(null,
      "${each.name}",
      ${each.price},
      "${each.description}")`, (err)=>{
        errorHandler(err);
      })
  })
}
populateProducts();


// //populate order_line_items table
const populateOrderLineItems= () => {
  const {order_line_items} = require('./order_line_items.json');
  order_line_items.forEach(each => {
    db.run(`INSERT INTO order_line_items VALUES(null,
      ${each.orderid},
      ${each.productid},
      ${each.quanity})`, (err)=>{
        errorHandler(err);
      })
  })
}
populateOrderLineItems();


// //populate product_reviews table
const populateProductReviews= () => {
  const {product_reviews} = require('./product_reviews.json');
  product_reviews.forEach(each => {
    db.run(`INSERT INTO product_reviews VALUES(null,
      ${each.productid},
      ${each.customerid},
      ${each.rating},
      "${each.reviewtext}")`, (err)=>{
        errorHandler(err);
      })
  })
}

populateProductReviews();
