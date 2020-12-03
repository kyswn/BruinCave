import React, {useState, useEffect} from 'react';
import {get, put} from "../../utils/request";

const EditInput = ({value, onChange, edit}) => {
  return (
    edit ? <input
      className='value form-input'
      value={value}
      onChange={event => onChange(event.target.value)}
    /> : <div className='value'>{value}</div>
  )
}


export function Profile(props) {
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
    Comment: 'easygoing'
  })
  const id = ''//需要先知道id
  const [preference, setPreference] = useState({
    edit: false,
    SleepStart: 0,
    SleepEnd: 8,
    Gender: 'man',
    Pet: 1,
  })

  const [apartment, setApartment] = useState({
    edit: false,
    Location: "111 Bruin Ave, Apt 103",
    Bedroom: 2,
    Bathroom: 2,
    Parking: 1,
    Description: "nice apartment"
  })

  const updateUserinfo = () => {
    const {edit, ...data} = userInfo
    put('/userinfo/' + id, data)
  }
  const updatePreferences = () => {
    const {edit, ...data} = preference
    put('/preferences/' + id, data)
  }
  const updateApartment = () => {
    const {edit, ...data} = apartment
    put('/apt/' + id, data)
  }
  useEffect(() => {

    get('/userinfo/' + id).then(res => {
      setUserInfo(res)
    })
    get('/preferences/' + id).then(res => {
      setPreference(res)
    })
    get('/apt/' + id).then(res => {
      setApartment(res)
    })

  }, []);

  return (
    <div className="signup" style={{overflow: "auto"}}>
      <div className="form-container" style={{height: 'auto',width:600}}>
        <div className="form-content" style={{paddingBottom: 20}}>
          <div style={{textAlign: "center", fontSize: "2rem"}}>UserInfo
            <span className='edit' onClick={() => {
              if (userInfo.edit) {
                updateUserinfo()
              }
              setUserInfo({
                ...userInfo,
                edit: !userInfo.edit
              })
            }}>{userInfo.edit ? 'save' : 'edit'}</span>
          </div>
          <div className='display-row'>
            <div className='key'>SleepStart:</div>
            <EditInput value={userInfo.SleepStart} edit={userInfo.edit}
                       onChange={v => setUserInfo({...userInfo, SleepStart: v})}/>
          </div>
          <div className='display-row'>
            <div className='key'>SleepEnd:</div>
            <EditInput value={userInfo.SleepEnd} edit={userInfo.edit}
                       onChange={v => setUserInfo({...userInfo, SleepEnd: v})}/>
          </div>
          <div className='display-row'>
            <div className='key'>BudgetLow:</div>
            <EditInput value={userInfo.BudgetLow} edit={userInfo.edit}
                       onChange={v => setUserInfo({...userInfo, BudgetLow: v})}/>
          </div>
          <div className='display-row'>
            <div className='key'>BudgetHigh:</div>
            <EditInput value={userInfo.BudgetHigh} edit={userInfo.edit}
                       onChange={v => setUserInfo({...userInfo, BudgetHigh: v})}/>
          </div>
          <div className='display-row'>
            <div className='key'>Gender:</div>
            <EditInput value={userInfo.Gender} edit={userInfo.edit}
                       onChange={v => setUserInfo({...userInfo, Gender: v})}/>
          </div>
          <div className='display-row'>
            <div className='key'>Pet:</div>
            <EditInput value={userInfo.Pet} edit={userInfo.edit}
                       onChange={v => setUserInfo({...userInfo, Pet: v})}/>
          </div>
          <div className='display-row'>
            <div className='key'>Parking:</div>
            <EditInput value={userInfo.Parking} edit={userInfo.edit}
                       onChange={v => setUserInfo({...userInfo, Parking: v})}/>
          </div>
          <div className='display-row'>
            <div className='key'>Comment:</div>
            <EditInput value={userInfo.Comment} edit={userInfo.edit}
                       onChange={v => setUserInfo({...userInfo, Comment: v})}/>
          </div>  
      </div>
      <div className="form-content" style={{paddingBottom: 20, marginTop: 20}}>
          <div style={{textAlign: "center", fontSize: "2rem"}}>Preference
              <span className='edit'
                    onClick={() => {
                      if (preference.edit) {
                        updatePreferences()
                      }
                      setPreference({
                        ...preference,
                        edit: !preference.edit
                      })
                    }}>{preference.edit ? 'Save' : 'Edit'}</span>
            </div>
            <div className='display-row'>
              <div className='key'>SleepStart:</div>
              <EditInput value={preference.SleepStart} edit={preference.edit}
                        onChange={v => setPreference({...preference, SleepStart: v})}/>
            </div>
            <div className='display-row'>
              <div className='key'>SleepStart:</div>
              <EditInput value={preference.SleepEnd} edit={preference.edit}
                        onChange={v => setPreference({...preference, SleepEnd: v})}/>
            </div>
            <div className='display-row'>
              <div className='key'>Gender:</div>
              <EditInput value={preference.Gender} edit={preference.edit}
                        onChange={v => setPreference({...preference, Gender: v})}/>
            </div>
            <div className='display-row'>
              <div className='key'>Pet:</div>
              <EditInput value={preference.Pet} edit={preference.edit}
                        onChange={v => setPreference({...preference, Pet: v})}/>
            </div>
          </div>
          <div className="form-content" style={{paddingBottom: 20, marginTop: 20}}>
          <div style={{textAlign: "center",fontSize: "2rem"}}>Apartment
              <span className='edit'
                    onClick={() => {
                      if (apartment.edit) {
                        updateApartment()
                      }
                      setApartment({
                        ...apartment,
                        edit: !apartment.edit
                      })
                    }}>{apartment.edit ? 'Save' : 'Edit'}</span>
            </div>
            <div className='display-row'>
              <div className='key'>Location:</div>
              <EditInput value={apartment.Location} edit={apartment.edit}
                        onChange={v => setApartment({...apartment, Location: v})}/>
            </div>
            <div className='display-row'>
              <div className='key'>Bedroom:</div>
              <EditInput value={apartment.Bedroom} edit={apartment.edit}
                        onChange={v => setApartment({...apartment, Bedroom: v})}/>
            </div>
            <div className='display-row'>
              <div className='key'>Bathroom:</div>
              <EditInput value={apartment.Bathroom} edit={apartment.edit}
                        onChange={v => setApartment({...apartment, Bathroom: v})}/>
            </div>
            <div className='display-row'>
              <div className='key'>Parking:</div>
              <EditInput value={apartment.Parking} edit={apartment.edit}
                        onChange={v => setApartment({...apartment, Parking: v})}/>
            </div>
            <div className='display-row'>
              <div className='key'>Description:</div>
              <EditInput value={apartment.Description} edit={apartment.edit}
                        onChange={v => setApartment({...apartment, Description: v})}/>
            </div>
          </div>
        </div>

        

        
    </div>
  );
}

export default Profile;
