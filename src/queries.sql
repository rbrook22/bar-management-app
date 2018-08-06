-- Read

-- Selects all Beer
select * from Beer;

-- Selects all Beer with Specific Type
select * from Beer 
where beerType ilike '%Ale%';

-- Selects Beer by ID
select * from Beer
where beerId = 1;
-- Selects Beer by Name
select * from Beer
where beerName ilike '%Beer%';

-- Selects all Wine
select * from Wine;

-- Selects all Wine with specific type
Select * from Wine
where wineType ilike '%Rosay%';

--  Selects wine by ID
Select * from Wine
where wineId = 2;

Select * from wine
where wineName ilike '%dark horse%';

-- Selects all Liquor
Select * from Liquor;
-- Selects Liquor with specific type
Select * from Liquor
where liquorType ilike '%Scotch%';
-- Selects Liquor by ID
Select * from Liquor
where liquorId = 1;
--  Selects Liquor by Name
Select * from Liquor
where liquorName ilike '%Johnnie Walker%';

-- Selects all Mixer
Select * from Mixers;
-- Selects Mixers with specific type
Select * from Mixers
where mixerType ilike '%Juice%';
-- Selects Mixer by ID
Select * from Mixers
where mixerId = 1;
-- Selects Mixer by Name
Select * from Mixers 
where mixerName ilike '%Fruit Mix%';

-- Selects all Venues
Select * from Venue;

-- Select venue by ID
Select * from Venue
where venueID =1;
-- Select venue by Name
Select * from Venue
where venueName ilike '%Atlanta Tech%';


-- Select all Areas
Select * from Area;
-- Select by AreaID
Select * from Area
where areaId = 2;
-- Select by Area Name
Select * from Area
where areaName iLike '%Front%';

-- Select all Sections
Select * from Section;
-- Select Section by SectionID
Select * from Section
where sectionId = 1;
-- Select Section by Name
Select * from Section
where sectionName iLike '%Top%';


-- Select all users
Select * from Users;
-- Select specific User by ID
Select * from Users
where userId = 2;
-- Select specific user by first name
Select * from Users
where firstName iLike '%Bhisma%';
-- Select user by Email
Select * from Users
where email = 'matthew@test.com';



-- Update
-- Update Beer Table
Update Beer
Set beerType = 'Craft',
    beerName = 'Budlight',
    VolumeSize = 18,
    Price = 6,
    Quantity = 4
Where beerId = 1;

-- Update Liquor Table
Update Liquor
Set liquorType = 'Bourbon',
    liquorName = 'Macallen',
    VolumeSize = 750,
    Price = 50,
    Quantity = 8
Where liquorId = 1;

-- Update Mixer Table
Update Mixers
Set mixerType = 'Fruit Mix',
    mixerName = 'Pina Colada',
    VolumeSize = 750,
    Price = 25,
    Quantity = 1
Where mixerId = 1;

-- Update Wine Table
Update Wine
Set wineType = 'Rose',
    wineName = 'Dark HOrse',
    VolumeSize = 32,
    Price = 18,
    Quantity = 1
Where wineId = 1;

-- Update Venue Table
Update Venue
Set venueName = 'Quizzicle',
    venueLocation = '8326 Piedmont Rd NW, Atlanta, GA, 30305',
    phoneNumber = 8667567701
Where venueID = 1;

-- Update Area Table
Update Area
set areaName = 'Main Bar'
Where areaId = 1;

-- Update Section Table
Update Section
Set sectionName = 'Top Area',
    alcoholName = 'Bourbon'
Where sectionId = 1;

-- Update User Table
Update Users
set firstName = 'Bhissy',
    lastName = 'Bhakai',
    email = 'bhissy@test.com',
    userPassword = 'test1234',
    Position = 'Highest Manager',
    phoneNumber = '8668758093'
Where userId = 1;

-- Update Reporting Table
Update Reporting
Set bottleName = 'Bourbon',
    fullBottles = 6,
    partialBottle = 1.5
Where reportingId = 1;


-- Destroy

-- Delete Beer by ID
Delete from Beer
where beerId = 2;

-- Delete wine by ID
Delete from Wine
where wineId = 2;

-- Delete Liquory by ID
Delete from Liquor
where liquorId = 2;

-- Delete Mixer by ID
Delete from Mixers
where mixerID = 2;

-- Delete venue by ID
Delete from Venue
where venueId = 2;

-- Delete Area by ID
Delete from Area
where areaId = 2;

-- Delete Section by ID
Delete from Section
where sectionId = 2;

-- Delete User by ID
Delete from Users
where userId = 2;

-- Delete Report by ID
Delete from Reporting
where reportingId = 2;
