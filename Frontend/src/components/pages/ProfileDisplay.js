import React from "react";
//import Button from 'react-bootstrap/Button';
import './forms/Form1.css';
import {Button} from "../Button";
import {useLocation} from 'react-router-dom'
import qs from 'querystring'
import './Profile.css'

const userInfo = {
  ID: 1,
  SleepStart: 0,
  SleepEnd: 8,
  BudgetLow: 2000,
  BudgetHigh: 3000,
  Gender: 'man',
  Pet: 1,
  Parking: 1,
  Comment: 'easygoing'
}
export default function ProfileDisplay() {
  const {search} = useLocation()
  const query = qs.parse(search && search.substr(1))
  return (
    <section id="facilities">
      <div className="form-container" style={{height: 'auto', width: 600}}>
        <div className="form-content" style={{paddingBottom: 40}}>
          <br/>
          <Button
            buttonStyle="btn--outline"
            buttonLink="/recommend"
          >
            Back
          </Button>
          {query.name &&
          <span className='key' style={{fontSize: '30px', float: 'right', marginTop: 10, marginRight: 40}}>{query.name}</span>}
          <div className='display-row' style={{marginTop: 30}}>
            <label className='key'>SleepStart:</label>
            <label className='value'>{userInfo.SleepStart}</label>
          </div>
          <div className='display-row'>
            <label className='key'>SleepEnd:</label>
            <label className='value'>{userInfo.SleepEnd}</label>
          </div>
          <div className='display-row'>
            <label className='key'>BudgetLow:</label>
            <label className='value'>{userInfo.BudgetLow}</label>
          </div>
          <div className='display-row'>
            <label className='key'>BudgetHigh:</label>
            <label className='value'>{userInfo.BudgetHigh}</label>
          </div>
          <div className='display-row'>
            <label className='key'>Gender:</label>
            <label className='value'>{userInfo.Gender}</label>
          </div>
          <div className='display-row'>
            <label className='key'>Pet:</label>
            <label className='value'>{userInfo.Pet}</label>
          </div>
          <div className='display-row'>
            <label className='key'>Parking:</label>
            <label className='value'>{userInfo.Parking}</label>
          </div>
          <div className='display-row'>
            <label className='key'>Comment:</label>
            <label className='value'>{userInfo.Comment}</label>
          </div>
        </div>
      </div>
    </section>
  );
}

