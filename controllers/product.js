// Load User model
const Product = require('../models/Product');

const product_search = function(req, res) {
    const errors = {};
  Product.find({$or:[
     {name: new RegExp(req.query.name)},
     {category_name: new RegExp(req.query.name)}
    ]})
  .then(product => {
    if (product==0) {
      errors.name= 'No Product Found';
      res.status(404).json(errors);
    }
  
    res.json(product);
  })
  .catch(err =>
    res.status(404).json({ product: 'no product found' })
  );
  }

  module.exports = {
    product_search
};