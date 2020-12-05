const request = require("supertest");
const app = require('../app.js');

describe("Create an ownership", () =>{
test("Should return a new ownership", async () => {
/*const newuser = {
    "Name": "Ann",
    "Password": "12",
    "Email": "2426346",
    "Contact": 1,
    "Type": "renter"
}   
const addNewUser =  await request(app).post("/users/").send(newuser);

const dummy_input1 = {
    "SleepStart": 0,
    "SleepEnd": 12,
    "BudgetLow": 800,
    "BudgetHigh": 1200,
    "Gender": "Male",
    "Pet": 0,
    "Parking": 1,
    "Comment": "null",
    "ImageURL": "null"
}

const dummy_input2 = {
    "SleepStart": 0,
    "SleepEnd": 12,
    "BudgetLow": 800,
    "BudgetHigh": 1200,
    "Gender": "Male",
    "Pet": 0,
    "Parking": 1,
    "Comment": "null",
    "ImageURL": "null"
}

const createUserinfo_1 = await request(app).post("/userinfo/").send(dummy_input1);
const createUserinfo_2 = await request(app).post("/userinfo/").send(dummy_input2);
*/

const input = {
    "UsrID": 1,
    "AptID": 5
}

const resp = await request(app).post("/ownership/").send(input);

expect(resp.status).toBe(200);
expect(resp.body.UsrID).toEqual(input.UsrID);
expect(resp.body.AptID).toEqual(input.AptID);
});
});

describe("Get an ownership by Userid", () =>{
test("Should return an array of corresponding AptID", async () => {

const resp =  await request(app).get("/ownership/u/7/");

expect(resp.status).toBe(200);
expect(resp.body).toContainEqual({"AptID": 4});

});
});

describe("Get an ownership by Userid", () =>{
test("Should return an array of corresponding UserID", async () => {

const resp =  await request(app).get("/ownership/a/5/");

expect(resp.status).toBe(200);
expect(resp.body).toContainEqual({"UsrID": 8});

});
});


describe("Delete an ownership by both id", () =>{
test("Should return with status 200", async () => { 
const resp =  await request(app).delete("/ownership/b/1/1/");
//const deleteNewUser = app.delete("/users/1/");

expect(resp.status).toBe(200);
expect(resp.body.message).toMatch(/success/);
});
});

describe("Delete an ownership by User id", () =>{
test("Should return with status 200", async () => { 
const resp =  await request(app).delete("/ownership/u/7/");
//const deleteNewUser = app.delete("/users/1/");

expect(resp.status).toBe(200);
expect(resp.body.message).toMatch(/success/);
});
});

describe("Delete an ownership by Apt id", () =>{
test("Should return with status 200", async () => { 
const resp =  await request(app).delete("/ownership/a/5/");
//const deleteNewUser = app.delete("/users/1/");

expect(resp.status).toBe(200);
expect(resp.body.message).toMatch(/success/);
});
});

describe("Delete all ownership", () =>{
test("Should return with status 200", async () => { 
const resp =  await request(app).delete("/ownership/");
//const deleteNewUser = app.delete("/users/1/");

expect(resp.status).toBe(200);
expect(resp.body.message).toMatch(/success/);
});
});