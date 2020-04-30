#### SQL Queries

#### User creation
<!-- create users -->
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    salt VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    api_key VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


<!-- Insert user -->


<!-- Competitions -->
CREATE TABLE competitions(
    id INT NOT NULL AUTO_INCREMENT,
    name_competition VARCHAR(255) NOT NULL,
    start_date VARCHAR(255) NOT NULL,
    end_date VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

<!-- Insert comp -->
INSERT INTO competitions(name_competition, start_date, end_date, address)
VALUES ("FIFA World Cup", "12-01-2020", "09-05-2020", "Brazil"),
("UEFA Champions League", "10-04-2020", "09-08-2020", "Europe"),
("FIFA European Championship", "12-05-2020", "09-12-2020", "America"),
("Copa America", "12-06-2020", "09-08-2020", "Maracana"),
("Confederations Cup", "12-05-2020", "09-07-2020", "Qatar")




<!-- Teams -->
CREATE TABLE teams(
    id INT NOT NULL AUTO_INCREMENT,
    team_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    website VARCHAR(255) NOT NULL,
    mobile int NOT NULL,
    avatar VARCHAR(255),
    total_members int NOT NULL,
    PRIMARY KEY(id)
);

<!-- teams -->
INSERT INTO teams(team_name, address, website, mobile, avatar, total_members)
VALUES ("Spain", "Madrid", "http://www.soccer-spain.com/index.php", "99999999", "/images/spain.png", 10),
 ("France", "France", "https://www.francefootball.fr/", "99999999", "/images/france.png", 10),
 ("Denmark", "Denmark", "https://www.dbu.dk/", "99999999", "/images/denmark.png", 10),
 ("Australia", "Australia", "http://www.Australia.com", "99999999", "/images/australia.png", 10),
 ("Uraguay", "Uraguay", "https://www.auf.org.uy/", "99999999", "/images/uraguay.png", 10),
 ("Russia", "Russia", "http://russiateam.com/", "99999999", "/images/russia.png", 10),
 ("Saudi Arabia", "Saudi Arabia", "http://www.saff.com.sa/en/", "99999999", "/images/saudi-arabia.png", 10),
 ("Egypt", "Egypt", "http://www.Egypt.com", "99999999", "/images/egypt.png", 10),
 ("Portugal", "Portugal", "https://portugoal.net/", "99999999", "/images/portugal.png", 10),
 ("Morocco", "Morocco", "https://www.fifa.com/associations/association/mar/", "99999999", "/images/morocco.png", 10),
 ("Croatia", "Croatia", "https://hns-cff.hr/en/", "99999999", "/images/croatia.png", 10),
 ("Argentina", "Argentina", "https://www.fifa.com/associations/association/arg/", "99999999", "/images/argentina.png", 10),
 ("Nigeria", "Nigeria", "https://www.thenff.com/", "99999999", "/images/nigeria.png", 10),
 ("Iceland", "Iceland", "https://www.fifa.com/associations/association/isl/", "99999999", "/images/iceland.png", 10),
 ("Switzerland", "Switzerland", "https://www.football.ch/sfv.aspx", "99999999", "/images/switzerland.png", 10),
 ("Serbia", "Serbia", "https://www.fifa.com/associations/association/srb/", "99999999", "/images/serbia.png", 10),
 ("costa Rica", "costa Rica", "https://www.fifa.com/associations/association/crc/", "99999999", "/images/costa-rica.png", 10),
 ("Sweden", "Sweden", "https://www.svenskfotboll.se/mediaguide/the-swedish-football-association/", "99999999", "/images/sweden.png", 10),
 ("Mexico", "Mexico", "https://www.fifa.com/associations/association/mex/", "99999999", "/images/mexico.png", 10),
 ("Germany", "Germany", "https://www.dfb.de/en/en-start/", "99999999", "/images/germany.png", 10),
 ("Belgium", "Belgium", "https://www.rbfa.be/", "99999999", "/images/belgium.png", 10),
 ("England", "England", "http://www.thefa.com/", "99999999", "/images/england.png", 10),
 ("Tunisia", "Tunisia", "https://www.fifa.com/associations/association/tun/", "99999999", "/images/tunisia.png", 10),
 ("colombia", "colombia", "https://fcf.com.co/", "99999999", "/images/colombia.png", 10),
 ("Japan", "Japan", "http://www.jfa.jp/eng/", "99999999", "/images/Japan.png", 10),
 ("Senegal", "Senegal", "https://www.fifa.com/associations/association/sen/", "99999999", "/images/senegal.png", 10),
 ("Poland", "Poland", "https://www.pzpn.pl/en", "99999999", "/images/poland.png", 10);



<!-- Live competitions -->
CREATE TABLE live_competitions(
    id INT NOT NULL AUTO_INCREMENT,
    team_id INT NOT NULL,
    competition_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(team_id) REFERENCES teams(id),
    FOREIGN KEY(competition_id) REFERENCES competitions(id)
);

<!-- insert live competitions -->
INSERT INTO live_competitions(competition_id, team_id)
VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5),(1, 6), (1, 7), (1, 8), (1, 9), (1, 10),
(2, 11), (2, 12), (2, 13), (2, 14), (2, 15),(2, 16), (2, 17), (2, 18), (2, 19), (2, 20),
(3, 21), (3, 22), (3, 23), (3, 24), (3, 25),(3, 26), (3, 27), (3, 18), (3, 19), (3, 20),
(4, 14), (4, 23), (4, 13), (4, 4), (4, 25),(4, 26), (4, 17), (4, 18), (4, 9), (4, 19),
(5, 1), (5, 12), (5, 23), (5, 14), (5, 25),(5, 6), (5, 27), (5, 18), (5, 19), (5, 10);



<!-- favourite table -->
CREATE TABLE fav_competitions(
    id INT NOT NULL AUTO_INCREMENT,
    competition_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(competition_id) REFERENCES competitions(id)
);