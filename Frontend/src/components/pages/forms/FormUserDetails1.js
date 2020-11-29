import React, {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form1.css';


const FormUserDetails1 = ({ submitForm, profile, onChange }) => {
  const { handleChange, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
        <h1>
          Sign up
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Gender</label>
          <input
            className='form-input'
            type='string'
            name='string'
            placeholder='F/M/Other'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Whats your minimum budget?</label>
          <input
            className='form-input'
            type='int'
            name='number'
            placeholder='Enter your minimum budget'
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Whats your maximun budget?</label>
          <input
            className='form-input'
            type='int'
            name='number'
            placeholder='Enter your maximun budget'
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Do you already have an apartment?</label>
          <input
            className='form-input'
            type='string'
            name='string'
            placeholder='Y/N'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
      </>
  );
};
export default FormUserDetails1;