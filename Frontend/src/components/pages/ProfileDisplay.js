import React, {useEffect, useState} from "react";
//import Button from 'react-bootstrap/Button';
import './forms/Form1.css';
import {Button} from "../Button";
import {useLocation} from 'react-router-dom'
import qs from 'querystring'
import './Profile.css'

export default function ProfileDisplay() {
  const {search} = useLocation()
  const query = qs.parse(search && search.substr(1))
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const fetchThings = async () => {
      const _userinfo = await fetch("http://localhost:3000/userinfo/"+query.id);
      const userinfojson = await _userinfo.json();
      setUserInfo(userinfojson)
    };

    fetchThings();
  }, []);


  return (
    <section id="facilities">
      <div className="form-container" style={{height: 'auto', width: 600}}>
        <div className="form-content" style={{paddingBottom: 40}}>
          <Button
            buttonStyle="btn--outline"
            buttonLink="/recommend"
          >
            Back
          </Button>
          {query.id &&
          <span className='key' style={{fontSize: "30px", float: 'right', marginTop: 10, marginRight: 40}}>{query.id}</span>}
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
