const request = require("supertest");
const app = require('./app');

describe("Create a userinfo", () =>{
test("Should return a new userinfo", async () => {
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

const resp = await request(app).post("/userinfo/").send(input);

expect(resp.status).toBe(200);
expect(resp.body.SleepStart).toEqual(input.SleepStart);
expect(resp.body.SleepEnd).toEqual(input.SleepEnd);
expect(resp.body.BudgetLow).toEqual(input.BudgetLow);
expect(resp.body.BudgetHigh).toEqual(input.BudgetHigh);
expect(resp.body.Gender).toEqual(input.Gender);
expect(resp.body.Pet).toEqual(input.Pet);
expect(resp.body.Parking).toEqual(input.Parking);
expect(resp.body.Comment).toEqual(input.Comment);
expect(resp.body.ImageURL).toEqual(input.ImageURL);
});
});

describe("Get a userinfo", () =>{
test("Should return a userinfo", async () => {

const resp =  await request(app).get("/userinfo/1/");
const input = {
    "SleepStart": 0,
    "SleepEnd": 8,
    "BudgetLow": 600,
    "BudgetHigh": 1500,
    "Gender": "male",
    "Pet": 0,
    "Parking": 0,
    "Comment": "nice",
    "ImageURL": ""
}

expect(resp.status).toBe(200);
expect(resp.body.SleepStart).toEqual(input.SleepStart);
expect(resp.body.SleepEnd).toEqual(input.SleepEnd);
expect(resp.body.BudgetLow).toEqual(input.BudgetLow);
expect(resp.body.BudgetHigh).toEqual(input.BudgetHigh);
expect(resp.body.Gender).toEqual(input.Gender);
expect(resp.body.Pet).toEqual(input.Pet);
expect(resp.body.Parking).toEqual(input.Parking);
expect(resp.body.Comment).toEqual(input.Comment);
expect(resp.body.ImageURL).toEqual(input.ImageURL);
});
});

describe("Update a userinfo", () =>{
test("Should return the modified userinfo", async () => {
const input = {
    "SleepStart": 4,
    "SleepEnd": 8,
    "BudgetLow": 500,
    "BudgetHigh": 700,
    "Gender": "Male",
    "Pet": 0,
    "Parking": 0,
    "Comment": "null",
    "ImageURL": "null"
}
const resp =  await request(app).put("/userinfo/1/").send(input);

expect(resp.status).toBe(200);
expect(resp.body.SleepStart).toEqual(input.SleepStart);
expect(resp.body.SleepEnd).toEqual(input.SleepEnd);
expect(resp.body.BudgetLow).toEqual(input.BudgetLow);
expect(resp.body.BudgetHigh).toEqual(input.BudgetHigh);
expect(resp.body.Gender).toEqual(input.Gender);
expect(resp.body.Pet).toEqual(input.Pet);
expect(resp.body.Parking).toEqual(input.Parking);
expect(resp.body.Comment).toEqual(input.Comment);
expect(resp.body.ImageURL).toEqual(input.ImageURL);
});
});

describe("Delete a userinfo", () =>{
test("Should return with status 200", async () => { 
const resp =  await request(app).delete("/userinfo/1/");
//const deleteNewUser = app.delete("/users/1/");

expect(resp.status).toBe(200);
expect(resp.body.message).toMatch(/success/);
});
});
