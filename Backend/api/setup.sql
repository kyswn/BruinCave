DROP DATABASE IF EXISTS main;
CREATE DATABASE main;
USE main;
CREATE TABLE User (
	UserID INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(255) NOT NULL,
	Password VARCHAR(255) NOT NULL,
	Email VARCHAR(255) NOT NULL,
	Contact INT NOT NULL,
	Type ENUM('renter', 'realtor'),
	PRIMARY KEY(UserID)
);


CREATE TABLE UserInfo (
	ID INT NOT NULL AUTO_INCREMENT,
	SleepStart INT,
	SleepEnd INT,
	BudgetLow INT,
	BudgetHigh INT,
	Gender VARCHAR(255),
	Pet BOOLEAN,
	Parking BOOLEAN,
	Comment VARCHAR(255),
	PRIMARY KEY(ID),
	FOREIGN KEY(ID) REFERENCES User(UserID)
);

CREATE TABLE Preference (
	ID INT NOT NULL AUTO_INCREMENT,
	SleepStart INT,
	SleepEnd INT,
	Gender VARCHAR(255),
	HasPet BOOLEAN,
	Description VARCHAR(255),
	PRIMARY KEY (ID),
	FOREIGN KEY(ID) REFERENCES User(UserID)
);

CREATE TABLE Apartment (
	ApartmentID INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(255) NOT NULL,
	Bedroom INT NOT NULL,
	Bathroom INT NOT NULL,
	Parking INT NOT NULL,
	Description VARCHAR(255),
	Location VARCHAR(255) NOT NULL,
	Amenity VARCHAR(255) NOT NULL,
	Price INT NOT NULL,
	Comment VARCHAR(255),
	PRIMARY KEY(ApartmentID)
);

CREATE TABLE Ownership (
	UsrID INT NOT NULL,
	AptID INT NOT NULL,
	PRIMARY KEY(UsrID, AptID),
	FOREIGN KEY(UsrID) REFERENCES User(UserID),
	FOREIGN KEY(AptID) REFERENCES Apartment(ApartmentID)
);

