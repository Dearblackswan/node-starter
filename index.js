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
  let payload = req.body;
  
  let val1 = payload['val1'];
  let val2 = payload['val2'];

  let result = val1 + val2;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result));
});
