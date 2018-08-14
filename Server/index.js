const express = require('express');
const app = express();
const alcohol = require('./db');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Gets all Alcohol by alcoholId.
app.get('/alcohol/:alcoholId', (req, res) => {
    alcohol.getAll(req.params.alcoholId)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

// Gets all alcohol by BevType
app.get('/:drink/type/:drinkType', (req, res) => {
    alcohol.getByType(req.params.drink, req.params.drinkType)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

// Gets all alcohol by Drink Name
app.get('/:drink/name/:drinkName', (req, res) => {
    console.log(req.params.drink);
    console.log(req.params.drinkName);
    alcohol.getByName(req.params.drink, req.params.drinkName)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

// Gets all alcohol by id:
app.get('/:drink/id/:drinkId', (req, res) => {
    alcohol.getById(req.params.drink, req.params.drinkId)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

// Get Venue By id
app.get('/venueSettings/:id', (req, res) => {
    alcohol.getVenuesById(req.params.id)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

// Gets all Areas
app.get('/venue/:id/areas', (req, res) => {
    console.log('all areas')
    alcohol.getAllAreas(req.params.id)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});
// Post Area
app.post('/venue', (req, res) => {
    console.log(req.body);
    alcohol.insertArea(req.body.label)
    .then((data) => {
        res.json(data);
    })
})

// Get 1 Area by Id
app.get('/venue/:id', (req, res) => {
    console.log('an area')
    alcohol.getAreasById(req.params.id)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

// Delet Areay by Id
app.delete('/venue/:id', (req, res) => {
    console.log('about to delete area');
    alcohol.deleteAreaById(req.params.id)
    .then((data) => {
        console.log(data);
        res.json(data);
    })
    .catch((error) => { console.log(error); });
})


// Gets all Sections
app.get('/venue/:areaId/section', (req, res) => {
    alcohol.getSectionsByAreaId(req.params.areaId)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});
// POST Section
app.post('/venue/:areaId/section', (req,res) => {
    console.log(req.body);
    console.log('inserting section soon');
    alcohol.insertSection(req.body.label, req.params.areaId)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log(error);
    });
});
// Delete Section by ID
app.delete('/venue/:areaId/section/:sectionid', (req, res) => {
    console.log(req.body);
    console.log("deleting section soon");
    alcohol.deleteSectionById(req.params.sectionid)
    .then((data) => {
        res.json(data);
    })
    .catch ((error) => {
        console.log(error);
    })
})

// Beverages
// Get beverages by name
app.get('/venue/:areaId/section/:sectionId/placement', (req,res) => {
    alcohol.getBeverageListByName(req.params.bevname)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log(error);
    })
})

app.get('/beverages', (req, res) => {
    alcohol.getAllBeverages()
    .then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    })
})

// Placements
// inserting placement
app.post('/venue/:areaId/section/:sectionId/', (req, res) => {
    console.log(req.body.label)
    console.log(req.body.sectionid)
    console.log(req.body.beverageid)

    alcohol.insertPlacement(req.body.label, req.body.sectionid, req.body.beverageid)
    .then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    })
})

// Get all placements
app.get('/venue/:areaId/section/placements',(req,res) => {
    alcohol.getAllPlacements()
    .then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    })
})

// Delete placement by Id
app.delete('/venue/:areaId/section/placements/:placementid', (req, res) => {
    console.log(req.body);
    console.log('Deleting Placements Soon');
    alcohol.deletePlacementById(req.params.placementid)
    .then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    })
})



// Gets all Users
app.get('/personnel/:id', (req, res) => {
    alcohol.getAllUsersById(req.params.id)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});



app.listen(3000, () => {
    console.log('Listening on port 3000...');
});



