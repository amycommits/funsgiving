const express = require('express');

const app = express();
console.log('made it to the file?')

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = app;
