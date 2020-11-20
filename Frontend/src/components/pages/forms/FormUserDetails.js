import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form1.css';

const FormUserDetails = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
        <h1>
          Sign up
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Whats your sleeping schedule?</label>
          <input
            className='form-input'
            type='text'
            name='schedule'
            placeholder='Enter your sleeping schedule'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Do you have pets?</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter pets'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Do you have a car?</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your car'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Do you intend to host activities? How often?</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your party'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        
        
        
        
       
      </>
  );
};
export default FormUserDetails;