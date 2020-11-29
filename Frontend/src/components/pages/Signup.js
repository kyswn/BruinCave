import React, { useState } from "react";
import { Button } from "../Button";
import "../../App.css";
import "./forms/Form1.css";
import FormSignup from "./forms/FormSignup";
import FormUserDetails from "./forms/FormUserDetails";
import FormUserDetails1 from "./forms/FormUserDetails1";
import ApartmentInfo1 from "./forms/ApartmentInfo1";
import ApartmentInfo2 from "./forms/ApartmentInfo2";
import submitted from "./forms/Submitted";




function Signup() {
  const [signUpPage, setSignUpPage] = useState("account");
  const [ownCar, setCar] = useState("false");

  const [profile, setProfile] = useState({
  });
  const handleProfileChange = (fieldId, value) => {
      var temp = profile
      temp[fieldId] = value
      setProfile(...profile, ([fieldId]: value))
      // profile = temp
      console.log(profile)

  };

  function setPage() {
    if (signUpPage === "account") {
      return (
        <>
          <div className="signup">
            <div className="form-container">
              <span className="close-btn">×</span>
              <div className="form-content">
                <form className="form" noValidate>
                  <FormSignup />

                  <Button
                    buttonStyle="btn--outline"
                    buttonLink="/signup"
                    onClick={() => setSignUpPage("habits")}
                  >
                    Continue
                  </Button>
                  <span className="form-input-login">
                    Already have an account? Login{" "}
                    <a href="http://localhost:3000/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3000/login"> </a>
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
                    <FormUserDetails onChange={handleProfileChange} profile={profile}/>
                    
                    <span ><Button
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
                    </Button></span>
                    <span className="form-input-login">
                      Already have an account? Login{" "}
                      <a href="http://localhost:3000/login">here</a>
                    </span>
                  </form>
                </div>
                <span className="next-btn">
                  <a href="http://localhost:3000/login"> </a>
                </span>
              </div>
            </div>
          </>
        </>
      );
    }else if (signUpPage === "habits1") {
      return (
        <>
          <div className="signup">
            <div className="form-container">
              <span className="close-btn">×</span>
              <div className="form-content">
                <form className="form" noValidate>
                  <FormUserDetails1 />

                  <span ><Button
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
                  </Button></span>
                  <span className="form-input-login">
                    Already have an account? Login{" "}
                    <a href="http://localhost:3000/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3000/login"> </a>
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
                  <ApartmentInfo1 />

                  <span ><Button
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
                  </Button></span>
                  <span className="form-input-login">
                    Already have an account? Login{" "}
                    <a href="http://localhost:3000/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3000/login"> </a>
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
                  <ApartmentInfo2 />

                  <span ><Button
                      buttonStyle="btn--outline"
                      buttonLink="/signup"
                      onClick={() => setSignUpPage("apartment")}
                    >
                      Back
                    </Button>

                  <Button className='form-input-btn' buttonStyle="btn--outline"
                      buttonLink="signup" type='submit' onClick={() => setSignUpPage("submitted")}>
                    Submit
                  </Button></span>
                  <span className="form-input-login">
                    Already have an account? Login{" "}
                    <a href="http://localhost:3000/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3000/login"> </a>
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
                  <submitted />

                  
                  <span className="form-input-login">
                    You have successfully sign up! Login{" "}
                    <a href="http://localhost:3000/login">here</a>
                  </span>
                </form>
              </div>
              <span className="next-btn">
                <a href="http://localhost:3000/login"> </a>
              </span>
            </div>
          </div>
        </>
      );
    } 
  }

  return setPage();
}

export default Signup;
