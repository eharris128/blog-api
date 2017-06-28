//Required packages
'use strict';

const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./model');
const blogPostRouter = require('./blogPostRouter');

const app = express();

app.use(morgan('common'));

//Runs the server
app.use('/blog-posts', blogPostRouter);

//listen
app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});