##  **Notice before using the api:**
1. Set up your databse and then put the db information in BruinCave\Backend\api\config\db.config.js
2. If see Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client]  
Try: https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

## API:

User JSON :  
{       
  "Name": string,            
  "Password": string,      
  "Contact": int,         
  "Email":  string,         
  "Type" =  string (has to be either "renter" or "realtor")     
}      


- GET /users  
Retrieve all users; return an array of user JSON

- POST /users    
Create a user ; Pass a user JSON as the body; return a user JSON if success

- DELETE /users   
Delete all users

- GET /users/[id]   
Retrieve info of a single user with UserID id; Return a user JSON if success

- POST /users/[id]  
Update the user info of user with UserID id; Pass a user JSON as body; Return a user JSON after change if success

- DELETE /users/[id]    
delete the user with UserID id
