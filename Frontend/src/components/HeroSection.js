import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div class="home" font-size="30px">
      <div className="hero-btns">
        <h1
          class="font-effect-outline my-font"
          style={{ fontFamily: "Roboto" }}
        >
          <b>Find your roommates </b>
        </h1>
        <h2
          align="left"
          class="font-effect-outline my-font"
          style={{ fontFamily: "Roboto" }}
        >
          <b>among Bruins in an instant</b>
        </h2>
        {!window.userId && (
          <Button
            className="btns"
            buttonStyle="btn--outline1"
            buttonSize="btn--large"
          >
            find a ROOMMATE
          </Button>
        )}
        {!window.userId && (
          <Button
            className="btns"
            buttonStyle="btn--outline1"
            buttonSize="btn--large"
          >
            find an APARTMENT
          </Button>
        )}
        {window.userId && (
          <Button
            className="btns"
            buttonStyle="btn--outline1"
            buttonSize="btn--large"
            buttonLink="/recommend"
          >
            find a ROOMMATE
          </Button>
        )}
        {window.userId && (
          <Button
            className="btns"
            buttonStyle="btn--outline1"
            buttonSize="btn--large"
            buttonLink="/recommend"
          >
            find an APARTMENT
          </Button>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
