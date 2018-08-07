const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'bevSimply',
    user: 'postgres',
    password: ''
};
const db = pgp(cn);

function getAll(drink) {
    return db.any(`select * from ${drink}`);
}

function getByType(drink, drinkType) {
    return db.any(`select * from ${drink} where beerType ilike '%$1%'`, [drinkType]);
}

function getByName(drink, name) {
    return db.any(`select `)
}

module.exports = {
    getAll,
    getByType,

}