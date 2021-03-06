const express = require('express');

const router = express.Router();

const {
  isLoggedIn,
  isNotLoggedIn
} = require('../lib/auth');

module.exports = router;