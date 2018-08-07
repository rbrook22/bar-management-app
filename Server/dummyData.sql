-- Alcohol Table
INSERT INTO "public"."alcohol"("alcoholtype") VALUES('Beer') RETURNING "alcoholid", "alcoholtype";
INSERT INTO "public"."alcohol"("alcoholtype") VALUES('Wine') RETURNING "alcoholid", "alcoholtype";
INSERT INTO "public"."alcohol"("alcoholtype") VALUES('Liquor') RETURNING "alcoholid", "alcoholtype";
INSERT INTO "public"."alcohol"("alcoholtype") VALUES('Mixers') RETURNING "alcoholid", "alcoholtype";


-- Beer Table
INSERT INTO "public"."beer"("beertype", "beername", "alcoholid", "volumesize", "price", "quantity", "beerimg") VALUES('IPA', 'Sweetwater 420', 1, 16, 8, 2, '/public/imgs/beer.jpg') RETURNING "beerid", "beertype", "beername", "alcoholid", "volumesize", "price", "quantity", "beerimg";
INSERT INTO "public"."beer"("beertype", "beername", "alcoholid", "volumesize", "price", "quantity", "beerimg") VALUES('Craft', 'Budlight', 1, 8, 4, 1, '/public/imgs/beer.jpg') RETURNING "beerid", "beertype", "beername", "alcoholid", "volumesize", "price", "quantity", "beerimg";

-- Liquor Table
INSERT INTO "public"."liquor"("liquortype", "liquorname", "alcoholid", "volumesize", "price", "quantity", "liqourimg") VALUES('Gin', 'Seagrams', 3, 750, 35, 1, '/public/imgs/liquor.jpg') RETURNING "liquorid", "liquortype", "liquorname", "alcoholid", "volumesize", "price", "quantity", "liqourimg";
INSERT INTO "public"."liquor"("liquortype", "liquorname", "alcoholid", "volumesize", "price", "quantity", "liqourimg") VALUES('Bourbon', 'Macallan', 3, 750, 40, 1, '/public/imgs/liquor.jpg') RETURNING "liquorid", "liquortype", "liquorname", "alcoholid", "volumesize", "price", "quantity", "liqourimg";

-- Mixer Table
INSERT INTO "public"."mixers"("mixertype", "mixername", "alcoholid", "volumesize", "price", "quantity", "mixerimg") VALUES('Fruit Mix', 'Pina Colada', 4, 750, 20, 1, '/public/imgs/mixer.jpg') RETURNING "mixerid", "mixertype", "mixername", "alcoholid", "volumesize", "price", "quantity", "mixerimg";
INSERT INTO "public"."mixers"("mixertype", "mixername", "alcoholid", "volumesize", "price", "quantity", "mixerimg") VALUES('Juice', 'Juice', 4, 20, 10, 1, '/public/imgs/mixer.jpg') RETURNING "mixerid", "mixertype", "mixername", "alcoholid", "volumesize", "price", "quantity", "mixerimg";

-- Wine Table
INSERT INTO "public"."wine"("winetype", "winename", "alcoholid", "volumesize", "price", "quantity", "wineimg") VALUES('Sparkling', 'Champagne', 2, 750, 18, 1, '/public/imgs/wine.jpg') RETURNING "wineid", "winetype", "winename", "alcoholid", "volumesize", "price", "quantity", "wineimg";
INSERT INTO "public"."wine"("winetype", "winename", "alcoholid", "volumesize", "price", "quantity", "wineimg") VALUES('White', 'Kendall-Jackson', 2, 750, 15, 1, '/public/imgs/wine.jpg') RETURNING "wineid", "winetype", "winename", "alcoholid", "volumesize", "price", "quantity", "wineimg";

-- Venue Table
INSERT INTO "public"."venue"("venuename", "venuelocation", "phonenumber") VALUES('Puzzles', '1 Main St Rockmart, GA 30153', '2346784045') RETURNING "venueid", "venuename", "venuelocation", "phonenumber";
INSERT INTO "public"."venue"("venuename", "venuelocation", "phonenumber") VALUES('Atlanta Tech', '3423 Piedmont Rd NE', '77726333453') RETURNING "venueid", "venuename", "venuelocation", "phonenumber";

-- Users Table
INSERT INTO "public"."users"("firstname", "lastname", "venueid", "email", "userpassword", "position", "phonenumber") VALUES('Bhisma', 'B', 1, 'bhisma@test.com', 'test123', 'Manager', '8666636565') RETURNING "userid", "firstname", "lastname", "venueid", "email", "userpassword", "position", "phonenumber";
INSERT INTO "public"."users"("firstname", "lastname", "venueid", "email", "userpassword", "position", "phonenumber") VALUES('Matthew', 'Freeman', 1, 'matthew@test.com', 'test123', 'Scrum Master', '8667530919') RETURNING "userid", "firstname", "lastname", "venueid", "email", "userpassword", "position", "phonenumber";

-- Area Table
INSERT INTO "public"."area"("venueid", "areaname") VALUES(1, 'Front Bar') RETURNING "areaid", "venueid", "areaname";
INSERT INTO "public"."area"("venueid", "areaname") VALUES(1, 'Back Room') RETURNING "areaid", "venueid", "areaname";

-- Section Table
INSERT INTO "public"."section"("sectionname", "venueid", "areaid", "userid", "alcoholname") VALUES('Top Shelf', 1, 1, 2, 'Johnnie Walker') RETURNING "sectionid", "sectionname", "venueid", "areaid", "userid", "alcoholname";
INSERT INTO "public"."section"("sectionname", "venueid", "areaid", "userid", "alcoholname") VALUES('Bottom Rack', 1, 2, 1, 'Sweetwater 420') RETURNING "sectionid", "sectionname", "venueid", "areaid", "userid", "alcoholname";

-- Reporting Table
INSERT INTO "public"."reporting"("bottlename", "userid", "venueid", "alcoholid", "fullbottles", "partialbottle") VALUES('Johnnie Walker', 2, 1, 3, 12, 0.75) RETURNING "reportingid", "bottlename", "userid", "venueid", "alcoholid", "fullbottles", "partialbottle";
