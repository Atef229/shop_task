const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

  const product = require('./routes/product');
  const cart = require('./routes/cart');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db,{ useUnifiedTopology: true ,useFindAndModify: false ,useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));




// Use Routes
  app.use('/api/product', product);
  app.use('/api/cart', cart);

// Server static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
  //  app.use(express.static('client/build'));

  //  app.get('*', (req, res) => {
  //    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  //  });
// }

// app.use(express.static('public'));
// app.use("/*",(req,res,err)=>{
//   res.sendFile(__dirname+"/public/index.html")
// })

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));