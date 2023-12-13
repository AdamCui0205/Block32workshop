const express = require('express');
const router = express.Router();

const { getProducts } = require('../db/products.js')

router.get('/', async(req,res) => {
    try {
      const products = await getProducts();
      res.send(products);
    } catch(err) {
      console.log(err);
    }
  });

module.exports = router;