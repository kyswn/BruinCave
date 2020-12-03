##  **Notice before using the api:**
1. Set up your mysql database，then run \BruinCave\Backend\api\setup.sql to set up the tables, then put the db information in BruinCave\Backend\api\config\db.config.js
2. If see Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client]  
Try: https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

## API:
Class User: 

User JSON :  
{       
  "Name": string,              
  "Password": string,      
  "Contact": int,         
  "Email":  string,         
  "Type" : string (has to be either "renter" or "realtor")     
}      


- GET /users  
Retrieve all users; return an array of user JSON

- POST /users    
Create a user ; Pass a user JSON as the body; return a user JSON if success

- DELETE /users   
Delete all users

- GET /users/[id]   
Retrieve info of a single user with UserID id; Return a user JSON if success

- PUT /users/[id]  
Update the user info of user with UserID id; Pass a user JSON as body; Return a user JSON after change if success

- DELETE /users/[id]    
delete the user with UserID id

Class Preference: 

Preference JSON:
{
	"SleepStart": int,
    "SleepEnd": int,
    "Gender": string,
    "HasPet": BOOLEAN,
    "Description": string
}

- Post /preferences  
Create a preference ; Pass a preference JSON as the body; return a preference JSON if success

- GET /preferences    
Retrieve all preferences; return an array of preference JSON

- GET /preferences/[id]   
Retrieve info of a single preference with UserID id; Return a preference JSON if success

- PUT /preferences/[id]  
Update the preference info of user with UserID id; Pass a preference JSON as body; Return a preference JSON after change if success

- DELETE /preferences   
Delete all preferences

- DELETE /preferences/[id]    
delete the preference with UserID id

Note: Delete the preference only when the corresponding user is deleted. If trying to reset a preference profile, do PUT /preferences/[id] and pass in preference JSON with all entries set to null. 

Class Ownership: 

Ownership JSON: 
{
  "UsrID": int, 
  "AptID": int  
}


- Post /ownership  
Create an ownership ; Pass an ownership JSON as the body; return a ownership JSON if success

- GET /ownership/u/[id]  
Retrieve ownerships info of UserID id; return an array of corresponding Aptid if success

- GET /ownership/a/[id]  
Retrieve ownerships info of Apt id; return an array of corresponding Usrid if success

- DELETE /ownership/b/[Usrid]/[Aptid] 
Delete ownership entry with corresponding userid and aptid

- DELETE /ownership/u/[Usrid]
Delete ownership entry with corresponding userid

- DELETE /ownership/a/[Aptid] 
Delete ownership entry with corresponding aptid

- DELETE /ownership/
Delete all entries in the table

Class Apartment:

Apt JSON :  
{       
  "Name": string,            
  "Bedroom": int,      
  "Bathroom": int,         
  "Parking":  int,         
  "Description" : string,   
  "Location" : string,  
  "Amenity" : string,   
  "Price" : int,  
  "Comment" : string  
}  

- POST /apt    
Create an apartment; Pass in an apt JSON as the body; return an apt JSON if success

- GET /apt/[id]   
Retrieve info of a single apartment with aptID id; Return an apt JSON if success

- PUT /apt/[id]  
Update the apartment info with aptID id; Pass in an apt JSON as the body; Return an apt JSON after change if success

- DELETE /apt/[id]    
delete the apartment with aptID id

Class Userinfo: 

Userinfo JSON :  
{       
  "SleepStart": int,            
  "SleepEnd": int,      
  "BudgetLow": int,   
  "BudgetHigh": int,  
  "Gender": string,         
  "Pet":  BOOLEAN,   
  "Parking":  BOOLEAN,     
  "Comment" : string     
} 

- Post /userinfo  
Create a userinfo ; Pass in a Userinfo JSON as the body; return a Userinfo JSON if success

- GET /userinfo/[id]   
Retrieve a userifo with UserID id; Return a Userinfo JSON if success

- PUT /userinfo/[id]  
Update the userinfo with UserID id; Pass in a Userinfo JSON as body; Return a Userinfo JSON after change if success

- DELETE /userinfo/[id]    
delete the userinfo with UserID id

Recommend: 

- GET /recommend/[id]
Retrive a list of users that we recommend to the target user with UserID id(excluding the target user him/herself). Pass in an integer, return an array
of JSON object consists of User JSON, Userinfo JSON, and apt JSON. 
If the target user doesn't has an apt, it will be recommended with both users who have apartment and users who don't have apt(in this case, returned apt JSON would be null); if the target user has an apt, it will be recommended only with users who don't have an apt. 


