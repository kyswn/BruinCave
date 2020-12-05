const request = require("supertest");
const app = require("../app.js");
//const dummy_inputs = require('./migration.sql')

/*test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});*/

describe("Create a user", () => {
  test("Should return a new user", async () => {
    const input = {
      Name: "Ann",
      Password: "12",
      Email: "2426346",
      Contact: 1,
      Type: "realtor",
    };
    const resp = await request(app).post("/users/").send(input);

    /*const dummy_input1 = {
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
const createNewUserinfo = await request(app).post("/userinfo/").send(dummy_input1);*/

    expect(resp.status).toBe(200);
    expect(resp.body.Name).toEqual(input.Name);
    expect(resp.body.Password).toEqual(input.Password);
    expect(resp.body.Email).toEqual(input.Email);
    expect(resp.body.Contact).toEqual(input.Contact);
    expect(resp.body.Type).toEqual(input.Type);
  });
});

describe("Get all users", () => {
  test("Should return all users", async () => {
    const input_withid = {
      Name: "Ann",
      Password: "12",
      Email: "2426346",
      Contact: 1,
      Type: "realtor",
      UserID: 11,
    };

    //const add_user = await request(app).post("/users/").send(input);

    /*const dummy_input2 = {
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
const createNewUserinfo = await request(app).post("/userinfo/").send(dummy_input2);*/

    const resp = await request(app).get("/users/");

    expect(resp.status).toBe(200);
    expect(resp.body).toContainEqual(input_withid);
  });
});

describe("Get a user", () => {
  test("Should return a user", async () => {
    const resp = await request(app).get("/users/11/");
    const input = {
      Name: "Ann",
      Password: "12",
      Email: "2426346",
      Contact: 1,
      Type: "realtor",
    };

    expect(resp.status).toBe(200);
    expect(resp.body.Name).toEqual(input.Name);
    expect(resp.body.Password).toEqual(input.Password);
    expect(resp.body.Email).toEqual(input.Email);
    expect(resp.body.Contact).toEqual(input.Contact);
    expect(resp.body.Type).toEqual(input.Type);
  });
});

describe("Update a user", () => {
  test("Should return the modified user", async () => {
    const input = {
      Name: "Ben",
      Password: "123",
      Email: "1077",
      Contact: 2345,
      Type: "renter",
    };
    const resp = await request(app).put("/users/11/").send(input);

    expect(resp.status).toBe(200);
    expect(resp.body.Name).toEqual(input.Name);
    expect(resp.body.Password).toEqual(input.Password);
    expect(resp.body.Email).toEqual(input.Email);
    expect(resp.body.Contact).toEqual(input.Contact);
    expect(resp.body.Type).toEqual(input.Type);
  });
});

describe("Delete a user", () => {
  test("Should return with status 200", async () => {
    const input = {
      Name: "Ben",
      Password: "123",
      Email: "1077",
      Contact: 2345,
      Type: "renter",
    };
    const addNewUser = await request(app).post("/users/").send(input);
    const resp = await request(app).delete("/users/12/");

    expect(resp.status).toBe(200);
    expect(resp.body.message).toMatch(/success/);
  });
});

/*describe("Delete all users", () =>{
test("Should return with status 200", async () => {	
const resp =  await request(app).delete("/users/");
//const deleteUserinfo = await request(app).delete("/userinfo/2/");

expect(resp.status).toBe(200);
expect(resp.body.message).toMatch(/success/);
});
});*/
