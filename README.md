# BruinCave

Welcome to BruinCave, where you can find your next perfect Bruin roommate(s)


## How to Run

1. Download MySQL, Node.js
2. Clone this project to your local folder
3. Create a MySQL account, then put the your database information in BruinCave/Backend/api/config/db.config.js
4. Run  /BruinCave/Backend/api/setup.sql to create the schemes, and then run /BruinCave/Backend/api/migration.sql to populate your database with mock database
5. Run npm install and npm start inside the folder BruinCave/Backend/aptID
6. Run npm install and npm start inside the folder BruinCave/Frontend
7. Have fun finding your next roommate(s)!



## Important Directories Structure

- Backend/  
  - api/
    - controllers/  
    HTTP logic
    - models/  
    Class definitions
      - db.js  
      the database connection file
    - out/  
    JSDoc generated documentations
    - routes/
    connect query with specific url
    - app.js
    - setup.sql  
    set up MySQL tables
    - migration.sql  
    put mock data in MySQL
  - tests/  
  All backend tests
- Frontend/
  - public/images
    contains images for mock users
  - src/
      - components/
        - pages/
          - forms/    
            components and logic related to sign in and signup
          - Profile.js    
            User edit profile component
          - ProfileDisplay.js   
            View profile of other users
          - Recommend.js   
            Roommate recommendation algorithm.
          - RecommendationCard.js   
            List view of recommended roommates.
        - Button.js   
          buttons we used for front end.
        - Navbar.js   
          navigation bar on top
      - Store/   
      Redux files
- README.md
- RESTAPI.md  
Detailed description of our RESTful API


## Testing Related Files
- Backend/
  - api/
    - tests/
      - user.test.js
      - userinfo.test.js
      - preference.test.js
      - ownership.test.js
      - apt.test.js
      - backend_test.md

## How to Run the Tests
