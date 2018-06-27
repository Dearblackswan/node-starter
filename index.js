'use strict'

const express = require('express')
const app = express()
const _  = require('lodash')

const bodyParser = require('body-parser');
var methodOverride = require('method-override');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());

app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.post('/notes', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
});
