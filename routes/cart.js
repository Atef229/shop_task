const express = require('express');
const router = express.Router();

const {cart_add} = require('../controllers/cart');

// @route   POST api/cart/add
// @desc    cart
// @access  Public
router.post('/add', cart_add);

module.exports = router;