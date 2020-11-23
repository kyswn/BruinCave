import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div class="home" font-size="30px">
     
      <div className="hero-btns">
        <h1 class="font-effect-outline my-font" style={{ fontFamily: "Roboto" }}>
          <b>Find your roommates </b>
        </h1>
        <h2
          align="left"
          class="font-effect-outline my-font"
          style={{ fontFamily: "Roboto" }}
        >
          <b>among Bruins in an instant</b>
        </h2>
        <Button
          className="btns"
          buttonStyle="btn--outline1"
          buttonSize="btn--large"
        >
          find a ROOMMATE
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline1"
          buttonSize="btn--large"
        >
          find an APARTMENT
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline1"
          buttonSize="btn--large"
        >
          I'm a REALTOR
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
