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