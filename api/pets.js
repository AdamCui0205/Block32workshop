// const express = require ('express');
// const router = express.Router();

// router.get('/', (req,res) => {
//     res.send('Pets');
//   });

//module.exports = router;

const express = require('express');
const router = express.Router();

const { getPets } = require('../db/pets.js')

router.get('/', async(req,res) => {
    try {
      const pets = await getPets();
      res.send(pets);
    } catch(err) {
      console.log(err);
    }
  });

module.exports = router;