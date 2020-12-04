import React, {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form1.css';


const FormUserDetails1 = ({ handleChange, profile, onChange }) => {
  // const { handleChange, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  return (
    <>
        <h1>
          <b>Sign up</b>
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Gender</label>
          <input
            className='form-input'
            type='string'
            name='string'
            placeholder='F/M/Other'
            onChange={(e)=>handleChange({Gender:e.target.value})}
          />
          <br/>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Whats your minimum budget?</label>
          <input
            className='form-input'
            type='int'
            name='number'
            placeholder='Enter your minimum budget'
            onChange={(e)=>handleChange({BudgetLow:e.target.value})}
          />
          <br/>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Whats your maximun budget?</label>
          <input
            className='form-input'
            type='int'
            name='number'
            placeholder='Enter your maximun budget'
            onChange={(e)=>handleChange({BudgetHigh:e.target.value})}
          />
          <br/>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Do you already have an apartment?</label>
          <input
            className='form-input'
            type='string'
            name='string'
            placeholder='Y/N'
            onChange={()=>handleChange({})}
          />
          <br/>
        </div>

      </>
  );
};
export default FormUserDetails1;
