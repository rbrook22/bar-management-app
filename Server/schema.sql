create table Alcohol (
    AlcoholId serial primary key,
    AlcoholType varchar(10)
);

create table Beer (
    beerId serial primary key,
    beerType varchar(30),
    beerName varchar(30),
    AlcoholId int,
    foreign key (AlcoholId) references Alcohol(AlcoholId)
    on delete cascade,
    VolumeSize int,
    Price int,
    Quantity int,
    BeerImg varchar(300)
);

create table Wine (
    wineId serial primary key,
    wineType varchar(50),
    wineName varchar(50),
    AlcoholId int,
    foreign key (AlcoholId) references Alcohol(AlcoholId)
    on delete cascade,
    VolumeSize int,
    Price int,
    Quantity int,
    WineImg varchar(300)
);

create table Liquor (
    liquorId serial primary key,
    liquorType varchar(30),
    liquorName varchar(30),
    AlcoholId int,
    foreign key (AlcoholId) references Alcohol(AlcoholId)
    on delete cascade,
    VolumeSize int,
    Price int,
    Quantity int,
    LiqourImg varchar(300)
);

create table Mixers (
    mixerId serial primary key,
    mixerType varchar(30),
    mixerName varchar(30),
    AlcoholId int,
    foreign key (AlcoholId) references Alcohol(AlcoholId)
    on delete cascade,
    VolumeSize int,
    Price int,
    Quantity int,
    MixerImg varchar(300)
);

create table Venue (
    venueId serial primary key,
    venueName varchar(300),
    venueLocation varchar(500),
    phoneNumber varchar(20)
);

create table Area (
    areaId serial primary key,
    venueId int,
    foreign key (venueId) references Venue(venueId)
    on delete cascade,
    areaName varchar(100)
);

create table Users (
    userId serial primary key,
    firstName varchar(100),
    lastName varchar(100),
    venueId int,
    foreign key (venueId) references Venue(venueId)
    on delete cascade,
    Email varchar(100),
    userPassword varchar(20),
    Position varchar(50),
    phoneNumber varchar(15) 
);

create table Section (
    sectionId serial primary key,
    sectionName varchar(100),
    venueId int,
    foreign key (venueId) references Venue(venueId)
    on delete cascade,
    areaId int,
    foreign key (areaId) references Area(areaId)
    on delete cascade,
    userId int,
    foreign key (userId) references Users(userId)
    on delete cascade,
    alcoholName varchar(100)
);


create table Reporting (
    reportingId serial primary key,
    BottleName varchar(50),
    userId int,
    foreign key (userId) references Users(userId)
    on delete cascade,
    venueId int,
    foreign key (venueId) references Venue(venueId)
    on delete cascade,
    AlcoholId int,
    foreign key (AlcoholId) references Alcohol(AlcoholId)
    on delete cascade,
    fullBottles int,
    partialBottle float
);