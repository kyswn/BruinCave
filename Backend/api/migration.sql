insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('1', 'Jack', '1234', 'jack@ucla.edu', '123', 'renter');
insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('2', 'Joe', '456', 'joe@ucla.edu', '123', 'renter');
insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('3', 'Josephine', 'pass','josephine@ucla.edu', '123', 'renter');
insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('4', 'Mary', 'word', 'mary@ucla.edu', '123', 'renter');
insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('5', 'Yuan', 'test', 'yuan@ucla.edu', '123', 'renter');
insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('6', 'Chenglai', 'test', 'chenglai@ucla.edu', '123', 'renter');
insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('7', 'Xiao', 'ucla', 'xiao@ucla.edu', '123', 'renter');
insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('8', 'Donny', 'bruin', 'donny@ucla.edu', '123', 'renter');
insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('9', 'Guy', 'champ', 'guy@ucla.edu', '123', 'renter');
insert into `User` (`UserID`, `Name`, `Password`, `Email`, `Contact`, `Type`) values ('10', 'Dude', 'pumpkin', 'dude@ucla.edu', '123', 'renter');

insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('1', '0', '8', '600', '1500', 'male', '0', '0', 'nice', '');
insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('2', '2', '10', '1000', '1500', 'male', '1', '0', 'nice', '');
insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('3', '22', '6', '1500', '2000', 'female', '0', '1', 'nice', '');
insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('4', '5', '12', '500', '1000', 'female', '0', '0', 'nice', '');
insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('5', '0', '8', '700', '1200', 'male', '0', '1', 'nice', '');
insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('6', '22', '7', '800', '2000', 'male', '1', '0', 'nice', '');
insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('7', '0', '6', '1300', '1500', 'female', '0', '0', 'nice', '');
insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('8', '1', '9', '1700', '2000', 'male', '0', '1', 'nice', '');
insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('9', '0', '7', '300', '800', 'male', '0', '0', 'nice', '');
#insert into `UserInfo` (`ID`, `SleepStart`, `SleepEnd`, `BudgetLow`, `BudgetHigh`, `Gender`, `Pet`, `Parking`, `Comment`, `ImageURL`) values ('10', '2', '10', '700', '900', 'male', '1', '0', 'nice', '');

insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('1', '2', '10', 'male', '1', 'nice');
insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('2', '0', '5', 'female', '0', 'nice');
insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('3', '4', '12', 'male', '0', 'nice');
insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('4', '22', '8', 'male', '1', 'nice');
insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('5', '23', '7', 'female', '1', 'nice');
insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('6', '21', '11', 'male', '0', 'nice');
insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('7', '0', '5', 'male', '1', 'nice');
insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('8', '2', '10', 'female', '0', 'nice');
insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('9', '3', '11', 'male', '1', 'nice');
#insert into `Preference` (`ID`, `SleepStart`, `SleepEnd`, `Gender`, `HasPet`, `Description`) values ('10', '23', '4', 'female', '0', 'nice');

insert into `Apartment` (`ApartmentID`, `Name`, `Bedroom`, `Bathroom`, `Parking`, `Description`, `Location`, `Amenity`, `Price`, `Comment`) values ('1', 'Kelton 1390', '2', '2', '2', 'Good', 'westwood', 'pool', '1700', 'good apt');
insert into `Apartment` (`ApartmentID`, `Name`, `Bedroom`, `Bathroom`, `Parking`, `Description`, `Location`, `Amenity`, `Price`, `Comment`) values ('2', 'Landfair 122', '3', '3', '2', 'Good', 'westood', 'lounge', '1000', 'good apt');
insert into `Apartment` (`ApartmentID`, `Name`, `Bedroom`, `Bathroom`, `Parking`, `Description`, `Location`, `Amenity`, `Price`, `Comment`) values ('3', 'Gayley 555', '2', '2', '1', 'Good', 'westwood', 'gym', '1500', 'good apt');
insert into `Apartment` (`ApartmentID`, `Name`, `Bedroom`, `Bathroom`, `Parking`, `Description`, `Location`, `Amenity`, `Price`, `Comment`) values ('4', 'Sawtelle 1300', '1', '1', '1', 'Good', 'sawtelle', 'pool', '2000', 'good apt');
insert into `Apartment` (`ApartmentID`, `Name`, `Bedroom`, `Bathroom`, `Parking`, `Description`, `Location`, `Amenity`, `Price`, `Comment`) values ('5', 'Veteran 888', '2', '2', '2', 'Good', 'westwood', 'pool', '600', 'good apt');

insert into `Ownership` (`UsrID`, `AptID`) values ('1','1');
insert into `Ownership` (`UsrID`, `AptID`) values ('2','1');
insert into `Ownership` (`UsrID`, `AptID`) values ('3','2');
insert into `Ownership` (`UsrID`, `AptID`) values ('4','3');
insert into `Ownership` (`UsrID`, `AptID`) values ('6','3');
insert into `Ownership` (`UsrID`, `AptID`) values ('7','4');
insert into `Ownership` (`UsrID`, `AptID`) values ('8','5');