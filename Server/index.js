const express = require('express');
const app = express();
const alcohol = require('./db');
const static = express.static;
app.use(static("public"));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const session = require('express-session');
app.use(session({
    key: 'user_sid',
    secret: 'ldfhgosdhgoushdfglahdflajsd',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// This is middleware that will clear the cookie for stale user sessions
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});

// helper middleware function to check for logged-in users
var ensureLoggedIn = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        next();
    } else {
        res.redirect('/login');
    }
};

// Logging User In
app.post('/login', (req, res) => {
    let username = req.body.email;
    let password = req.body.userpassword;
    alcohol.authenticateUser(username, password)
        .then(isValid => {
        if (isValid) {
            alcohol.getUserByEmail(username)
            .then(u => {
                req.session.alcohol = u.id;
                console.log(`Your user id is ${u.id}`);
                res.json({status:'Ok'})
            })
        } else {
            console.log('your credentials no good!');
            res.json({status:'Not Ok!'})
        }
        })
    // res.send('yeah, you logged in');
});

// Sign Up
app.post('/signup', (req, res) => {
    let username = req.body.email;
    let password = req.body.password;
    let password2 = req.body.password2;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let phonenumber = req.body.phonenumber;
    let position = req.body.position;
    let address = req.body.venueAddress;

    // console.log(username);
    // console.log(password);
    // console.log(password2);
    alcohol.createVenue(address)
    .then(venueId => {
        alcohol.getUserByEmail(username)
        .then(user => {
            console.log(user);
        if (user) {
            console.log('found that punk!');
            res.json({status:'Taken!'})
        } else if (password === password2) {
            alcohol.createUser(username, password, firstname, lastname, position, phonenumber, venueId)
            .then(u => {
                console.log(u);
                req.session.user = u.id;
                console.log(`Your user id is ${u.id}`);
                res.json({status:'Ok'})
                // res.send(`Your user id is ${u.id}`);
            })
            .catch(err => {
                console.log(err)
                res.json({status: 'err'})
            })
        } else {
            res.json({status:'Not Ok!'})
            }
        })
    });
})


// Killing a Session
app.post('/logout', (req, res) => {
    req.session.destroy
    res.json('Logged out')

})

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

    alcohol.insertPlacement(req.body.label, req.body.sectionid, req.body.beverageid, req.body.quantity)
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
        // res.send(data);
    }).catch((error) => {
        console.log(error);
    })
})


// Getll all placements for Reporting
app.get('/reporting',(req,res) => {
    alcohol.getAllPlacements()
    .then((data) => {
        res.json(data);
        // res.send(data);
    })
    .catch((error) => {
        console.log(error);
    })
});

// Update Quantity in Placement
app.get('/section/placement/:placementId', (req, res) => {
    alcohol.getPlacementsById(req.params.placementId)
    .then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    })
    }
);



app.post('/section/placement/:placementId', (req, res) => {
    alcohol.updateQuantityById(req.body.quantity, req.params.placementId)
    .then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    })
});

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
});


// Gets all Users
app.get('/personnel', (req, res) => {
    alcohol.getAllUsers()
    .then((data) => {
        res.json(data);
        console.log(data);
    }).catch((error) => { 
        console.log(error); 
    });
});



app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
