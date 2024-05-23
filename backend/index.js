const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let messages = [];

app.post('/api/messages', (req, res) => {
  const message = req.body.message;
  messages.push({ id: messages.length + 1, text: message });
  res.status(201).send();
});

app.get('/api/messages', (req, res) => {
  res.json(messages.slice(-5));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
