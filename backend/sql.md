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

<!-- Live competitions -->
CREATE TABLE live_competitions(
    id INT NOT NULL AUTO_INCREMENT,
    team_id INT NOT NULL,
    competition_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(team_id) REFERENCES teams(id),
    FOREIGN KEY(competition_id) REFERENCES competitions(id)
);


<!-- favourite table -->
CREATE TABLE fav_competitions(
    id INT NOT NULL AUTO_INCREMENT,
    competition_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(competition_id) REFERENCES competitions(id)
);