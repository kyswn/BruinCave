import React, {useEffect, useState} from "react";
//import Button from 'react-bootstrap/Button';
import './forms/Form1.css';
import {Button} from "../Button";
import {useLocation} from 'react-router-dom'
import qs from 'querystring'
import './Profile.css'
import {get} from "../../utils/request";


export default function ProfileDisplay() {
  const {search} = useLocation()
  const query = qs.parse(search && search.substr(1))
  const [userInfo, setUserInfo] = useState({
    edit: false,
    ID: 1,
    SleepStart: 0,
    SleepEnd: 8,
    BudgetLow: 2000,
    BudgetHigh: 3000,
    Gender: 'man',
    Pet: 1,
    Parking: 1,
    Comment: 'easygoing',
    ImageURL: ''
  })
  const [apartment, setApartment] = useState({})

/*
  useEffect(() => {
    const id = ''//需要先知道id
    get('/userinfo/' + id).then(res => {
      setUserInfo(res)
    })
  }, []);
  
*/

  useEffect(() => {
    const fetchThings = async () => {
      const _userinfo = await fetch("http://localhost:3000/userinfo/"+query.id);
      const userinfojson = await _userinfo.json();
      setUserInfo(userinfojson)

      const _ownership = await fetch("http://localhost:3000/ownership/u/"+query.id);
      const ownershipjson = await _ownership.json(); 


      if (ownershipjson[0] && ownershipjson[0].AptID) {
        // console.log(ownershipjson[0].AptID)
        const _apartment = await fetch("http://localhost:3000/apt/"+ownershipjson[0].AptID);
        const apartmentjson = await _apartment.json();
        console.log(apartmentjson)
        setApartment(apartmentjson)
      }
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
          <div style={{textAlign: "center", fontSize: "2rem"}}>User Info</div>
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
      { Object.keys(apartment).length !== 0? (
        <div className="form-container" style={{height: 'auto', width: 600}}>
        <div className="form-content" style={{paddingBottom: 40}}>
          <div style={{textAlign: "center", fontSize: "2rem"}}>Apartment Info</div>
          <div className='display-row' style={{marginTop: 30}}>
            <label className='key'>Location:</label>
            <label className='value'>{apartment.Location}</label>
          </div>
          <div className='display-row'>
            <label className='key'>Bedroom:</label>
            <label className='value'>{apartment.Bedroom}</label>
          </div>
          <div className='display-row'>
            <label className='key'>Bathroom:</label>
            <label className='value'>{apartment.Bathroom}</label>
          </div>
          <div className='display-row'>
            <label className='key'>Parking:</label>
            <label className='value'>{apartment.Parking}</label>
          </div>
          <div className='display-row'>
            <label className='key'>Description:</label>
            <label className='value'>{apartment.Description}</label>
          </div>
          <div className='display-row'>
            <label className='key'>Price:</label>
            <label className='value'>{apartment.Price}</label>
          </div>
        </div>
      </div>) : null
      }
      
    </section>
  );
}
