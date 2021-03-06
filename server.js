const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Add MySQL username here,
    user: 'root',
    // Add MySQL password here
    password: 'RAmonkey202017',
    database: 'employeeList_db'
  },
  console.log(`Connected to the employeeList_db database.`)
);


