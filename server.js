// const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
dotenv.config({ path: './config.env' });
const app = require('./app');
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
// const path = require('path');
// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB, {  // these are some option to deal with deprecation warning
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(con => { // it gives us a promise which we have to take care using then method
    // console.log(con.connection);
    console.log("DB connection established");
  });

  app.use(require("express-session")({
    secret:"Any normal Word",//decode or encode session
        resave: false,          
        saveUninitialized:false    
    }));

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log("server started");
}) 