import React from "react";
//import Button from 'react-bootstrap/Button';
import "../../App.css";
import "./RecommendationCard.css";
const RecommendationCard = (props) => {
  return (
    <>
      <div class="card-padding">
        <div class="card card-shadow" style={{ width: "18rem" }}>
          <br />
          <img
            src={props.img}
            class="card-img-top rounded-circle round-img"
            alt="user"
          ></img>
          <div class="card-body">
            <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}>
              {props.name}
            </h5>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Major: {props.major}
            </p>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Gender: {props.gender}
            </p>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Description: {props.description}
            </p>
            <a href="/login" class="card-link" style={{ fontFamily: "Roboto" }}>
              View Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecommendationCard;
