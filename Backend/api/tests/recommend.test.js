const request = require("supertest");
const app = require("../app.js");

describe("Retrieve a recommendation with given userid(user without an apartment)", () => {
  test("Each time should return a JSON object of user JSON, userinfo JSON, apartment JSON(can be null or not null), and a score ", async () => {
    const resp_1 = await request(app).get("/recommend/5/");
    const resp_2 = await request(app).get("/recommend/5/");
    const resp_3 = await request(app).get("/recommend/5/");
    const resp_4 = await request(app).get("/recommend/5/");
    const resp_5 = await request(app).get("/recommend/5/");
    const resp_6 = await request(app).get("/recommend/5/");
    const resp_7 = await request(app).get("/recommend/5/");
    const resp_8 = await request(app).get("/recommend/5/");
    const resp_9 = await request(app).get("/recommend/5/");

    expect(resp_1.status).toBe(200);
    expect(resp_2.status).toBe(200);
    expect(resp_3.status).toBe(200);
    expect(resp_4.status).toBe(200);
    expect(resp_5.status).toBe(200);
    expect(resp_6.status).toBe(200);
    expect(resp_7.status).toBe(200);
    expect(resp_8.status).toBe(200);
    expect(resp_9.status).toBe(200);
    /*assert that there would be 9 users recommended to this user
expect(resp.body).toHaveLength(9);
*/
    //assert that the user won't be recommended to him/herself
    /*const expected_resp_format = 
[
{
    {
        "user": {
            "UserID": 6,
            "Name": "Chenglai",
            "Password": "test",
            "Email": "chenglai@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 7,
            "Name": "Xiao",
            "Password": "ucla",
            "Email": "xiao@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 8,
            "Name": "Donny",
            "Password": "bruin",
            "Email": "donny@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 9,
            "Name": "Guy",
            "Password": "champ",
            "Email": "guy@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 9,
            "Name": "Guy",
            "Password": "champ",
            "Email": "guy@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 10,
            "Name": "Dude",
            "Password": "pumpkin",
            "Email": "dude@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 1,
            "Name": "Jack",
            "Password": "1234",
            "Email": "jack@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 2,
            "Name": "Joe",
            "Password": "456",
            "Email": "joe@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 3,
            "Name": "Josephine",
            "Password": "pass",
            "Email": "josephine@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 4,
            "Name": "Mary",
            "Password": "word",
            "Email": "mary@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
}
];*/
    const own_JSON = {
      user: {
        UserID: 5,
        Name: "Yuan",
        Password: "test",
        Email: "yuan@ucla.edu",
        Contact: 123,
        Type: "renter",
      },
      userInfo: {
        ID: 5,
        SleepStart: 2300,
        SleepEnd: 700,
        BudgetLow: 600,
        BudgetHigh: 1500,
        Gender: "M",
        Pet: 0,
        Parking: 0,
        Comment: "nice",
        ImageURL: "/images/user5.jpg",
      },
      apartment: null,
      score: 1,
    };
    expect(resp_1.body).not.toEqual(own_JSON);
    expect(resp_2.body).not.toEqual(own_JSON);
    expect(resp_3.body).not.toEqual(own_JSON);
    expect(resp_4.body).not.toEqual(own_JSON);
    expect(resp_5.body).not.toEqual(own_JSON);
    expect(resp_6.body).not.toEqual(own_JSON);
    expect(resp_7.body).not.toEqual(own_JSON);
    expect(resp_8.body).not.toEqual(own_JSON);
    expect(resp_9.body).not.toEqual(own_JSON);
  });
});

describe("Retrieve a recommendation with given userid(user with an apartment)", () => {
  test("Each time should return a JSON object of user JSON, userinfo JSON, apartment JSON(must be null), and a score ", async () => {
    const resp_1 = await request(app).get("/recommend/1/");
    const resp_2 = await request(app).get("/recommend/1/");
    const resp_3 = await request(app).get("/recommend/1/");
    const resp_4 = await request(app).get("/recommend/1/");
    const resp_5 = await request(app).get("/recommend/1/");
    const resp_6 = await request(app).get("/recommend/1/");

    expect(resp_1.status).toBe(200);
    expect(resp_2.status).toBe(200);
    expect(resp_3.status).toBe(200);
    expect(resp_4.status).toBe(200);
    expect(resp_5.status).toBe(200);
    expect(resp_6.status).toBe(200);
    /*assert that there would be 6 users recommended to this user
expect(resp.body).toHaveLength(6);*/

    //assert that the user won't be recommended to him/herself
    /*const expected_resp_format = 
[
{
    {
        "user": {
            "UserID": 6,
            "Name": "Chenglai",
            "Password": "test",
            "Email": "chenglai@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 7,
            "Name": "Xiao",
            "Password": "ucla",
            "Email": "xiao@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 8,
            "Name": "Donny",
            "Password": "bruin",
            "Email": "donny@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 9,
            "Name": "Guy",
            "Password": "champ",
            "Email": "guy@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 9,
            "Name": "Guy",
            "Password": "champ",
            "Email": "guy@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 10,
            "Name": "Dude",
            "Password": "pumpkin",
            "Email": "dude@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 1,
            "Name": "Jack",
            "Password": "1234",
            "Email": "jack@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 2,
            "Name": "Joe",
            "Password": "456",
            "Email": "joe@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 3,
            "Name": "Josephine",
            "Password": "pass",
            "Email": "josephine@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
},
{
    {
        "UserID": 4,
            "Name": "Mary",
            "Password": "word",
            "Email": "mary@ucla.edu",
            "Contact": 123,
            "Type": "renter"
        }
    }
}
];*/
    const own_JSON = {
      user: {
        UserID: 1,
        Name: "Jack",
        Password: "1234",
        Email: "jack@ucla.edu",
        Contact: 123,
        Type: "renter",
      },
      userInfo: {
        ID: 1,
        SleepStart: 2300,
        SleepEnd: 700,
        BudgetLow: 600,
        BudgetHigh: 1500,
        Gender: "M",
        Pet: 0,
        Parking: 0,
        Comment: "nice",
        ImageURL: "/images/user1.jpg",
      },
      apartment: {
        ApartmentID: 1,
        Name: "Kelton 1390",
        Bedroom: 2,
        Bathroom: 2,
        Parking: 2,
        Description: "Good",
        Location: "westwood",
        Amenity: "pool",
        Price: 1000,
        Comment: "good apt",
      },
      score: 1,
    };
    expect(resp_1.body).not.toEqual(own_JSON);
    expect(resp_2.body).not.toEqual(own_JSON);
    expect(resp_3.body).not.toEqual(own_JSON);
    expect(resp_4.body).not.toEqual(own_JSON);
    expect(resp_5.body).not.toEqual(own_JSON);
    expect(resp_6.body).not.toEqual(own_JSON);

    //assert that this user won't be recommended with other users with an apartment
    expect(resp_1.body).toMatchObject([{ apartment: null }]);
    expect(resp_2.body).toMatchObject([{ apartment: null }]);
    expect(resp_3.body).toMatchObject([{ apartment: null }]);
    expect(resp_4.body).toMatchObject([{ apartment: null }]);
    expect(resp_5.body).toMatchObject([{ apartment: null }]);
    expect(resp_6.body).toMatchObject([{ apartment: null }]);
  });
});
