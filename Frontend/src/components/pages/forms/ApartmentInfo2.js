import React, {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form1.css';


const ApartmentInfo2 = ({ submitForm, profile, onChange }) => {
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
          <label className='form-label'>Price of each room? </label>
          <input
            className='form-input'
            type='int'
            name='int'
            placeholder='Enter the price for each room'
            value={values.int}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Where is your apartment located?</label>
          <input
            className='form-input'
            type='string'
            name='string'
            placeholder='Enter street name and apartment name'
            value={values.string}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Amenities?</label>
          <input
            className='form-input'
            type='string'
            name='string'
            placeholder='Select relavenet amenities'
            value={values.string}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Any comments?</label>
          <input
            className='form-input'
            type='string'
            name='string'
            value={values.string}
            onChange={handleChange}
          />
        </div>
        
      </>
  );
};
export default ApartmentInfo2;