const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const routes = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Serwer działa pod adresem http://localhost:${port}`);
  });

// Obsługa błędu 404
app.use((req, res, next) => {
    res.status(404).send('Przepraszamy, taka trasa nie istnieje.');
  });
  
  // Obsługa błędów
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Coś poszło nie tak!');
  });