const express = require('express');
const app = express();
const alcohol = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/beer', (req, res) => {
    alcohol.getAllBeer()
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

app.get('/wine', (req, res) => {
    alcohol.getAllWine()
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

app.get('/liquor', (req, res) => {
    alcohol.getAllLiquor()
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

app.get('/mixers', (req, res) => {
    alcohol.getAllMixers()
    .then((data) => {   
        res.json(data);
    })
    .catch((error) => { console.log(error); });
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});