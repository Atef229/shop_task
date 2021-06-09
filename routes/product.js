const express = require('express');
const router = express.Router();

const {product_search} = require('../controllers/product');


// @route   GET api/product/search
// @desc    Get  product by name & category name
// @access  Public
router.get('/search/', product_search)
  
module.exports = router;