const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'bevSimply',
    user: 'postgres',
    password: ''
};
const db = pgp(cn);

function getAllBeer() {
    return db.any('select * from Beer');
}

function getAllWine() {
    return db.any('select * from Wine');
}

function getAllLiquor() {
    return db.any('select * from Liquor');
}

function getAllMixers() {
    return db.any('select * from Mixers');
}

module.exports = {
    getAllBeer,
    getAllWine,
    getAllLiquor,
    getAllMixers
}