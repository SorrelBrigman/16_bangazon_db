'use strict'

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banagzon.sqlite');


//create customers table
db.run('CREATE TABLE IF NOT EXISTS customers(customerid INT, firstname TEXT, lastname TEXT, address TEXT, city TEXT, postalcode INT, phonenumber INT)');
//create orders table
db.run('CRAETE TABLE IF NOT EXISTS orders(orderid INT, customerid INT, paymentid INT, paidinfull INT, date TEXT)');
