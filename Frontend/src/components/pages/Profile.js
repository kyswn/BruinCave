import React from 'react';

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
  const [userInfo, setUserInfo] = React.useState({
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

  const [preference, setPreference] = React.useState({
    edit: false,
    SleepStart: 0,
    SleepEnd: 8,
    Gender: 'man',
    Pet: 1,
  })

  React.useEffect(() => {
    const fetchThings = async () => {
      const _userinfo = await fetch("http://localhost:3000/userinfo/1");
      const _user = await fetch("http://localhost:3000/users/1");
      const userjson = await _user.json();
      const userinfojson = await _userinfo.json();

    }

  }, []);

  return (
    <div className="signup" style={{overflow: "auto"}}>
      <div className="form-container" style={{height: 'auto',width:600,marginTop:250,marginBottom:44}}>
        <div className="form-content" style={{paddingBottom: 40}}>
          <div style={{textAlign: "center"}}>UserInfo
            <span className='edit' onClick={() => setUserInfo({
              ...userInfo,
              edit: !userInfo.edit
            })}>{userInfo.edit ? 'save' : 'edit'}</span>
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

          <div style={{textAlign: "center", marginTop: 14}}>Preference
            <span className='edit'
                  onClick={() => setPreference({
                    ...preference,
                    edit: !preference.edit
                  })}>{preference.edit ? 'save' : 'edit'}</span>
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
      </div>
    </div>
  );
}

export default Profile;
