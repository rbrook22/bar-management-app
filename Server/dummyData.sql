-- Alcohol Table
INSERT INTO "public"."alcohol"("bevtype") VALUES('Beer') RETURNING "id", "bevtype";
INSERT INTO "public"."alcohol"("bevtype") VALUES('Wine') RETURNING "id", "bevtype";
INSERT INTO "public"."alcohol"("bevtype") VALUES('Liquor') RETURNING "id", "bevtype";
INSERT INTO "public"."alcohol"("bevtype") VALUES('Mixers') RETURNING "id", "bevtype";


-- BeverageList Table
COPY beveragelist (bevtype, bevname, alcoholid, volumesize, price, quantity, img) 
    FROM '/tmp/beverageListTable.csv' 
    DELIMITER ',' 
    CSV HEADER
;
-- Venue Table
INSERT INTO venue (label, venuelocation, phonenumber) VALUES ('Quizzicle', '2334 Piedmont rd NE, Atlanta, GA, 30305', '866-773-6426');
INSERT INTO venue (label, venuelocation, phonenumber) VALUES ('Atlanta Tech', '3490 Piedmont ave NE, Atlanta, GA, 30305', '800-439-7929');
-- Users Table
INSERT INTO users (firstname, lastname, venueid, email, userpassword, position, phonenumber) VALUES ('Bhisma', 'B', 1, 'bhisma@test.com', 'test123', 'Manager', '404-810-1079');
INSERT INTO users (firstname, lastname, venueid, email, userpassword, position, phonenumber) VALUES ('Matthew', 'Freeman', 2, 'matthew@test.com', 'test123', 'Scrum Master', '678-320-6478');
-- Area Table
INSERT INTO area (venueid, label) VALUES (1, 'Front Bar');
INSERT INTO area (venueid, label) VALUES (2, 'Main Bar');
-- Section Table
INSERT INTO section (label, areaid) VALUES ('Top Shelf', 1);
INSERT INTO section (label, areaid) VALUES ('Left Wall', 2);
-- Placement Table
INSERT INTO placement (label, sectionid, beverageid, quantity) VALUES ('Test', 1, 2, 3.4);
INSERT INTO placement (label, sectionid, beverageid, quantity) VALUES ('Test2', 2, 1, 6);
-- Reporting Table
INSERT INTO reporting (bottlename, userid, alcoholid, fullbottles, partialbottle) VALUES ('Orange Juice', 2, 4, 3, .5);
INSERT INTO reporting (bottlename, userid, alcoholid, fullbottles, partialbottle) VALUES ('Kendall Jackson', 1,2, 10, .5);
