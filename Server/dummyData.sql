-- Alcohol Table
INSERT INTO "public"."alcohol"("bevtype") VALUES('Beer') RETURNING "id", "bevtype";
INSERT INTO "public"."alcohol"("bevtype") VALUES('Wine') RETURNING "id", "bevtype";
INSERT INTO "public"."alcohol"("bevtype") VALUES('Liquor') RETURNING "id", "bevtype";
INSERT INTO "public"."alcohol"("bevtype") VALUES('Mixers') RETURNING "id", "bevtype";


-- BeverageList Table
INSERT INTO beveragelist (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('IPA', 'Sweetwater 420', 1, 16, 8, 6, '/public/imgs/beer.jpg');
INSERT INTO beveragelist (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Craft', 'Budlight', 1, 8, 4, 1, '/public/imgs/beer.jpg');
INSERT INTO beveragelist (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('White', 'Kendall Jackson', 2, 750, 20, 2, '/public/imgs/wine.jpg');
INSERT INTO beveragelist (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Sparkling', 'Champagne', 2, 750, 15, 2, '/public/imgs/wine.jpg');
INSERT INTO beveragelist (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Gin', 'Seagrams', 3, 750, 35, 2, '/public/imgs/liquor.jpg');
INSERT INTO beveragelist (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Bourbon', 'Macallen', 3, 750, 45, 6, '/public/imgs/liquor.jpg');
INSERT INTO beveragelist (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Fruit Mix', 'Pina Colada', 4, 750, 20, 3, '/public/imgs/mixer.jpg');
INSERT INTO beveragelist (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Juice', 'Orange Juice', 4, 20, 8, 1, '/public/imgs/mixer.jpg');
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
INSERT INTO placement (label, sectionid, beverageid) VALUES ('Test', 1, 2);
INSERT INTO placement (label, sectionid, beverageid) VALUES ('Test2', 2, 1);
-- Reporting Table
INSERT INTO reporting (bottlename, userid, alcoholid, fullbottles, partialbottle) VALUES ('Orange Juice', 2, 4, 3, .5);
INSERT INTO reporting (bottlename, userid, alcoholid, fullbottles, partialbottle) VALUES ('Kendall Jackson', 1,2, 10, .5);
