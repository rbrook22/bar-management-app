create table Alcohol (
    Id serial primary key,
    bevType varchar(10)
);

create table BeverageList (
    Id serial primary key,
    bevType varchar(30),
    bevName varchar(30),
    AlcoholId int references Alcohol(Id)
    on delete cascade,
    VolumeSize int,
    Price int,
    Quantity int,
    Img varchar(300)
);

create table Venue (
    Id serial primary key,
    label varchar(300),
    venueLocation varchar(500),
    phoneNumber varchar(20)
);

create table Area (
    Id serial primary key,
    venueId int references Venue(Id)
    on delete cascade,
    label varchar(100)
);

create table Users (
    Id serial primary key,
    firstName varchar(100),
    lastName varchar(100),
    venueId int references Venue(Id)
    on delete cascade,
    Email varchar(100),
    userPassword varchar(20),
    Position varchar(50),
    phoneNumber varchar(20) 
);

create table Section (
    Id serial primary key,
    label varchar(100),
    areaId int references Area(Id)
    on delete cascade
);


create table Reporting (
    Id serial primary key,
    BottleName varchar(50),
    userId int references Users(Id)
    on delete cascade,
    AlcoholId int references Alcohol(Id)
    on delete cascade,
    fullBottles int,
    partialBottle float
);