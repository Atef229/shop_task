const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    product_id: { 
        type: Number,
        required: [true, 'Please add a product_id']
     },
    name: { 
        type: String,
        required: [true, 'Please add a product name']
    },
    price: {
         type: Number,
         required: [true, 'Please add a product price']
        },
    quantity: { 
        type: Number,
        required: [true, 'Please add a product quantity']
    },
    image:{ 
        type: String,
        required: [true, 'Please add a product image']
     },
    Created_at:{
        type: String
    }
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  });

productSchema.index({ request: 'text' });

module.exports = product = mongoose.model('Product', productSchema);