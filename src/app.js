const app = require('express')();

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const users = [
    {
      name: 'Marcelo Abbadia',
      mail: 'marcelo@teste.com',
    },
  ];

  res.status(200).json(users);
});

module.exports = app;
