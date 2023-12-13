const client = require('./client.js');

const createProduct = async(name) =>{
   try {
     const { rows: [ product ] } = await client.query(`
     INSERT INTO products (name)
     VALUES ('${name}')
     RETURNING *;
     `);
     return product;
   } catch(err) {
    console.log(err);
   }
}

const getProducts = async() => {
  try{
      console.log(`get products`);
      const { rows } = await client.query(`
      SELECT * FROM products;
      `);
      console.log(rows);
      return rows;
  } catch(err){
      console.log(err);
  }
}

module.exports = {
    createProduct,
    getProducts
}