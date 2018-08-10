const express = require('express');
const app = express();
const alcohol = require('./db');
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
    .catch((error) => { console.log(error); });
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

// Gets all Sections
app.get('/venue/:areaId/section', (req, res) => {
    alcohol.getSectionsByAreaId(req.params.areaId)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

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

