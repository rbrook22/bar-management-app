-- Alcohol Table
INSERT INTO "public"."alcohol"("bevtype") VALUES('Beer') RETURNING "id", "bevtype";
INSERT INTO "public"."alcohol"("bevtype") VALUES('Wine') RETURNING "id", "bevtype";
INSERT INTO "public"."alcohol"("bevtype") VALUES('Liquor') RETURNING "id", "bevtype";
INSERT INTO "public"."alcohol"("bevtype") VALUES('Mixers') RETURNING "id", "bevtype";


-- Beer Table
INSERT INTO beer (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('IPA', 'Sweetwater 420', 1, 16, 8, 6, '/public/imgs/beer.jpg');
INSERT INTO beer (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Craft', 'Budlight', 1, 8, 4, 1, '/public/imgs/beer.jpg');
-- Wine Table
INSERT INTO wine (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('White', 'Kendall Jackson', 2, 750, 20, 2, '/public/imgs/wine.jpg');
INSERT INTO wine (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Sparkling', 'Champagne', 2, 750, 15, 2, '/public/imgs/wine.jpg');
-- Liquor Table
INSERT INTO liquor (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Gin', 'Seagrams', 3, 750, 35, 2, '/public/imgs/liquor.jpg');
INSERT INTO liquor (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Bourbon', 'Macallen', 3, 750, 45, 6, '/public/imgs/liquor.jpg');
-- Mixer Table
INSERT INTO mixers (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Fruit Mix', 'Pina Colada', 4, 750, 20, 3, '/public/imgs/mixer.jpg');
INSERT INTO mixers (bevtype, bevname, alcoholid, volumesize, price, quantity, img) VALUES ('Juice', 'Orange Juice', 4, 20, 8, 1, '/public/imgs/mixer.jpg');
-- Venue Table
INSERT INTO venue (venuename, venuelocation, phonenumber) VALUES ('Quizzicle', '2334 Piedmont rd NE, Atlanta, GA, 30305', '866-773-6426');
INSERT INTO venue (venuename, venuelocation, phonenumber) VALUES ('Atlanta Tech', '3490 Piedmont ave NE, Atlanta, GA, 30305', '800-439-7929');
-- Users Table
INSERT INTO users (firstname, lastname, venueid, email, userpassword, position, phonenumber) VALUES ('Bhisma', 'B', 1, 'bhisma@test.com', 'test123', 'Manager', '404-810-1079');
INSERT INTO users (firstname, lastname, venueid, email, userpassword, position, phonenumber) VALUES ('Matthew', 'Freeman', 2, 'matthew@test.com', 'test123', 'Scrum Master', '678-320-6478');
-- Area Table
INSERT INTO area (venueid, areaname) VALUES (1, 'Front Bar');
INSERT INTO area (venueid, areaname) VALUES (2, 'Main Bar');
-- Section Table
INSERT INTO section (sectionname, venueid, areaid, userid, alcoholname) VALUES ('Top Shelf', 1, 2, 1, 'Seagrams');
INSERT INTO section (sectionname, venueid, areaid, userid, alcoholname) VALUES ('Left Wall', 2, 1, 2, 'Pina Colada');
-- Reporting Table
INSERT INTO reporting (bottlename, userid, venueid, alcoholid, fullbottles, partialbottle) VALUES ('Orange Juice', 2, 1, 4, 3, .5);
INSERT INTO reporting (bottlename, userid, venueid, alcoholid, fullbottles, partialbottle) VALUES ('Kendall Jackson', 1, 2, 2, 10, .5);