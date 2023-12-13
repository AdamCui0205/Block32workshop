const client = require('./client.js');

const createPet = async(name, type, ownerId) => {
    if(!ownerId){
        ownerId = null;
    }

    try{
        const { rows: [ pet ]} = await client.query(`
        INSERT INTO pets (name, type, owner_id)
        VALUES ('${name}', '${type}', ${ownerId})
        RETURNING *;
        `);
        return pet;
    } catch(err){
        console.log(err);
    }
}

const getPets = async() => {
    try{
        console.log(`get pets`);
        const { rows } = await client.query(`
        SELECT * FROM pets;
        `);
        console.log(rows);
        return rows;
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    createPet,
    getPets
}