import React, { useState } from "react";
import { Button } from "../Button";
import "../../App.css";
import "./forms/Form1.css";
import FormSignup from "./forms/FormSignup";
import FormUserDetails from "./forms/FormUserDetails";
import FormUserDetails1 from "./forms/FormUserDetails1";
import ApartmentInfo1 from "./forms/ApartmentInfo1";
import ApartmentInfo2 from "./forms/ApartmentInfo2";
import Submitted from "./forms/Submitted";
import { withRouter } from "react-router-dom";
import { post } from "../../utils/request";

function Signup({ history }) {
  const [signUpPage, setSignUpPage] = useState("account");
  const [ownCar, setCar] = useState("false");
  const [user, setUser] = useState({});
  const [apt, setApt] = useState({});
  const [userinfo, setUserinfo] = useState({});

  const [profile, setProfile] = useState({});
  const handleProfileChange = (fieldId, value) => {
    var temp = profile;
    temp[fieldId] = value;
    setProfile({ ...profile, [fieldId]: value });
    console.log(fieldId, value);
    if (fieldId === "sleepSchedule") {
      setUserinfo({
        ...userinfo,
        SleepStart: Number(value.start.replace(":", "")),
        SleepEnd: Number(value.end.replace(":", "")),
      });
    }
    if (fieldId === "ownCar") {
      setUserinfo({ ...userinfo, Parking: value });
    }
    if (fieldId === "Pet") {
      console.log(value);
      setUserinfo({ ...userinfo, Pet: value, HasPet: value });
    }
    // profile = temp
  };

  const signUp = () => {
    const preference = {
      SleepStart: userinfo.SleepStart,
      SleepEnd: userinfo.SleepEnd,
      Gender: userinfo.Gender,
      HasPet: userinfo.Pet,
    };
    const body = {
      user,
      userinfo,
      preference,
      apt,
    };
    post("/users", { ...user, Contact: 0 }).then((res) => {
      console.log(res);
      const id = res.id;
      post("/preferences", { ID: id, ...preference });
      post("/userinfo", { ID: id, ...userinfo });
      if (apt.Name) {
        post("/apt", apt).then((res) => {
          post("ownership", { UsrID: id, AptID: res.id });
        });
      }
    });
  };

  const [userErrors, setUserErrors] = useState({});
  function setPage() {
    if (signUpPage === "account") {
      return (
        <>
          <div className="signup">
            <div className="form-container">
              <span className="close-btn">×</span>
              <div className="form-content">
                <form className="form" noValidate>
                  <FormSignup
                    errors={userErrors}
                    handleChange={(e) => {
                      setUser({ ...user, ...e });
                    }}
                  />

                  <Button
                    buttonStyle="btn--outline"
                    buttonLink="/signup"
                    onClick={() => {
                      if (!/\S+@ucla.edu/.test(user.Email)) {
                        setUserErrors({
                          email: "you have to enter your ucla email",
                        });
                        return;
                      }
                      setUserErrors({});
                      setSignUpPage("habits");
                    }}
                  >
                    Continue
                  </Button>
                  <span className="form-input-login">
                    Already have an account? Login{" "}
                    <a href="http://localhost:3001/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3001/login"> </a>
              </span>
            </div>
          </div>
        </>
      );
    } else if (signUpPage === "habits") {
      return (
        <>
          <>
            <div className="signup">
              <div className="form-container">
                <span className="close-btn">×</span>
                <div className="form-content">
                  <form className="form" noValidate>
                    <FormUserDetails
                      onChange={handleProfileChange}
                      profile={profile}
                    />

                    <span>
                      <Button
                        buttonStyle="btn--outline"
                        buttonLink="/signup"
                        onClick={() => setSignUpPage("account")}
                      >
                        Back
                      </Button>

                      <Button
                        buttonStyle="btn--outline"
                        buttonLink="/signup"
                        onClick={() => setSignUpPage("habits1")}
                      >
                        Continue
                      </Button>
                    </span>
                    <span className="form-input-login">
                      Already have an account? Login{" "}
                      <a href="http://localhost:3001/login">here</a>
                    </span>
                  </form>
                </div>
                <span className="next-btn">
                  <a href="http://localhost:3001/login"> </a>
                </span>
              </div>
            </div>
          </>
        </>
      );
    } else if (signUpPage === "habits1") {
      return (
        <>
          <div className="signup">
            <div className="form-container">
              <span className="close-btn">×</span>
              <div className="form-content">
                <form className="form" noValidate>
                  <FormUserDetails1
                    handleChange={(v) => setUserinfo({ ...userinfo, ...v })}
                  />

                  <span>
                    <Button
                      buttonStyle="btn--outline"
                      buttonLink="/signup"
                      onClick={() => setSignUpPage("habits")}
                    >
                      Back
                    </Button>

                    <Button
                      buttonStyle="btn--outline"
                      buttonLink="/signup"
                      onClick={() => setSignUpPage("apartment")}
                    >
                      Continue
                    </Button>
                  </span>
                  <span className="form-input-login">
                    Already have an account? Login{" "}
                    <a href="http://localhost:3001/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3001/login"> </a>
              </span>
            </div>
          </div>
        </>
      );
    } else if (signUpPage === "apartment") {
      return (
        <>
          <div className="signup">
            <div className="form-container">
              <span className="close-btn">×</span>
              <div className="form-content">
                <form className="form" noValidate>
                  <ApartmentInfo1
                    handleChange={(v) => setApt({ ...apt, ...v })}
                  />

                  <span>
                    <Button
                      buttonStyle="btn--outline"
                      buttonLink="/signup"
                      onClick={() => setSignUpPage("habits1")}
                    >
                      Back
                    </Button>

                    <Button
                      buttonStyle="btn--outline"
                      buttonLink="/signup"
                      onClick={() => setSignUpPage("apartment1")}
                    >
                      Continue
                    </Button>
                  </span>
                  <span className="form-input-login">
                    Already have an account? Login{" "}
                    <a href="http://localhost:3001/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3001/login"> </a>
              </span>
            </div>
          </div>
        </>
      );
    } else if (signUpPage === "apartment1") {
      return (
        <>
          <div className="signup">
            <div className="form-container">
              <span className="close-btn">×</span>
              <div className="form-content">
                <form className="form" noValidate>
                  <ApartmentInfo2
                    handleChange={(v) => setApt({ ...apt, ...v })}
                  />

                  <span>
                    <Button
                      buttonStyle="btn--outline"
                      buttonLink="/signup"
                      onClick={() => setSignUpPage("apartment")}
                    >
                      Back
                    </Button>

                    <Button
                      className="form-input-btn"
                      buttonStyle="btn--outline"
                      buttonLink="signup"
                      type="submit"
                      onClick={() => {
                        setSignUpPage("submitted");
                        signUp();
                      }}
                    >
                      Submit
                    </Button>
                  </span>
                  <span className="form-input-login">
                    Already have an account? Login{" "}
                    <a href="http://localhost:3001/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3001/login"> </a>
              </span>
            </div>
          </div>
        </>
      );
    } else if (signUpPage === "submitted") {
      return (
        <>
          <div className="signup">
            <div className="form-container">
              <span className="close-btn">×</span>
              <div className="form-content">
                <form className="form" noValidate>
                  <Submitted />

                  <span className="form-input-login">
                    You have successfully sign up! Login{" "}
                    <a href="http://localhost:3001/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3001/login"> </a>
              </span>
            </div>
          </div>
        </>
      );
    }
  }

  return setPage();
}

export default withRouter(Signup);
