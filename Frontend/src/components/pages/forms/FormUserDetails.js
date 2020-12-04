import React, {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form1.css';
import TimeRangeSlider from 'react-time-range-slider';

// var state = {
//     value: {
//         start: "00:00",
//         end: "23:59"
//     }
// }

function changeStartHandler(time){
    console.log("Start Handler Called", time);
};
    
// function timeChangeHandler(time){
//     state = {
//         value: time
//     }
// };

function changeCompleteHandler(time){
    console.log("Complete Handler Called", time);
};

const FormUserDetails = ({ submitForm, profile, onChange }) => {
  const { handleChange, values, errors } = useForm(
    submitForm,
    validate
  );

  const [value, setValue] = useState({
                start: "00:00",
                end: "23:59"
            });

  const timeChangeHandler = (time) => {
    onChange("sleepSchedule", time)
    setValue(time);
  }

  const handleCarChange = event => {
    const ownCar1 = event.target.value;
    onChange("ownCar", ownCar1);
  };

  return (
    <>
        <h1>
          <b>Sign up</b>
        </h1>
        <br/>
        <div className='form-inputs'>
          <label className='form-label'>Whats your sleeping schedule?<br/>time: {value.start}, {value.end}</label>
          <TimeRangeSlider
                disabled={false}
                format={24}
                maxValue={"23:59"}
                minValue={"00:00"}
                name={"time_range"}
                onChangeStart={changeStartHandler}
                onChangeComplete={changeCompleteHandler}
                onChange={timeChangeHandler}
                step={15}
                value={value}/>
          {errors.username && <p>{errors.username}</p>}
          <br/>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>How many pets do you have?</label>
          <input
            className='form-input'
            type='int'
            name='number'
            placeholder='Enter pets number'
            value={values.int}
            onChange={(e)=>onChange('Pet',e.target.value)}
          />
          {errors.int && <p>{errors.int}</p>}
          <br/>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>How many parking spaces do you need?</label>
          <input 
            className='form-input'
            type='int'
            placeholder='Enter parking space number'

            value={profile.ownCar} 
            onChange={handleCarChange}
          />

          {errors.password && <p>{errors.password}</p>}
          <br/>
        </div>
      </>
  );
};
export default FormUserDetails;