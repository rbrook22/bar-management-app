-- Read

-- Selects all Beer
select * from Beer;

-- Selects all Beer with Specific Type
select * from Beer 
where bevType ilike '%ipa%';

-- Selects Beer by ID
select * from Beer
where Id = 1;
-- Selects Beer by Name
select * from Beer
where bevName ilike '%Budlight%';

-- Selects all Wine
select * from Wine;

-- Selects all Wine with specific type
Select * from Wine
where bevType ilike '%sparkling%';

--  Selects wine by ID
Select * from Wine
where wineId = 2;

Select * from wine
where bevName ilike '%Kendall Jackson%';

-- Selects all Liquor
Select * from Liquor;
-- Selects Liquor with specific type
Select * from Liquor
where bevType ilike '%Bourbon%';
-- Selects Liquor by ID
Select * from Liquor
where Id = 1;
--  Selects Liquor by Name
Select * from Liquor
where bevName ilike '%Macallen%';

-- Selects all Mixer
Select * from Mixers;
-- Selects Mixers with specific type
Select * from Mixers
where bevType ilike '%Juice%';
-- Selects Mixer by ID
Select * from Mixers
where Id = 1;
-- Selects Mixer by Name
Select * from Mixers 
where bevName ilike '%Pina Colada%';

-- Selects all Venues
Select * from Venue;

-- Select venue by ID
Select * from Venue
where Id = 1;
-- Select venue by Name
Select * from Venue
where venueName ilike '%Atlanta Tech%';


-- Select all Areas
Select * from Area;
-- Select by AreaID
Select * from Area
where Id = 2;
-- Select by Area Name
Select * from Area
where areaName iLike '%Front%';

-- Select all Sections
Select * from Section;
-- Select Section by SectionID
Select * from Section
where Id = 1;
-- Select Section by Name
Select * from Section
where sectionName iLike '%Left%';


-- Select all users
Select * from Users;
-- Select specific User by ID
Select * from Users
where Id = 2;
-- Select specific user by first name
Select * from Users
where firstName iLike '%Bhisma%';
-- Select user by Email
Select * from Users
where email = 'matthew@test.com';



-- Update
-- Update Beer Table
Update Beer
Set bevType = 'Craft',
    bevName = 'Budlight',
    VolumeSize = 18,
    Price = 6,
    Quantity = 4
Where Id = 1;

-- Update Liquor Table
Update Liquor
Set bevType = 'Bourbon',
    bevName = 'Macallen',
    VolumeSize = 750,
    Price = 50,
    Quantity = 8
Where Id = 1;

-- Update Mixer Table
Update Mixers
Set bevType = 'Fruit Mix',
    bevName = 'Pina Colada',
    VolumeSize = 750,
    Price = 25,
    Quantity = 1
Where Id = 1;

-- Update Wine Table
Update Wine
Set bevType = 'Rose',
    bevName = 'Dark HOrse',
    VolumeSize = 32,
    Price = 18,
    Quantity = 1
Where Id = 1;

-- Update Venue Table
Update Venue
Set venueName = 'Quizzicle',
    venueLocation = '8326 Piedmont Rd NW, Atlanta, GA, 30305',
    phoneNumber = "866-756-7701"
Where Id = 1;

-- Update Area Table
Update Area
set areaName = 'Main Bar'
Where Id = 1;

-- Update Section Table
Update Section
Set sectionName = 'Top Area',
    alcoholName = 'Bourbon'
Where Id = 1;

-- Update User Table
Update Users
set firstName = 'Bhissy',
    lastName = 'Bhakai',
    email = 'bhissy@test.com',
    userPassword = 'test1234',
    Position = 'Highest Manager',
    phoneNumber = '866-875-8093'
Where Id = 1;

-- Update Reporting Table
Update Reporting
Set bottleName = 'Bourbon',
    fullBottles = 6,
    partialBottle = 1.5
Where Id = 1;


-- Destroy

-- Delete Beer by ID
Delete from Beer
where Id = 2;

-- Delete wine by ID
Delete from Wine
where Id = 2;

-- Delete Liquory by ID
Delete from Liquor
where Id = 2;

-- Delete Mixer by ID
Delete from Mixers
where Id = 2;

-- Delete venue by ID
Delete from Venue
where Id = 2;

-- Delete Area by ID
Delete from Area
where Id = 2;

-- Delete Section by ID
Delete from Section
where Id = 2;

-- Delete User by ID
Delete from Users
where Id = 2;

-- Delete Report by ID
Delete from Reporting
where Id = 2;
