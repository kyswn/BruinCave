const request = require("supertest");
const app = require("../app.js");

describe("Create a preference", () => {
  test("Should return a new preference", async () => {
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
      SleepStart: 0,
      SleepEnd: 12,
      Gender: "Male",
      HasPet: 0,
      Description: "",
    };

    const resp = await request(app).post("/preferences/").send(input);

    expect(resp.status).toBe(200);
    expect(resp.body.SleepStart).toEqual(input.SleepStart);
    expect(resp.body.SleepEnd).toEqual(input.SleepEnd);
    expect(resp.body.Gender).toEqual(input.Gender);
    expect(resp.body.HasPet).toEqual(input.HasPet);
    expect(resp.body.Description).toEqual(input.Description);
  });
});

describe("Get a preference", () => {
  test("Should return a preference", async () => {
    const resp = await request(app).get("/preferences/10/");
    const input = {
      SleepStart: 0,
      SleepEnd: 12,
      Gender: "Male",
      HasPet: 0,
      Description: "",
    };

    expect(resp.status).toBe(200);
    expect(resp.body.SleepStart).toEqual(input.SleepStart);
    expect(resp.body.SleepEnd).toEqual(input.SleepEnd);
    expect(resp.body.Gender).toEqual(input.Gender);
    expect(resp.body.HasPet).toEqual(input.HasPet);
    expect(resp.body.Description).toEqual(input.Description);
  });
});

describe("Get all preferences", () => {
  test("Should return all preferences", async () => {
    const resp = await request(app).get("/preferences/");
    const input = {
      SleepStart: 0,
      SleepEnd: 12,
      Gender: "Male",
      HasPet: 0,
      Description: "",
      ID: 10,
    };
    expect(resp.status).toBe(200);
    expect(resp.body).toContainEqual(input);
  });
});

describe("Update a preference", () => {
  test("Should return the modified preference", async () => {
    const input = {
      SleepStart: 0,
      SleepEnd: 7,
      Gender: "Male",
      HasPet: 1,
      Description: "",
    };
    const resp = await request(app).put("/preferences/1/").send(input);

    expect(resp.status).toBe(200);
    expect(resp.body.SleepStart).toEqual(input.SleepStart);
    expect(resp.body.SleepEnd).toEqual(input.SleepEnd);
    expect(resp.body.Gender).toEqual(input.Gender);
    expect(resp.body.HasPet).toEqual(input.HasPet);
    expect(resp.body.Description).toEqual(input.Description);
  });
});

describe("Delete a preference", () => {
  test("Should return with status 200", async () => {
    const resp = await request(app).delete("/preferences/1/");
    //const deleteNewUser = app.delete("/users/1/");

    expect(resp.status).toBe(200);
    expect(resp.body.message).toMatch(/success/);
  });
});

describe("Delete all preferences", () => {
  test("Should return with status 200", async () => {
    const resp = await request(app).delete("/preferences/");
    //const deleteNewUser = app.delete("/users/1/");

    expect(resp.status).toBe(200);
    expect(resp.body.message).toMatch(/success/);
  });
});
