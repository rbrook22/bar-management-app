const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'bevSimply',
    user: 'postgres',
    password: ''
};
const db = pgp(cn);
const bcrypt = require ('bcrypt');

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
// Create
function insertArea(label, venue = 1) {
    return db.result(`insert into area (venueid, label) values ($1, '$2#') returning id`, [venue, label]);
} 
// get
function getAllAreas() {
    return db.any('Select * from Area');
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
    return db.result(`delete from Area where Id=$1`, [Id]);
}

// Section Functions
// Create
function insertSection(label, areaId) {
    return db.result(`insert into section (label, areaId) values ($1, '$2#') returning id`, [label, areaId]);
}
// get
function getAllSections() {
    return db.any(`select * from Section`);
}
function getSectionsById(Id) {
    return db.oneOrNone(`select * from Section where Id=$1`, [Id]);
}
function getSectionsByAreaId(areaId) {
    return db.any(`select * from Section where areaId=$1`, [areaId]);
}
// doesn't work
function getSectionsByName(label) {
    return db.any(`select * from Section where label iLike '%$1%'`, [label]);
}
// update-doesn't work
function updateSectionById(getSectionsByName, Id) {
    return db.result(`update Section set label='$1#' where Id=$2 `, [getSectionsByName, Id]);
}
// delete
function deleteSectionById(Id) {
    return db.result(`delete from Section where Id=$1`, [Id]);
}

// beverageList Functions
// getbeverage by name
function getBeverageListByName(bevname) {
    return db.any(`select * from beveragelist where bevname iLike '%$1%'`, [bevname]);
}
// Get all beverages
function getAllBeverages() {
    return db.any(`select * from beveragelist`);
}



// Placement Functions
// Create
function insertPlacement(label, sectionId, beverageID) {
    return db.result(`insert into placement (label, sectionId, beverageID) values ($1, '$2#', '$3#') returning id`, [label, sectionId, beverageID]);
}
// get
function getAllPlacements() {
    return db.any(`select * from placement`);
}

function getPlacementsById(Id) {
    return db.oneOrNone(`select * from placement where Id=$1`, [Id]);
}

function getPlacementBySectionId(sectionId) {
    return db.any(`select * from placement where sectionId=$1`, [sectionId]);
}

function getPlacementByBeverageId(beverageId) {
    return db.any(`select * from placement where beverageId=$1`, [beverageId]);
}
// doesn't work
function getPlacementByName(label) {
    return db.any(`select * from placement where label iLike '%$1%'`, [label]);
}
// update-doesn't work
function updatePlacementById(getPlacementByName, Id) {
    return db.result(`update placement set label='$1#' where Id=$2 `, [getPlacementByName, Id]);
}

// delete
function deletePlacementById(Id) {
    return db.result(`delete from placement where Id=$1`, [Id]);
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
// Create User
function createUser(firstname, lastname, email, userpassword, position, phonenumber) {
    let hash = bcrypt.hashSync(userpassword, 10);
    return db.one("insert into users (firstname, lastname, email, userpassword, position, phonenumber) values ('$1#', '$2#', '$3#', '$4#', '$5#', '$6#') returning id", [firstname, lastname, email, userpassword, position, phonenumber]);
    }

// Authenticate User
function authenticateUser(email, userpassword) {
    return getUserByEmail(email)
            .then((user) => {
                return bcrypt.compareSync(userpassword, user.password_hash)
            })
            .catch((error) => false);
    }
// get
// Get by Email
function getUserByEmail(email) {
    return db.any(`select * from Users where email=$1`, [email]);
}
function getAllUsers() {
    return db.any(`select * from Users`);
}
function getAllUsersById(Id) {
    return db.oneOrNone(`select * from Users where Id=$1`, [Id]);
}
function getUserByFirstName(firstname) {
    return db.any(`select * from Users where firstname iLike '%$1%'`, [firstname]);
}

// update
function updateUsersById(firstName, lastName, email, userPassword, position, phoneNumber, Id) {
    return db.result(`update Users set firstName='$1#', lastName='$2#', email='$3#', userPassword='$4#', position='$5#', phoneNumber='$6#' where Id=$7`, [firstName, lastName, email, userPassword, position, phoneNumber, Id])
}
// delete
function deleteUsersById(Id) {
    return db.result(`delete from Users where Id=$1`, [Id]);
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
    createUser,
    getAllUsers,
    getAllUsersById,
    getUserByFirstName,
    getUserByEmail,
    updateUsersById,
    deleteUsersById,
    authenticateUser,
    getAllSections,
    getSectionsById,
    getSectionsByAreaId,
    getSectionsByName,
    updateSectionById,
    deleteSectionById,
    insertArea,
    insertSection,
    insertPlacement,
    getAllPlacements,
    getPlacementsById,
    getPlacementBySectionId,
    getPlacementByBeverageId,
    getPlacementByName,
    updatePlacementById,
    deletePlacementById,
    getBeverageListByName,
    getAllBeverages
}