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
- README.md
- RESTAPI.md  
Detailed description of our RESTful API


## Testing
- Backend/
  - api/
    - tests/
      - user.test.js
      - userinfo.test.js
      - preference.test.js
      - ownership.test.js
      - apt.test.js
      - backend_test.md


## Reference
- React official documents and tutorials
- CS 144 course material
- Stack overflow