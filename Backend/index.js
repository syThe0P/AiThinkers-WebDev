const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use app.use() to set up middleware or default configurations
app.get('/twitter', (req, res) => {
  res.send('My twitter');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
