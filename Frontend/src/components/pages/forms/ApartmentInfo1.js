import React, {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form1.css';


const ApartmentInfo1 = ({ handleChange, profile, onChange }) => {
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
          <label className='form-label'>Apartment Name</label>
          <input
            className='form-input'
            type='string'
            name='string'
            placeholder='Enter your apartment name'
            onChange={(e)=>handleChange({Name:e.target.value})}
          />
          <br/>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>How many bedrooms?</label>
          <input
            className='form-input'
            type='int'
            name='number'
            placeholder='Enter number of bedrooms'
            onChange={(e)=>handleChange({Bedroom:e.target.value})}
          />
          <br/>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>How many bathrooms?</label>
          <input
            className='form-input'
            type='int'
            name='number'
            placeholder='Enter number of bathrooms'
            onChange={(e)=>handleChange({Bathroom:e.target.value})}
          />
          <br/>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>How many parking spaces?</label>
          <input
            className='form-input'
            type='int'
            name='number'
            placeholder='Enter number of parkings'
            onChange={(e)=>handleChange({Parking:e.target.value})}
          />
          <br/>
        </div>

      </>
  );
};
export default ApartmentInfo1;
