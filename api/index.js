const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('../routes/menu');

const app = express();
app.use(bodyParser.json());

menuRoutes(app);

app.get('/', (req, res) => {
  res.redirect('/menu');
});

module.exports = (req, res) => {
  app(req, res);
};
