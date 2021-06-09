// Load User model
const Cart = require('../models/Cart');

 const cart_add = (req, res) => {
    const user = req.body.user;
    const item = {
      product: req.body.product,
      quantity: req.body.quantity,
      totalPrice: req.body.totalPrice,
    };
    Cart.findOne({ user: user })
      .then((foundCart) => {
        if (foundCart) {
          let products = foundCart.items.map((item) => item.product + '');
          if (products.includes(item.product)) {
            Cart.findOneAndUpdate({
              user: user,
              items: {
                $elemMatch: { product: item.product }
              }
            },
              {
                $inc: { 'items.$.quantity': item.quantity }
              },
               )
              .then(
                user => res.json(user));
          } else {
            foundCart.items.push(item);
            foundCart.save()
            .then(items => res.json(item),
            () => res.end())
            .catch(err => console.log(err));
          }
        } else {
          Cart.create({
            user: user,
            items: [item],
          })
            .then(
              items => res.json(item));
            console.log(item);
        }
      });
  }

  module.exports = {
    cart_add
};