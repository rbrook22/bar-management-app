-- ==============================================================================      READ      ==============================================================================

-- Selects all Beer
select * from beveragelist
where alcoholId = 1;
-- Selects all Beer with Specific Type
select * from beveragelist
where alcoholId = 1 and bevtype ilike '%ipa%';
-- Selects Beer by ID
select * from beveragelist
where alcoholId = 1 and id =  1;
-- Selects Beer by Name
select * from beveragelist
where bevname ilike '%budlight%';


-- Selects all Wine
select * from beveragelist
where alcoholId = 2;
-- Selects all Wine with specific type
select * from beveragelist
where alcoholId = 2 and bevtype ilike '%sparkling%';
--  Selects wine by ID
select * from beveragelist
where alcoholId = 2 and id =  3;
--  Selects wine by name
select * from beveragelist
where bevname ilike '%kendall%';


-- Selects all Liquor
select * from beveragelist
where alcoholId = 3;
-- Selects Liquor with specific type
select * from beveragelist
where alcoholId = 3 and bevtype ilike '%bourbon%';
-- Selects Liquor by ID
select * from beveragelist
where alcoholId = 3 and id =  5;
--  Selects Liquor by Name
select * from beveragelist
where bevname ilike '%macallen%';

-- Selects all Mixer
select * from beveragelist
where alcoholId = 4;
-- Selects Mixers with specific type
select * from beveragelist
where alcoholId = 4 and bevtype ilike '%fruit%';
-- Selects Mixer by ID
select * from beveragelist
where alcoholId = 4 and id =  7;
-- Selects Mixer by Name
select * from beveragelist
where bevname ilike '%pina colada%';


-- Selects all Venues
Select * from Venue;
-- Select venue by ID
Select * from Venue
where Id = 1;
-- Select venue by Name
Select * from Venue
where label ilike '%Atlanta Tech%';


-- Select all Areas
Select * from Area;
-- Select by AreaID
Select * from Area
where Id = 2;
-- Select by Area Name
Select * from Area
where label iLike '%Front%';

-- Select all Sections
Select * from Section;
-- Select Section by SectionID
Select * from Section
where Id = 1;
-- Select Section by Name
Select * from Section
where label iLike '%Left%';


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


-- ==============================================================================   UPDATE   ==============================================================================
-- Update Beer Table
update beveragelist
set bevtype = 'IPA',
    bevname = 'Sweetwater 420',
    volumesize = 8,
    price = 7,
    quantity = 4
where alcoholId = 1 and id = 1;

-- Update Wine Table
update beveragelist
set bevtype = 'White',
    bevname = 'Kendall Jackson',
    volumesize = 750,
    price = 14,
    quantity = 3
where alcoholId = 2 and id = 3;

-- Update Liquor Table
update beveragelist
set bevtype = 'Gin',
    bevname = 'Seagrams',
    volumesize = 750,
    price = 35,
    quantity = 4
where alcoholId = 3 and id = 5;

-- Update Mixer Table
update beveragelist
set bevtype = 'IPA',
    bevname = 'Sweetwater 420',
    volumesize = 8,
    price = 7,
    quantity = 4
where alcoholId = 4 and id = 7;

-- Update Venue Table
Update Venue
Set label = 'Quizzicle',
    venueLocation = '8326 Piedmont Rd NW, Atlanta, GA, 30305',
    phoneNumber = "866-756-7701"
Where Id = 1;

-- Update Area Table
Update Area
set label = 'Main Bar'
Where Id = 1;

-- Update Section Table
Update Section
Set sectionName = 'Top Area',
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


-- ==============================================================================      DESTROY      ========================================================================================================

-- Delete Beer by ID
Delete from beveragelist
where alocholId = 1 and id = 2;

-- Delete wine by ID
Delete from beveragelist
where alocholId = 2 and id = 2;

-- Delete Liquory by ID
Delete from beveragelist
where alocholId = 3 and id = 2;

-- Delete Mixer by ID
Delete from beveragelist
where alocholId = 4 and id = 2;

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
