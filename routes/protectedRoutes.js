const express = require('express');
const { verifyToken } = require('../middlewares/login');

const router = express.Router();

router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Selamat datang, ${req.user.email}` });
});

module.exports = router;
