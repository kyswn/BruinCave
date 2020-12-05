import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form1.css";

const FormSignup = ({ handleChange, errors }) => {
  // const { handleChange, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  return (
    <>
      <h1 style={{ fontFamily: "Roboto" }}>
        <b>Sign up</b>
      </h1>
      <div className="form-inputs">
        <label className="form-label">Username</label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={(e) => handleChange({ Name: e.target.value })}
        />
        <br />
      </div>
      <div className="form-inputs">
        <label className="form-label">UCLA Email</label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter your UCLA email"
          onChange={(e) => handleChange({ Email: e.target.value })}
        />
        <br />
        {errors && errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-inputs">
        <label className="form-label">Password</label>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => handleChange({ Password: e.target.value })}
        />
        <br />
      </div>
      <div className="form-inputs">
        <label className="form-label">Confirm Password</label>
        <input
          className="form-input"
          type="password"
          name="password2"
          placeholder="Confirm your password"
          onChange={(e) => handleChange({ Password2: e.target.value })}
        />
        <br />
      </div>
    </>
  );
};
export default FormSignup;
