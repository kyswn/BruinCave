import React from "react";
//import Button from 'react-bootstrap/Button';
import "../../App.css";
import "./RecommendationCard.css";
import HomeIcon from '@material-ui/icons/Home';
import {Avatar} from '@material-ui/core';
import { useHistory } from "react-router-dom";
const RecommendationCard = (props) => {
  let history = useHistory();

  function handleClick() {
    let string ="/recommendProfile?id=" + props.id+ "&name=" + props.name;
    history.push(string);
  };
  return (
    <>
      <div class="card-padding">
        <div class="card card-shadow" style={{ width: "18rem", backgroundColor: props.score === 1 ? "#fff" : "#ffb300"}}>
          <br />
          <Avatar alt="User" 
            style={{width: 100, height: 100, marginLeft: "auto", marginRight: "auto"}}
            src={props.img}/>
          <div class="card-body">
            <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}>
              {props.name}
            </h5>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Gender: {props.gender}
            </p>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Email: {props.email}
            </p>
            <a onClick = {handleClick} class="card-link" style={{ fontFamily: "Roboto" }}>
              View Profile
            </a>
            {props.hasApartment? <HomeIcon style={{marginLeft: 120}}></HomeIcon> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default RecommendationCard;
