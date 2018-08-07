const express = require('express');
const app = express();
const alcohol = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Gets all Beer
app.get('/:drink/:drinkType', (req, res) => {
    alcohol.getAll(req.params.drink)
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});