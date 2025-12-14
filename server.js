const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

menuRoutes(app);

app.get('/', (req, res) => {
  res.send('API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
