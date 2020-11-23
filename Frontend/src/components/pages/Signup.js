import React, { useState } from "react";
import { Button } from "../Button";
import "../../App.css";
import "./forms/Form1.css";
import FormSignup from "./forms/FormSignup";
import FormUserDetails from "./forms/FormUserDetails";

function Signup() {
  const [signUpPage, setSignUpPage] = useState("account");

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
                    <FormUserDetails />
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
                      onClick={() => setSignUpPage("habits")}
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
    }
  }

  return setPage();
}

export default Signup;
