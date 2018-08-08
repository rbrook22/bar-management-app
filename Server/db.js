const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'bevSimply',
    user: 'postgres',
    password: ''
};
const db = pgp(cn);

function getAll(alcoholId) {
    return db.any(`select * from beveragelist where alcoholId = $1`, [alcoholId]);
}

function getByType(drink, drinkType) {
    return db.any(`select * from ${drink} where bevtype ilike '%$1#%'`, [drinkType]);
}

function getByName(drink, drinkName) {
    return db.any(`select * from ${drink} where bevName ilike '%$1#%'`, [drinkName]);
}

function getById(drink, drinkId) {
    return db.oneOrNone(`Select * from ${drink} where id=$1`, [drinkId]);
}

function getAllAreas() {
    return db.any(`Select * from Area`);
}

module.exports = {
    getAll,
    getByType,
    getByName,
    getById,
    getAllAreas
}