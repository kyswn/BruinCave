import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form1.css";

const Submitted = ({ submitForm, profile, onChange }) => {
  const { handleChange, values, errors } = useForm(submitForm, validate);

  return (
    <>
      <h1>You have signed up successfully!</h1>
    </>
  );
};
export default Submitted;
