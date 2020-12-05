const request = require("supertest");
const app = require('./app');

describe("Creating an apartment", () =>{
test("Should return a new apartment", async () => {
const input = {
	"Name": "Ann",
    "Bedroom": 2,
    "Bathroom": 2,
    "Parking": 1,
    "Description": "me",
    "Location": "33",
    "Amenity": "char",
    "Price": 3333,
    "Comment": "real"
}	
const resp =  await request(app).post("/apt/").send(input);

expect(resp.status).toBe(200);
expect(resp.body.Bedroom).toEqual(input.Bedroom);
expect(resp.body.Bathroom).toEqual(input.Bathroom);
expect(resp.body.Parking).toEqual(input.Parking);
expect(resp.body.Description).toEqual(input.Description);
expect(resp.body.Location).toEqual(input.Location);
expect(resp.body.Amenity).toEqual(input.Amenity);
expect(resp.body.Price).toEqual(input.Price);
expect(resp.body.Comment).toEqual(input.Comment);
});
});

describe("Get an apartment", () =>{
test("Should return an apartment", async () => {

const resp =  await request(app).get("/apt/6/");
const input = {
    "Name": "Ann",
    "Bedroom": 2,
    "Bathroom": 2,
    "Parking": 1,
    "Description": "me",
    "Location": "33",
    "Amenity": "char",
    "Price": 3333,
    "Comment": "real"
}

expect(resp.status).toBe(200);
expect(resp.body.Bedroom).toEqual(input.Bedroom);
expect(resp.body.Bathroom).toEqual(input.Bathroom);
expect(resp.body.Parking).toEqual(input.Parking);
expect(resp.body.Description).toEqual(input.Description);
expect(resp.body.Location).toEqual(input.Location);
expect(resp.body.Amenity).toEqual(input.Amenity);
expect(resp.body.Price).toEqual(input.Price);
expect(resp.body.Comment).toEqual(input.Comment);
});
});

describe("Update an apatment", () =>{
test("Should return the modified apartment", async () => {
const input = {
    "Name": "Ben",
    "Bedroom": 1,
    "Bathroom": 1,
    "Parking": 0,
    "Description": "N",
    "Location": "99",
    "Amenity": "char",
    "Price": 9999,
    "Comment": "NULL"
}   
const resp =  await request(app).put("/apt/6/").send(input);

expect(resp.status).toBe(200);
expect(resp.body.Bedroom).toEqual(input.Bedroom);
expect(resp.body.Bathroom).toEqual(input.Bathroom);
expect(resp.body.Parking).toEqual(input.Parking);
expect(resp.body.Description).toEqual(input.Description);
expect(resp.body.Location).toEqual(input.Location);
expect(resp.body.Amenity).toEqual(input.Amenity);
expect(resp.body.Price).toEqual(input.Price);
expect(resp.body.Comment).toEqual(input.Comment);
});
});

describe("Delete an apartment", () =>{
test("Should return with status 200", async () => { 
const resp =  await request(app).delete("/apt/6/");

expect(resp.status).toBe(200);
expect(resp.body.message).toMatch(/Apt was deleted/);
});
});
