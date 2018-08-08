const express = require('express');
const app = express();
const alcohol = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Gets all Alcohol by category.
app.get('/:drink', (req, res) => {
    alcohol.getAll(req.params.drink)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

// Gets all alcohol by BevType
app.get('/:drink/type/:drinkType', (req, res) => {
    console.log(req.params.drink);
    console.log(req.params.drinkType);
    alcohol.getByType(req.params.drink, req.params.drinkType)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

// Gets all alcohol by Drink Name
app.get('/:drink/name/:drinkName', (req, res) => {
    alcohol.getByType(req.params.drink, req.params.drinkName)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

// Gets all alcohol by id:
app.get('/:drink/id/:drinkName', (req, res) => {
    alcohol.getByType(req.params.drink, req.params.drinkid)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});

