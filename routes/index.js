const express = require('express');
const path = require('path');
const router = express.Router();


//klient requestuje '/' <- req, a serwer daje response w postaci sendFile res -> sendFile(...)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
});

module.exports = router;