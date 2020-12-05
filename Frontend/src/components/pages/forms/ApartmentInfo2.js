import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form1.css";

const ApartmentInfo2 = ({ handleChange, profile, onChange }) => {
  // const { handleChange, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  return (
    <>
      <h1>
        <b>Sign up</b>
      </h1>
      <div className="form-inputs">
        <label className="form-label">Price of each room? </label>
        <input
          className="form-input"
          type="int"
          name="int"
          placeholder="Enter the price for each room"
          onChange={(e) => handleChange({ Price: e.target.value })}
        />
      </div>
      <br />
      <div className="form-inputs">
        <label className="form-label">Where is your apartment located?</label>
        <input
          className="form-input"
          type="string"
          name="string"
          placeholder="Enter street name and apartment name"
          onChange={(e) => handleChange({ Location: e.target.value })}
        />
        <br />
      </div>
      <div className="form-inputs">
        <label className="form-label">Amenities?</label>
        <input
          className="form-input"
          type="string"
          name="string"
          placeholder="Select relavenet amenities"
          onChange={(e) => handleChange({ Amenity: e.target.value })}
        />
        <br />
      </div>
      <div className="form-inputs">
        <label className="form-label">Any comments?</label>
        <input
          className="form-input"
          type="string"
          name="string"
          onChange={(e) => handleChange({ Comment: e.target.value })}
        />
        <br />
      </div>
    </>
  );
};
export default ApartmentInfo2;
