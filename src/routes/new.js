const express = require('express');

const router = express.Router();

const {
  isLoggedIn,
  isNotLoggedIn
} = require('../lib/auth');

router.get('/new', isNotLoggedIn, (req, res) => {
  res.render('new');
});
module.exports = router;