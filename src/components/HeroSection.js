import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="home">
      <div className="hero-btns">
        <h2
          
          class="font-effect-outline"
          style={{ fontFamily: "Roboto" }}
        >
          <b>Find your roommates </b>
        </h2>
        <h2
          align="left"
          class="font-effect-outline"
          style={{ fontFamily: "Roboto" }}
        >
          <b>among Bruins in one minute</b>
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
