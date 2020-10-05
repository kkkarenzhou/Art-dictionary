const express = require('express');
const router = express.Router();

// Homepage
router.get('/', (req, res) => {
  res.send('Art');
});

// About Dictionary
router.get('/about', (req, res) => {
  res.send('About Art dictionary');
});

module.exports = router;