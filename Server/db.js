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
// Create Venue Functions
function insertVenue(venueLocation) {
    console.log('Inserting new venue');
    return db.one(`insert into venue (venueLocation) values ('$1#') returning id`, [venueLocation]).catch(console.log)
    r
} 

function createVenue(venueLocation){
    console.log(venueLocation)
    return getVenuesByLocation(venueLocation)
        .then(venue => {
            if(venue){
                return venue.id
            }else {
                return insertVenue(venueLocation).then(v => v.id)
            }
        })
}
// get/create
function getAllVenues() {
    return db.any(`select * from Venue`);
}
function getVenuesById(Id) {
    return db.oneOrNone(`select * from Venue where Id=$1`, [Id]);
}

function getVenuesByLocation(location) {
    console.log('getting venues by location');
    console.log(location);
    return db.oneOrNone(`select * from Venue where venuelocation ilike '%$1#%'`, [location]);
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
    return db.any(`select * from Area where label iLike '%$1#%'`, [label]);
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
function insertPlacement(label, sectionId, beverageID, quantity) {
    return db.result(`insert into placement (label, sectionId, beverageID, quantity) values ($1, '$2#', '$3#', $4) returning id`, [label, sectionId, beverageID, quantity]);
}
// get
function getAllPlacements() {
    return db.any(`select p.*, b.img from placement p left join beveragelist b on p.beverageid = b.id;`);
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

// Update quantity
function updateQuantityById(quantity, Id) {
    return db.result(`update placement set quantity=$1 where Id=$2`, [quantity, Id]);
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
function createUser(email, userpassword, firstname, lastname, position, phonenumber, venueid) {
    let hash = bcrypt.hashSync(userpassword, 10);
    return db.one("insert into users (firstname, lastname, email, userpassword, position, phonenumber, venueid) values ('$1#', '$2#', '$3#', '$4#', '$5#', '$6#', $7) returning id", [firstname, lastname, email, hash, position, phonenumber, venueid]);
    }

// Authenticate User
function authenticateUser(email, userpassword) {
    return getUserByEmail(email)
            .then((user) => {
                console.log(user);
                let hash = bcrypt.hashSync(userpassword, 10);
                console.log(hash);
                console.log('That was the hash');
                return bcrypt.compareSync(userpassword, user.userpassword)
            })
            .catch((error) => false);
    }
// get
// Get by Email
function getUserByEmail(email) {
    return db.oneOrNone(`select * from Users where email='$1#'`, [email]);
}
function getAllUsers() {
    return db.any(`select * from Users`);
}
function getUserById(Id) {
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
    createVenue,
    insertVenue,
    getAllVenues,
    getVenuesById,
    getVenuesByLocation,
    updateVenuesById,
    deleteVenuebyId,
    createUser,
    getAllUsers,
    getUserById,
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
    getAllBeverages,
    updateQuantityById
}