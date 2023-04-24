const express = require('express');
const router = express.Router();

router.get(
  '/profile',
  (req, res) => {
    res.json({
      message: 'This is protected route',
      user: req.user,
      token: req.query.secret_token
    })
  }
);

module.exports = router;