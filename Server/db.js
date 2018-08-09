const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'bevSimply',
    user: 'postgres',
    password: ''
};
const db = pgp(cn);

// Venue Functions
// get/create
function getAllVenues() {
    return db.any(`select * from Venue`);
}
function getVenuesById(Id) {
    return db.oneOrNone(`select * from Venue where Id=$1`, [Id]);
}
function getVenuesByName(label) {
    return db.any(`select * from Venue where label ilike '%$1%'`, [label]);
}
// update
function updateVenuesById(label, venueLocation, phoneNumber, Id) {
    return db.result(`update Venue set label='$1#', venueLocation='$2#', phoneNumber='$3#' where Id=$4`, [label, venueLocation, phoneNumber, Id] )
}
// delete
function deleteVenuebyId(Id) {
    return db.result(`delete from Venue where Id=$1`, [Id]);
}

// Area Functions
// get
function getAllAreas(venueId) {
    return db.any('Select * from Area where venueId=$1', [venueId]);
}
function getAreasById(Id) {
    return db.oneOrNone(`select * from Area where Id=$1`, [Id]);
}
function getAreaByName(label) {
    return db.any(`select * from Area where label iLike '%$1%'`, [label]);
}
// update
function updateAreaById(label, Id) {
    return db.result(`update Area set label='$1#' where Id=$2`, [label, Id]);
}
// delete
function deleteAreaById(Id) {
    return db.result(`delete Area where Id=$1`, [Id]);
}

// Section Functions
// get
function getAllSections() {
    return db.any(`select * from Section`);
}
function getSectionsById(Id) {
    return db.oneOrNone(`select * from Section where Id=$1`, [Id]);
}
function getSectionsByName(label) {
    return db.any(`select * from Section where label iLike '%$1%'`, [label]);
}
// update
function updateSectionById(getSectionsByName, Id) {
    return db.result(`update Section set sectionName='$1#' where Id=$2 `, [getSectionsByName, Id]);
}
// delete
function deleteSectionById(Id) {
    return db.result(`delete from Section where Id=$1`, [Id]);
}

// Alcohol Functions
// get
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
// update
function updateAlcoholById(bevType, bevName, volumeSize, price, quantity, alcoholId, Id) {
    return db.result(`update beveragelist set bevType='$1#', bevName='$2#', volumeSize='$3#', price='$4#', quantity='$5#' where alcoholId=$6 and Id=$7`, [bevType, bevName, volumeSize, price, quantity, alcoholId, Id]);
}
// delete
function deleteAlcoholById(alcoholId, Id) {
    return db.result(`delete from beveragelist where alcoholId=$1 and Id=$2`, [alcoholId, Id]);
}

// User Functions
// get
function getAllUsers() {
    return db.any(`select * from Users`);
}
function getAllUsersById(Id) {
    return db.oneOrNone(`select * from Users where Id=$1`[Id]);
}
function getUserByFirstName(firstname) {
    return db.any(`select * from Users where firstname iLike '%$1%'`[firstname]);
}
function getUserByEmail(email) {
    return db.any(`select * from Users where email=$1`[email]);
}
// update
function updateUsersById(firstName, lastName, email, userPassword, position, phoneNumber, Id) {
    return db.result(`update Users set firstName='$1#', lastName='$2#', email='$3#', userPassword='$4#', position='$5#', phoneNumber='$6#' where Id=$7`[firstName, lastName, email, userPassword, position, phoneNumber, Id])
}
// delete
function deleteUsersById(Id) {
    return db.result(`delete from Users where Id=$1`[Id]);
}


// Exporting Functions
module.exports = {
    getAll,
    getByType,
    getByName,
    getById,
    updateAlcoholById,
    deleteAlcoholById,
    getAllAreas,
    getAreasById,
    getAreaByName,
    updateAreaById,
    deleteAreaById,
    getAllVenues,
    getVenuesById,
    getVenuesByName,
    updateVenuesById,
    deleteVenuebyId,
    getAllUsers,
    getAllUsersById,
    getUserByFirstName,
    getUserByEmail,
    updateUsersById,
    deleteUsersById,
    getAllSections,
    getSectionsById,
    getSectionsByName,
    updateSectionById,
    deleteSectionById
    
}