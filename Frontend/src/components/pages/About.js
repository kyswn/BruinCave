import React from "react";
import "../../App.css";
import "./RecommendationCard.css";

const AboutCard = () => {
  return (
    <>
      <div class="card-padding">
        <div class="card card-shadow" style={{ width: "18rem" }}>
          <br />

          <div class="card-body">
            <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}>
              Centralized
            </h5>
            <br/>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              devoted to roommate matching for UCLA students
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function About() {
  return (
    
  <section id='facilities1'>
    <div class="container">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <h2 class="font-effect-outline my-font" style={{ fontFamily: "Roboto" }}>
          <b>We bring services that are:</b>
        </h2>
    <br/>
    
    <div className="row card-padding">
    <div class="card-padding">
        <div class="card card-shadow" style={{ width: "18rem" }}>
          <br />

          <div class="card-body">
            <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}>
              Centralized
            </h5>
            <br/>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Devoted to roommate matching for UCLA students
              
            </p>
            <br/>
          </div>
        </div>
      </div>
      <div class="card-padding">
        <div class="card card-shadow" style={{ width: "18rem" }}>
          <br />

          <div class="card-body">
            <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}>
            Thorough
            </h5>
            <br/>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
            Recommends roommates based on multiple factors
            </p>
            <br/>
          </div>
        </div>
      </div>
      <div class="card-padding">
        <div class="card card-shadow" style={{ width: "18rem" }}>
          <br />

          <div class="card-body">
            <h5 class="card-title title" style={{ fontFamily: "Syne Mono" }}>
              Private
            </h5>
            <br/>
            <p class="card-text" style={{ fontFamily: "Roboto" }}>
              Provides services to verified members of UCLA community
            </p>
            <br/>
          </div>
        </div>
      </div>
      </div>
      </div>
  </section>);
}
