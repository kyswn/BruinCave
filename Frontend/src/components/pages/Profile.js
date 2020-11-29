import React from "react";
//import Button from 'react-bootstrap/Button';
import "../../App.css";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div class="profile-padding">
        <div class="profile-shadow" style={{ width: "38rem" }}>
          <br />
          <img
            src="/images/user7.jpg"
            class="card-img-top rounded-circle round-img"
            alt="user"
            style = {{position: 'middle'}}
          ></img>
          <div class="card-body">
            <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}>
              iris
            </h5>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Major:  x
            </p>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Gender: female
            </p>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Description: abaaba
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
