const express = require('express');
const router = express.Router();

router.use('/owners', require('./owners.js'));
router.use('/pets', require('./pets.js'));
router.use('/products', require('./products.js'));

// router.get('/products', (res,req) => {
//   res.send('Products');
// })

module.exports = router;