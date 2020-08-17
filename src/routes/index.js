const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/new', async (req, res) => {
    res.render('new');
});

module.exports = router;